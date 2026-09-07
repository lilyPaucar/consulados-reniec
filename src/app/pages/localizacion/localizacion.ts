import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  signal,
  computed,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import * as THREE from 'three';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import countriesAtlas from 'world-atlas/countries-110m.json';

import {
  CONTINENTS_DATA,
  ContinentData,
  CountryData,
  ConsularCity
} from '../../data/consulados-data';

export type { ConsularCity, CountryData, ContinentData };

export interface HoveredMarkerInfo {
  country: CountryData;
  continent: ContinentData;
  screenX: number;
  screenY: number;
}

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './localizacion.html',
})
export class LocalizacionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('globeCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('containerRef', { static: true })
  containerRef!: ElementRef<HTMLDivElement>;

  // Three.js instances
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private globeMesh!: THREE.Mesh;
  private atmosphereMesh!: THREE.Mesh;
  private markersGroup!: THREE.Group;
  private markerMeshes: THREE.Mesh[] = [];
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private animationFrameId: number | null = null;

  // Interaction State
  private isDragging = false;
  private dragDistance = 0;
  private previousMousePosition = { x: 0, y: 0 };
  private startMousePosition = { x: 0, y: 0 };
  private targetRotation = { x: 0.3, y: -0.5 };
  private currentRotation = { x: 0.3, y: -0.5 };
  private targetZoom = 2.4;
  private currentZoom = 2.4;
  readonly autoRotate = signal<boolean>(true);

  // Active continent / country / hover state
  readonly selectedContinent = signal<ContinentData | null>(null);
  readonly hoveredMarker = signal<HoveredMarkerInfo | null>(null);
  readonly isSidebarOpen = signal<boolean>(false);

  // Continents Data with real geographic centers and color coding from data.xlsx
  readonly continents: ContinentData[] = CONTINENTS_DATA;

  readonly totalConsulates = computed(() => {
    return this.continents.reduce((acc, cont) => {
      return acc + cont.countries.reduce((cAcc, c) => cAcc + c.cities.length, 0);
    }, 0);
  });

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.initThree();
    this.animate();
    // Default focus South America
    this.focusContinent(this.continents[0]);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!this.containerRef || !this.renderer || !this.camera) return;
    const width = this.containerRef.nativeElement.clientWidth;
    const height = this.containerRef.nativeElement.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private initThree(): void {
    const container = this.containerRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = this.currentZoom;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xbfdbfe, 1.8);
    dirLight1.position.set(5, 3, 5);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.8);
    dirLight2.position.set(-5, -2, -3);
    this.scene.add(dirLight2);

    // Create Realistic World Map Texture using real GeoJSON boundaries
    const worldTexture = this.generateRealWorldTexture();

    // Earth Sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: worldTexture,
      roughness: 0.55,
      metalness: 0.12
    });
    this.globeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(this.globeMesh);

    // Glowing Atmosphere Ring
    const atmosphereGeometry = new THREE.SphereGeometry(1.025, 48, 48);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    this.atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.scene.add(this.atmosphereMesh);

    // Markers Group attached to globe
    this.markersGroup = new THREE.Group();
    this.globeMesh.add(this.markersGroup);

    // Add country pins to the 3D globe (1 pin per country)
    this.createMarkers();

    // Mouse & Touch interaction listeners
    this.setupInteractions(canvas);
  }

  /**
   * Generates a 2048x1024 texture from official Natural Earth / World-Atlas GeoJSON data,
   * accurately rendering real coastlines and country borders with distinct continent colors.
   */
  private generateRealWorldTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // 1. Deep Oceanic Gradient
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    oceanGrad.addColorStop(0, '#030f24');
    oceanGrad.addColorStop(0.5, '#071f42');
    oceanGrad.addColorStop(1, '#020b1a');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Latitude and Longitude Graticule (Subtle grid)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    for (let lat = -80; lat <= 80; lat += 20) {
      const y = ((90 - lat) / 180) * canvas.height;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    for (let lng = -180; lng <= 180; lng += 30) {
      const x = ((lng + 180) / 360) * canvas.width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // 3. Equirectangular Projection configured to the canvas
    const projection = geoEquirectangular()
      .scale(canvas.width / (2 * Math.PI))
      .translate([canvas.width / 2, canvas.height / 2]);

    const pathGenerator = geoPath(projection, ctx);

    // 4. ISO Numeric ID to Continent Mapping for 100% Real World Boundaries (5 Continents)
    const continentStyles: Record<string, { fill: string; stroke: string }> = {
      'america': { fill: '#10b981', stroke: '#34d399' }, // Emerald Green
      'europa': { fill: '#3b82f6', stroke: '#93c5fd' }, // Royal Blue
      'asia': { fill: '#ec4899', stroke: '#f472b6' }, // Magenta Pink (Includes Medio Oriente)
      'africa': { fill: '#eab308', stroke: '#facc15' }, // Gold Yellow
      'oceania': { fill: '#8b5cf6', stroke: '#c084fc' }, // Purple Violet
      'antartida': { fill: '#475569', stroke: '#94a3b8' } // Slate Ice
    };

    // Mapping sets by ISO numeric string codes
    const america = new Set([
      '840', '124', '484', '304', '320', '084', '84', '340', '222', '558', '188', '591',
      '192', '214', '332', '388', '044', '44', '630', '780', '032', '32', '068', '68',
      '076', '76', '152', '170', '218', '238', '254', '328', '600', '604', '740', '858', '862',
      '028', '28', '052', '52', '092', '92', '136', '212', '312', '659', '662', '670', '796'
    ]);
    const europe = new Set([
      '724', '620', '250', '276', '380', '826', '372', '056', '56', '528', '756', '040', '40',
      '616', '203', '703', '348', '642', '100', '300', '752', '578', '246', '208', '352', '233',
      '428', '440', '112', '804', '498', '688', '191', '070', '70', '008', '8', '807', '705',
      '499', '383', '442', '020', '20', '470', '196', '792', '643', '031', '31', '268', '051', '51',
      '352', '674', '474'
    ]);
    const africa = new Set([
      '818', '434', '788', '012', '12', '504', '732', '478', '466', '686', '270', '324', '624',
      '694', '430', '384', '288', '768', '204', '566', '562', '148', '729', '728', '232', '231',
      '262', '706', '140', '120', '226', '266', '178', '180', '800', '404', '646', '108', '834',
      '024', '24', '894', '716', '454', '508', '516', '072', '72', '710', '426', '748', '450',
      '854', '174', '175', '204', '260', '732', '678', '690', '748', '894', '626', '270', '728',
      '732'
    ]);
    const oceania = new Set([
      '036', '36', '554', '598', '242', '090', '90', '548', '540', '296', '584', '583', '585', '016', '16', '882'
    ]);
    const asia = new Set([
      '682', '400', '376', '422', '634', '784', '414', '368', '364', '048', '48', '512', '887', '760', '275',
      '156', '392', '410', '408', '356', '586', '050', '50', '704', '764', '360', '458', '702',
      '608', '116', '398', '860', '762', '795', '417', '004', '4', '524', '064', '64', '144',
      '462', '516', '096', '96', '104', '418', '704', '764', '496', '144', '064', '524', '158'
    ]);

    // Extract real geojson features
    const geojsonData = feature(
      countriesAtlas as any,
      (countriesAtlas as any).objects.countries
    ) as any;

    // Helper to get continent id for any country feature
    const getContinentId = (feat: any): string => {
      const id = String(feat.id || '');
      if (id === '010' || id === '10') return 'antartida';
      if (america.has(id)) return 'america';
      if (europe.has(id)) return 'europa';
      if (africa.has(id)) return 'africa';
      if (oceania.has(id)) return 'oceania';
      if (asia.has(id)) return 'asia';

      // Geographic coordinate fallback based on first coordinates
      try {
        let firstCoord: number[] = [0, 0];
        if (feat.geometry.type === 'Polygon') {
          firstCoord = feat.geometry.coordinates[0][0];
        } else if (feat.geometry.type === 'MultiPolygon') {
          firstCoord = feat.geometry.coordinates[0][0][0];
        }
        const [lng, lat] = firstCoord;
        if (lat < -60) return 'antartida';
        if (lng <= -30 && lng >= -175) return 'america';
        if (lng >= -25 && lng <= 60 && lat >= 36 && lat <= 75) return 'europa';
        // African continent geographic box strictly west of Red Sea / Sinai
        if (lng >= -20 && lng <= 52 && lat >= -36 && lat < 36 && !(lng > 34 && lat > 12)) return 'africa';
        if (lng >= 110 && lat < 0) return 'oceania';
        return 'asia';
      } catch {
        return 'asia';
      }
    };

    // 5. Draw every real country with its distinctive continent color
    for (const countryFeature of geojsonData.features) {
      const contId = getContinentId(countryFeature);
      const style = continentStyles[contId] || continentStyles['asia'];

      ctx.beginPath();
      pathGenerator(countryFeature);
      ctx.fillStyle = style.fill;
      ctx.fill();

      // Country internal border line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Glowing coastline stroke
      ctx.strokeStyle = style.stroke;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  /**
   * Returns representative latitude/longitude coordinates for a country.
   */
  getCountryCoordinates(country: CountryData): { lat: number; lng: number } {
    const countryCentroids: Record<string, { lat: number; lng: number }> = {
      // América
      'Estados Unidos': { lat: 38.9072, lng: -77.0369 },
      'España': { lat: 40.4168, lng: -3.7038 },
      'Italia': { lat: 41.9028, lng: 12.4964 },
      'Alemania': { lat: 52.5200, lng: 13.4050 },
      'Francia': { lat: 48.8566, lng: 2.3522 },
      'Reino Unido': { lat: 51.5074, lng: -0.1278 },
      'Gran Bretaña': { lat: 51.5074, lng: -0.1278 },
      'Canadá': { lat: 45.4215, lng: -75.6972 },
      'Canadáá': { lat: 45.4215, lng: -75.6972 },
      'México': { lat: 19.4326, lng: -99.1332 },
      'Brasil': { lat: -15.7975, lng: -47.8919 },
      'Chile': { lat: -33.4489, lng: -70.6693 },
      'Argentina': { lat: -34.6037, lng: -58.3816 },
      'Colombia': { lat: 4.7110, lng: -74.0721 },
      'Ecuador': { lat: -0.1807, lng: -78.4678 },
      'Bolivia': { lat: -16.5000, lng: -68.1500 },
      'Venezuela': { lat: 10.4806, lng: -66.9036 },
      'Panamá': { lat: 8.9824, lng: -79.5199 },
      'Panamáá': { lat: 8.9824, lng: -79.5199 },
      'Costa Rica': { lat: 9.9281, lng: -84.0907 },
      'Guatemala': { lat: 14.6349, lng: -90.5069 },
      'Honduras': { lat: 14.0723, lng: -87.1921 },
      'El Salvador': { lat: 13.6929, lng: -89.2182 },
      'Nicaragua': { lat: 12.1150, lng: -86.2362 },
      'República Dominicana': { lat: 18.4861, lng: -69.9312 },
      'Cuba': { lat: 23.1136, lng: -82.3666 },
      'Uruguay': { lat: -34.9011, lng: -56.1645 },
      'Paraguay': { lat: -25.2637, lng: -57.5759 },
      'Puerto Rico': { lat: 18.4655, lng: -66.1057 },
      'Trinidad y Tobago': { lat: 10.6549, lng: -61.5019 },
      'Guyana Francesa': { lat: 4.9372, lng: -52.3260 },

      // Europa
      'Bélgica': { lat: 50.8503, lng: 4.3517 },
      'Holanda': { lat: 52.3676, lng: 4.9041 },
      'Países Bajos': { lat: 52.3676, lng: 4.9041 },
      'Turquía': { lat: 39.9334, lng: 32.8597 },
      'Grecia': { lat: 37.9838, lng: 23.7275 },
      'Azerbaiyán': { lat: 40.4093, lng: 49.8671 },
      'Serbia': { lat: 44.7866, lng: 20.4489 },
      'Suiza': { lat: 46.9480, lng: 7.4474 },
      'Suecia': { lat: 59.3293, lng: 18.0686 },
      'Rumanía': { lat: 44.4268, lng: 26.1025 },
      'Hungría': { lat: 47.4979, lng: 19.0402 },
      'Dinamarca': { lat: 55.6761, lng: 12.5683 },
      'Irlanda': { lat: 53.3498, lng: -6.2603 },
      'Finlandia': { lat: 60.1699, lng: 24.9384 },
      'Ucrania': { lat: 50.4501, lng: 30.5234 },
      'Malta': { lat: 35.8989, lng: 14.5146 },
      'Chipre': { lat: 35.1856, lng: 33.3823 },
      'Portugal': { lat: 38.7223, lng: -9.1393 },
      'Luxemburgo': { lat: 49.6116, lng: 6.1319 },
      'Bielorrusia': { lat: 53.9006, lng: 27.5590 },
      'Rusia': { lat: 55.7558, lng: 37.6173 },
      'Noruega': { lat: 59.9139, lng: 10.7522 },
      'República Checa': { lat: 50.0755, lng: 14.4378 },
      'República de Islandia': { lat: 64.1466, lng: -21.9426 },
      'Austria': { lat: 48.2082, lng: 16.3738 },
      'Polonia': { lat: 52.2297, lng: 21.0122 },
      'Croacia': { lat: 45.8150, lng: 15.9819 },

      // Asia & Medio Oriente
      'Jordania': { lat: 31.9454, lng: 35.9284 },
      'Tailandia': { lat: 13.7563, lng: 100.5018 },
      'China': { lat: 39.9042, lng: 116.4074 },
      'Líbano': { lat: 33.8938, lng: 35.5018 },
      'Qatar': { lat: 25.2854, lng: 51.5310 },
      'Emiratos Árabes Unidos': { lat: 25.2048, lng: 55.2708 },
      'Israel': { lat: 31.7683, lng: 35.2137 },
      'Vietnam': { lat: 21.0285, lng: 105.8542 },
      'Indonesia': { lat: -6.2088, lng: 106.8456 },
      'Malasia': { lat: 3.1390, lng: 101.6869 },
      'Kuwait': { lat: 29.3759, lng: 47.9774 },
      'Japón': { lat: 35.6762, lng: 139.6503 },
      'Filipinas': { lat: 14.5995, lng: 120.9842 },
      'India': { lat: 28.6139, lng: 77.2090 },
      'Arabia Saudita': { lat: 24.7136, lng: 46.6753 },
      'Corea': { lat: 37.5665, lng: 126.9780 },
      'Corea del Sur': { lat: 37.5665, lng: 126.9780 },
      'Singapur': { lat: 1.3521, lng: 103.8198 },

      // África
      'Ghana': { lat: 5.6037, lng: -0.1870 },
      'Marruecos': { lat: 34.0209, lng: -6.8416 },
      'Egipto': { lat: 30.0444, lng: 31.2357 },
      'Argelia': { lat: 36.7538, lng: 3.0588 },
      'Kenia': { lat: -1.2921, lng: 36.8219 },
      'Sudáfrica': { lat: -25.7479, lng: 28.2293 },
      'Túnez': { lat: 36.8065, lng: 10.1815 },

      // Oceanía
      'Australia': { lat: -35.2809, lng: 149.1300 },
      'Nueva Zelanda': { lat: -41.2865, lng: 174.7762 }
    };

    if (countryCentroids[country.name]) {
      return countryCentroids[country.name];
    }

    // Filter out any 0,0 invalid city coordinates when calculating fallback average
    const validCities = (country.cities || []).filter(c => !(c.lat === 0 && c.lng === 0));
    if (validCities.length > 0) {
      const avgLat = validCities.reduce((sum, c) => sum + c.lat, 0) / validCities.length;
      const avgLng = validCities.reduce((sum, c) => sum + c.lng, 0) / validCities.length;
      return { lat: avgLat, lng: avgLng };
    }

    if (country.cities && country.cities.length > 0) {
      const avgLat = country.cities.reduce((sum, c) => sum + c.lat, 0) / country.cities.length;
      const avgLng = country.cities.reduce((sum, c) => sum + c.lng, 0) / country.cities.length;
      return { lat: avgLat, lng: avgLng };
    }

    return { lat: 0, lng: 0 };
  }

  /**
   * Creates 3D refined, perfectly proportioned beacon pins on the sphere for each country.
   */
  private createMarkers(): void {
    // Fine-tuned pin head size (radius 0.012)
    const pinGeometry = new THREE.SphereGeometry(0.012, 16, 16);
    const ringGeometry = new THREE.RingGeometry(0.015, 0.024, 16);
    // Hit-testing sphere (radius 0.032) for comfortable hover & tap
    const hitGeometry = new THREE.SphereGeometry(0.032, 8, 8);
    const hitMaterial = new THREE.MeshBasicMaterial({ visible: false });

    this.markerMeshes = [];

    for (const continent of this.continents) {
      for (const country of continent.countries) {
        const coords = this.getCountryCoordinates(country);
        const pos = this.latLngToVector3(coords.lat, coords.lng, 1.012);

        // Visible Pin mesh matching the continent's exact hexColor
        const pinMaterial = new THREE.MeshBasicMaterial({
          color: continent.hexColor
        });
        const pinMesh = new THREE.Mesh(pinGeometry, pinMaterial);
        pinMesh.position.copy(pos);

        // Outer Pulse Ring
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.75
        });
        const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        ringMesh.position.copy(this.latLngToVector3(coords.lat, coords.lng, 1.014));
        ringMesh.lookAt(new THREE.Vector3(0, 0, 0));

        // Invisible Hit-Test Mesh for raycasting
        const hitMesh = new THREE.Mesh(hitGeometry, hitMaterial);
        hitMesh.position.copy(pos);
        hitMesh.userData = { country, continent, pinMesh, ringMesh };
        this.markerMeshes.push(hitMesh);

        const countryGroup = new THREE.Group();
        countryGroup.add(pinMesh);
        countryGroup.add(ringMesh);
        countryGroup.add(hitMesh);
        this.markersGroup.add(countryGroup);
      }
    }
  }

  private latLngToVector3(lat: number, lng: number, radius: number = 1): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  private setupInteractions(canvas: HTMLCanvasElement): void {
    const onDown = (clientX: number, clientY: number) => {
      this.isDragging = true;
      this.dragDistance = 0;
      this.startMousePosition = { x: clientX, y: clientY };
      this.previousMousePosition = { x: clientX, y: clientY };
      this.autoRotate.set(false);
    };

    const onMove = (clientX: number, clientY: number) => {
      if (this.isDragging) {
        const deltaX = clientX - this.previousMousePosition.x;
        const deltaY = clientY - this.previousMousePosition.y;
        this.dragDistance += Math.abs(deltaX) + Math.abs(deltaY);

        this.targetRotation.y += deltaX * 0.005;
        this.targetRotation.x += deltaY * 0.005;
        this.targetRotation.x = Math.max(-1.4, Math.min(1.4, this.targetRotation.x));

        this.previousMousePosition = { x: clientX, y: clientY };
        this.hoveredMarker.set(null);
        return;
      }

      // Raycasting for Hover Tooltip when not dragging
      const rect = canvas.getBoundingClientRect();
      this.mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.markerMeshes, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        const { country, continent } = hit.userData;

        // Check if marker is on the visible front hemisphere (facing camera)
        const worldPos = new THREE.Vector3();
        hit.getWorldPosition(worldPos);
        const camToPos = this.camera.position.clone().sub(worldPos).normalize();
        const normal = worldPos.clone().normalize();

        if (normal.dot(camToPos) > 0.1) {
          this.hoveredMarker.set({
            country,
            continent,
            screenX: clientX,
            screenY: clientY
          });
          canvas.style.cursor = 'pointer';
          return;
        }
      }

      this.hoveredMarker.set(null);
      canvas.style.cursor = 'grab';
    };

    const onUp = (clientX: number, clientY: number) => {
      if (this.dragDistance < 8 && this.hoveredMarker()) {
        const marker = this.hoveredMarker()!;
        this.selectCountry(marker.country);
      }
      this.isDragging = false;
      this.dragDistance = 0;
    };

    // Mouse Events
    canvas.addEventListener('mousedown', (e) => onDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', (e) => onUp(e.clientX, e.clientY));

    // Touch Events
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        onDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const touch = e.changedTouches[0];
      if (touch) {
        onUp(touch.clientX, touch.clientY);
      } else {
        this.isDragging = false;
      }
    });

    // Wheel Zoom
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetZoom += e.deltaY * 0.0015;
      this.targetZoom = Math.max(1.6, Math.min(3.8, this.targetZoom));
    }, { passive: false });
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    // Auto rotate when idle
    if (this.autoRotate() && !this.isDragging && !this.hoveredMarker()) {
      this.targetRotation.y += 0.0016;
    }

    // Smooth inertia interpolation
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.08;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;
    this.currentZoom += (this.targetZoom - this.currentZoom) * 0.08;

    if (this.globeMesh) {
      this.globeMesh.rotation.x = this.currentRotation.x;
      this.globeMesh.rotation.y = this.currentRotation.y;
    }

    if (this.camera) {
      this.camera.position.z = this.currentZoom;
    }

    // Animate city rings pulsation
    if (this.markersGroup) {
      const time = Date.now() * 0.003;
      this.markersGroup.children.forEach((group, index) => {
        const ring = (group as THREE.Group).children[1];
        if (ring) {
          const scale = 1 + 0.25 * Math.sin(time + index);
          ring.scale.set(scale, scale, scale);
        }
      });
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  };

  /**
   * Focuses and smoothly rotates the 3D globe towards a continent's geographic center.
   */
  focusContinent(continent: ContinentData): void {
    this.selectedContinent.set(continent);
    this.isSidebarOpen.set(true);
    this.autoRotate.set(false);

    // Calculate rotation angles from lon / lat
    const targetY = -(continent.centerLng * (Math.PI / 180)) - Math.PI / 2;
    const targetX = continent.centerLat * (Math.PI / 180);

    this.targetRotation.y = targetY;
    this.targetRotation.x = targetX;
    this.targetZoom = 2.3;
  }

  toggleAutoRotate(): void {
    this.autoRotate.update(v => !v);
  }

  zoomIn(): void {
    this.targetZoom = Math.max(1.6, this.targetZoom - 0.35);
  }

  zoomOut(): void {
    this.targetZoom = Math.min(3.8, this.targetZoom + 0.35);
  }

  resetView(): void {
    this.targetRotation = { x: 0.2, y: -0.5 };
    this.targetZoom = 2.4;
    this.autoRotate.set(true);
    this.selectedContinent.set(null);
    this.isSidebarOpen.set(false);
  }

  selectCountry(country: CountryData): void {
    // Navigate to /consulados pre-filtered by this country!
    this.router.navigate(['/consulados'], {
      queryParams: { pais: country.name }
    });
  }

  selectCity(city: ConsularCity): void {
    // Navigate to /consulados pre-filtered by this city and country!
    this.router.navigate(['/consulados'], {
      queryParams: { ciudad: city.city, pais: city.country }
    });
  }

  hasSio(country: CountryData): boolean {
    return country.cities.some(c => c.sioActive);
  }

  hasBiofacial(country: CountryData): boolean {
    return country.cities.some(c => c.biofacialActive);
  }

  hasCiudadanoDigital(country: CountryData): boolean {
    return country.cities.some(c => c.ciudadanoDigitalActive);
  }

  closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }
}
