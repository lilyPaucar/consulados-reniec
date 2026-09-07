const fs = require('fs');

const content = fs.readFileSync('src/app/data/consulados-data.ts', 'utf8');

const match = content.match(/export const CONTINENTS_DATA: ContinentData\[\] = (\[[\s\S]*?\]);\s*export const/);
const cleaned = match[1].replace(/0x([0-9a-fA-F]+)/g, (m, p) => parseInt(p, 16));
const continents = JSON.parse(cleaned);

const countryCentroids = {
  'Estados Unidos': { lat: 38.9072, lng: -77.0369 },
  'España': { lat: 40.4168, lng: -3.7038 },
  'Italia': { lat: 41.9028, lng: 12.4964 },
  'Alemania': { lat: 52.5200, lng: 13.4050 },
  'Francia': { lat: 48.8566, lng: 2.3522 },
  'Reino Unido': { lat: 51.5074, lng: -0.1278 },
  'Canadá': { lat: 45.4215, lng: -75.6972 },
  'México': { lat: 19.4326, lng: -99.1332 },
  'Brasil': { lat: -15.7975, lng: -47.8919 },
  'Chile': { lat: -33.4489, lng: -70.6693 },
  'Argentina': { lat: -34.6037, lng: -58.3816 },
  'Colombia': { lat: 4.7110, lng: -74.0721 },
  'Ecuador': { lat: -0.1807, lng: -78.4678 },
  'Bolivia': { lat: -16.5000, lng: -68.1500 },
  'Japón': { lat: 35.6762, lng: 139.6503 },
  'China': { lat: 39.9042, lng: 116.4074 },
  'Australia': { lat: -33.8688, lng: 151.2093 },
  'Rusia': { lat: 55.7558, lng: 37.6173 },
  'India': { lat: 28.6139, lng: 77.2090 },
  'Sudáfrica': { lat: -25.7479, lng: 28.2293 },
  'Egipto': { lat: 30.0444, lng: 31.2357 },
  'Suiza': { lat: 46.9480, lng: 7.4474 },
  'Países Bajos': { lat: 52.3676, lng: 4.9041 },
  'Bélgica': { lat: 50.8503, lng: 4.3517 },
  'Portugal': { lat: 38.7223, lng: -9.1393 },
  'Suecia': { lat: 59.3293, lng: 18.0686 },
  'Turquía': { lat: 39.9334, lng: 32.8597 },
  'Corea del Sur': { lat: 37.5665, lng: 126.9780 },
  'Emiratos Árabes Unidos': { lat: 24.4539, lng: 54.3773 },
  'Israel': { lat: 31.7683, lng: 35.2137 },
  'Nueva Zelanda': { lat: -41.2865, lng: 174.7762 },
  'Marruecos': { lat: 34.0209, lng: -6.8416 },
  'Argelia': { lat: 36.7538, lng: 3.0588 },
  'Ghana': { lat: 5.6037, lng: -0.1870 },
  'Kenia': { lat: -1.2921, lng: 36.8219 },
  'Uruguay': { lat: -34.9011, lng: -56.1645 },
  'Paraguay': { lat: -25.2637, lng: -57.5759 },
  'Venezuela': { lat: 10.4806, lng: -66.9036 },
  'Panamá': { lat: 8.9824, lng: -79.5199 },
  'Costa Rica': { lat: 9.9281, lng: -84.0907 },
  'Guatemala': { lat: 14.6349, lng: -90.5069 },
  'Honduras': { lat: 14.0723, lng: -87.1921 },
  'El Salvador': { lat: 13.6929, lng: -89.2182 },
  'República Dominicana': { lat: 18.4861, lng: -69.9312 },
  'Cuba': { lat: 23.1136, lng: -82.3666 },
};

function getCountryCoordinates(country) {
  if (countryCentroids[country.name]) {
    return countryCentroids[country.name];
  }

  // Filter out any 0,0 invalid city coordinates when averaging!
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

console.log('--- ALL COUNTRIES AND THEIR FINAL COMPUTED COORDINATES ---');
for (const cont of continents) {
  for (const c of cont.countries) {
    const pos = getCountryCoordinates(c);
    if (pos.lat === 0 && pos.lng === 0) {
      console.log(`❌ AT NULL ISLAND (0,0): [${cont.name}] -> ${c.name}`);
    }
    // Check if in Africa bounding box: lat -35 to 37, lng -18 to 52
    if (pos.lat >= -35 && pos.lat <= 37 && pos.lng >= -18 && pos.lng <= 52) {
      console.log(`🌍 IN AFRICA BOX: [${cont.name} (${cont.color})] -> ${c.name} at (lat: ${pos.lat.toFixed(2)}, lng: ${pos.lng.toFixed(2)})`);
    }
  }
}
