import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

export interface DocumentItem {
  name: string;
  description: string;
  iconType: 'id-card' | 'photo' | 'receipt' | 'file-text' | 'fingerprint' | 'certificate' | 'home';
  tag?: string;
  tagColor?: string;
}

export interface ServiceDocumentsInfo {
  serviceId: string;
  title: string;
  subtitle: string;
  badge: string;
  deliveryTime: string;
  documents: DocumentItem[];
  tips: string[];
}

export interface MonthlyStat {
  month: string;
  tramites: number;
  entregas: number;
  observaciones: number;
}

export interface TramiteTypeStat {
  type: string;
  count: number;
  percentage: number;
  color: string;
}

export interface ObservationReason {
  reason: string;
  count: number;
  percentage: number;
  solution: string;
}

export interface ConsulateServiceStats {
  serviceName: string;
  totalTramites: number;
  totalEntregas: number;
  totalObservaciones: number;
  tasaEfectividad: number;
  tiempoPromedioDias: number;
  enProceso: number;
  monthlyHistory: MonthlyStat[];
  byType: TramiteTypeStat[];
  topObservations: ObservationReason[];
}

export interface ConsulateFullStats {
  sio: ConsulateServiceStats;
  biofacial: ConsulateServiceStats;
  ciudadanoDigital: ConsulateServiceStats;
}

export interface ScheduleShift {
  days: string;
  consularHours: string;
  peruHours: string;
  modality: string;
}

import { ALL_LOCATIONS_DATA, LocationOption } from '../../data/consulados-data';

export type { LocationOption };

@Component({
  selector: 'app-consulados',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consulados.html',
})
export class ConsuladosComponent implements OnInit {
  readonly Math = Math;
  readonly title = signal('Cartera de Servicios Consulares - Perú');

  // Location selector options from data.xlsx (207 consular offices worldwide)
  readonly locations: LocationOption[] = ALL_LOCATIONS_DATA;

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly activeCountryFilter = signal<string | null>(null);

  readonly filteredLocations = computed(() => {
    const filter = this.activeCountryFilter();
    if (!filter) return this.locations;
    return this.locations.filter(
      l => l.country.toLowerCase() === filter.toLowerCase()
    );
  });

  readonly selectedLocation = signal<LocationOption>(this.locations[0]);
  readonly isDropdownOpen = signal<boolean>(false);

  // Documents modal state
  readonly isDocsModalOpen = signal<boolean>(false);
  readonly selectedServiceDocs = signal<ServiceDocumentsInfo | null>(null);

  // Statistics modal state
  readonly isStatsModalOpen = signal<boolean>(false);
  readonly statsServiceType = signal<'sio' | 'biofacial' | 'ciudadanoDigital' | 'all'>('all');
  readonly hoveredMonthIndex = signal<number | null>(null);
  readonly selectedStatFilter = signal<'6m' | '12m'>('6m');
  readonly visibleMetrics = signal<{ tramites: boolean; entregas: boolean; observaciones: boolean }>({
    tramites: true,
    entregas: true,
    observaciones: true
  });

  // Statistics Catalog by Consulate
  readonly statsCatalog: Record<string, ConsulateFullStats> = {
    'Madrid': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 18450,
        totalEntregas: 17210,
        totalObservaciones: 480,
        tasaEfectividad: 97.4,
        tiempoPromedioDias: 12,
        enProceso: 760,
        monthlyHistory: [
          { month: 'Oct', tramites: 2950, entregas: 2810, observaciones: 72 },
          { month: 'Nov', tramites: 3120, entregas: 2940, observaciones: 84 },
          { month: 'Dic', tramites: 2840, entregas: 2690, observaciones: 68 },
          { month: 'Ene', tramites: 3260, entregas: 3050, observaciones: 91 },
          { month: 'Feb', tramites: 3080, entregas: 2890, observaciones: 79 },
          { month: 'Mar', tramites: 3200, entregas: 2830, observaciones: 86 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 9600, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 4420, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 2580, percentage: 14, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 1850, percentage: 10, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Foto fuera de especificaciones biométricas (sombras / brillo)', count: 198, percentage: 41, solution: 'Tomar fotografía con fondo blanco uniforme e iluminación frontal sin accesorios.' },
          { reason: 'Falta de actualización de datos de domicilio o estado civil', count: 135, percentage: 28, solution: 'Presentar recibo de servicio reciente y partida de matrimonio si aplica.' },
          { reason: 'Huellas dactilares con baja calidad de captura', count: 92, percentage: 19, solution: 'Realizar recalibración del captor biométrico o captura manual excepcional.' },
          { reason: 'Discrepancia en comprobante de pago de tasa consular', count: 55, percentage: 12, solution: 'Verificar el código de tasa arancelaria exacto antes de la cita.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 14200,
        totalEntregas: 13480,
        totalObservaciones: 340,
        tasaEfectividad: 97.6,
        tiempoPromedioDias: 18,
        enProceso: 380,
        monthlyHistory: [
          { month: 'Oct', tramites: 2180, entregas: 2090, observaciones: 54 },
          { month: 'Nov', tramites: 2420, entregas: 2310, observaciones: 61 },
          { month: 'Dic', tramites: 2290, entregas: 2180, observaciones: 49 },
          { month: 'Ene', tramites: 2510, entregas: 2390, observaciones: 63 },
          { month: 'Feb', tramites: 2360, entregas: 2260, observaciones: 55 },
          { month: 'Mar', tramites: 2440, entregas: 2250, observaciones: 58 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 8230, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 3550, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 2420, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Rechazo de captura facial móvil por contraste bajo o movimiento', count: 165, percentage: 48, solution: 'Usar cámara frontal con buena luz natural evitando contraluces.' },
          { reason: 'Inconsistencia en código de validación SMS o correo', count: 98, percentage: 29, solution: 'Verificar correo registrado en RENIEC y cobertura telefónica.' },
          { reason: 'Recibo o constancia de residencia no legible', count: 77, percentage: 23, solution: 'Subir archivo PDF o JPG nítido con nombre completo y dirección visible.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 8950,
        totalEntregas: 8780,
        totalObservaciones: 110,
        tasaEfectividad: 98.7,
        tiempoPromedioDias: 1,
        enProceso: 60,
        monthlyHistory: [
          { month: 'Oct', tramites: 1380, entregas: 1355, observaciones: 16 },
          { month: 'Nov', tramites: 1510, entregas: 1485, observaciones: 19 },
          { month: 'Dic', tramites: 1420, entregas: 1395, observaciones: 17 },
          { month: 'Ene', tramites: 1620, entregas: 1590, observaciones: 22 },
          { month: 'Feb', tramites: 1480, entregas: 1450, observaciones: 18 },
          { month: 'Mar', tramites: 1540, entregas: 1505, observaciones: 18 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 4830, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 2325, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 1255, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 540, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Bloqueo de PIN por 3 intentos consecutivos erróneos', count: 52, percentage: 47, solution: 'Realizar reinicio de PIN con código PUK o acudir a sede consular con DNIe.' },
          { reason: 'Controlador de lector SmartCard no reconocido por navegador', count: 34, percentage: 31, solution: 'Descargar e instalar el software oficial de controladores RENIEC DNIe.' },
          { reason: 'Certificado digital revocado por caducidad (> 4 años)', count: 24, percentage: 22, solution: 'Generar nuevo par de claves criptográficas en el portal PKI.' }
        ]
      }
    },
    'Barcelona': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 12600,
        totalEntregas: 11800,
        totalObservaciones: 350,
        tasaEfectividad: 97.2,
        tiempoPromedioDias: 14,
        enProceso: 450,
        monthlyHistory: [
          { month: 'Oct', tramites: 1980, entregas: 1870, observaciones: 52 },
          { month: 'Nov', tramites: 2150, entregas: 2010, observaciones: 62 },
          { month: 'Dic', tramites: 1890, entregas: 1780, observaciones: 48 },
          { month: 'Ene', tramites: 2280, entregas: 2140, observaciones: 68 },
          { month: 'Feb', tramites: 2110, entregas: 1980, observaciones: 58 },
          { month: 'Mar', tramites: 2190, entregas: 2020, observaciones: 62 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 6550, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 3020, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 1890, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 1140, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Fotografía no cumple estándar ICAO (reflejo en gafas)', count: 148, percentage: 42, solution: 'Retirar gafas y accesorios antes de la toma fotográfica.' },
          { reason: 'Acta de nacimiento no digitalizada en SIRCM', count: 105, percentage: 30, solution: 'Solicitar digitalización previa en el sistema consular.' },
          { reason: 'Huellas dactilares desgastadas', count: 63, percentage: 18, solution: 'Aplicar procedimiento de captura con soporte dactilar húmedo.' },
          { reason: 'Tasa consular errónea', count: 34, percentage: 10, solution: 'Asegurar voucher con el concepto específico de DNI electrónico.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 9800,
        totalEntregas: 9310,
        totalObservaciones: 230,
        tasaEfectividad: 97.6,
        tiempoPromedioDias: 16,
        enProceso: 260,
        monthlyHistory: [
          { month: 'Oct', tramites: 1520, entregas: 1450, observaciones: 36 },
          { month: 'Nov', tramites: 1680, entregas: 1590, observaciones: 42 },
          { month: 'Dic', tramites: 1560, entregas: 1480, observaciones: 35 },
          { month: 'Ene', tramites: 1740, entregas: 1660, observaciones: 43 },
          { month: 'Feb', tramites: 1620, entregas: 1550, observaciones: 37 },
          { month: 'Mar', tramites: 1680, entregas: 1580, observaciones: 37 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 5680, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 2450, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 1670, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Validación facial biométrica rechazada por contraluz', count: 115, percentage: 50, solution: 'Evitar ventanas al fondo durante la captura móvil.' },
          { reason: 'Comprobante de pago no validado en Págalo.pe', count: 68, percentage: 30, solution: 'Esperar confirmación de acreditación bancaria (10-15 min).' },
          { reason: 'Dirección consular no especificada correctamente', count: 47, percentage: 20, solution: 'Seleccionar Consulado de Barcelona para la entrega física.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 6150,
        totalEntregas: 6040,
        totalObservaciones: 75,
        tasaEfectividad: 98.8,
        tiempoPromedioDias: 1,
        enProceso: 35,
        monthlyHistory: [
          { month: 'Oct', tramites: 950, entregas: 935, observaciones: 11 },
          { month: 'Nov', tramites: 1040, entregas: 1025, observaciones: 13 },
          { month: 'Dic', tramites: 980, entregas: 965, observaciones: 12 },
          { month: 'Ene', tramites: 1110, entregas: 1090, observaciones: 15 },
          { month: 'Feb', tramites: 1010, entregas: 990, observaciones: 12 },
          { month: 'Mar', tramites: 1060, entregas: 1035, observaciones: 12 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 3320, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 1600, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 860, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 370, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Error de PIN bloqueado por intentos incorrectos', count: 38, percentage: 51, solution: 'Usar PUK o programar cita de atención biométrica en Barcelona.' },
          { reason: 'SmartCard no detectado por fallo de lector USB', count: 23, percentage: 31, solution: 'Conectar lector a puerto USB principal y reiniciar navegador.' },
          { reason: 'Sesión expirada durante proceso de firma', count: 14, percentage: 18, solution: 'Reanudar proceso manteniendo tarjeta insertada.' }
        ]
      }
    },
    'Milán': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 9200,
        totalEntregas: 8650,
        totalObservaciones: 270,
        tasaEfectividad: 97.1,
        tiempoPromedioDias: 15,
        enProceso: 280,
        monthlyHistory: [
          { month: 'Oct', tramites: 1450, entregas: 1370, observaciones: 41 },
          { month: 'Nov', tramites: 1580, entregas: 1490, observaciones: 47 },
          { month: 'Dic', tramites: 1390, entregas: 1310, observaciones: 38 },
          { month: 'Ene', tramites: 1670, entregas: 1570, observaciones: 52 },
          { month: 'Feb', tramites: 1530, entregas: 1440, observaciones: 44 },
          { month: 'Mar', tramites: 1580, entregas: 1470, observaciones: 48 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 4780, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 2210, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 1380, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 830, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Foto biométrica con fondo no homologado', count: 110, percentage: 41, solution: 'Asegurar fondo blanco liso sin texturas.' },
          { reason: 'Falta de partida consular previa para menores', count: 82, percentage: 30, solution: 'Inscribir previamente el acta de nacimiento en consulado.' },
          { reason: 'Huellas con dificultad de lectura', count: 51, percentage: 19, solution: 'Hacer toma con sensor biométrico secundario.' },
          { reason: 'Discrepancia en apellido materno/paterno', count: 27, percentage: 10, solution: 'Presentar partida original para cotejo.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 7100,
        totalEntregas: 6780,
        totalObservaciones: 160,
        tasaEfectividad: 97.7,
        tiempoPromedioDias: 17,
        enProceso: 160,
        monthlyHistory: [
          { month: 'Oct', tramites: 1110, entregas: 1060, observaciones: 25 },
          { month: 'Nov', tramites: 1220, entregas: 1170, observaciones: 28 },
          { month: 'Dic', tramites: 1140, entregas: 1090, observaciones: 24 },
          { month: 'Ene', tramites: 1270, entregas: 1210, observaciones: 31 },
          { month: 'Feb', tramites: 1170, entregas: 1120, observaciones: 25 },
          { month: 'Mar', tramites: 1190, entregas: 1130, observaciones: 27 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 4120, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 1775, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 1205, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Captura facial no superó umbral de liveness', count: 82, percentage: 51, solution: 'Seguir las indicaciones de parpadeo y giro suave de cabeza.' },
          { reason: 'Dirección en Italia sin código postal CAP correcto', count: 46, percentage: 29, solution: 'Indicar CAP y provincia de residencia exactos.' },
          { reason: 'Imagen de comprobante bancario cortada', count: 32, percentage: 20, solution: 'Capturar el comprobante completo con número de operación.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 4500,
        totalEntregas: 4410,
        totalObservaciones: 58,
        tasaEfectividad: 98.7,
        tiempoPromedioDias: 1,
        enProceso: 32,
        monthlyHistory: [
          { month: 'Oct', tramites: 690, entregas: 675, observaciones: 9 },
          { month: 'Nov', tramites: 760, entregas: 745, observaciones: 10 },
          { month: 'Dic', tramites: 710, entregas: 695, observaciones: 9 },
          { month: 'Ene', tramites: 820, entregas: 805, observaciones: 11 },
          { month: 'Feb', tramites: 740, entregas: 725, observaciones: 9 },
          { month: 'Mar', tramites: 780, entregas: 765, observaciones: 10 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 2430, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 1170, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 630, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 270, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'PIN ingresado erróneamente', count: 30, percentage: 52, solution: 'Verificar sobre ciego original entregado con el DNIe.' },
          { reason: 'Lector de tarjetas DNIe no configurado', count: 18, percentage: 31, solution: 'Instalar middleware de RENIEC para Windows / macOS.' },
          { reason: 'DNIe vencido que inhabilita el certificado', count: 10, percentage: 17, solution: 'Tramitar renovación previa de DNIe presencial o vía Biofacial.' }
        ]
      }
    },
    'Buenos Aires': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 10500,
        totalEntregas: 9800,
        totalObservaciones: 310,
        tasaEfectividad: 97.0,
        tiempoPromedioDias: 15,
        enProceso: 390,
        monthlyHistory: [
          { month: 'Oct', tramites: 1650, entregas: 1540, observaciones: 49 },
          { month: 'Nov', tramites: 1790, entregas: 1670, observaciones: 55 },
          { month: 'Dic', tramites: 1590, entregas: 1480, observaciones: 46 },
          { month: 'Ene', tramites: 1910, entregas: 1780, observaciones: 60 },
          { month: 'Feb', tramites: 1740, entregas: 1630, observaciones: 48 },
          { month: 'Mar', tramites: 1820, entregas: 1700, observaciones: 52 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 5460, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 2520, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 1575, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 945, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Foto impresa o captura no reglamentaria', count: 132, percentage: 43, solution: 'Usar servicio fotográfico autorizado o cabina consular.' },
          { reason: 'Partida de nacimiento argentina sin apostilla', count: 91, percentage: 29, solution: 'Apostillar partida antes de registrar nacionalidad por opción.' },
          { reason: 'Firma o huella incompleta en ficha registral', count: 54, percentage: 17, solution: 'Repetir estampado dactilar en presencia del funcionario.' },
          { reason: 'Voucher sin titular identificado', count: 33, percentage: 11, solution: 'Colocar DNI del titular en la boleta de depósito.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 6400,
        totalEntregas: 6100,
        totalObservaciones: 150,
        tasaEfectividad: 97.7,
        tiempoPromedioDias: 16,
        enProceso: 150,
        monthlyHistory: [
          { month: 'Oct', tramites: 990, entregas: 950, observaciones: 22 },
          { month: 'Nov', tramites: 1090, entregas: 1040, observaciones: 26 },
          { month: 'Dic', tramites: 1010, entregas: 960, observaciones: 24 },
          { month: 'Ene', tramites: 1160, entregas: 1110, observaciones: 29 },
          { month: 'Feb', tramites: 1050, entregas: 1000, observaciones: 23 },
          { month: 'Mar', tramites: 1100, entregas: 1040, observaciones: 26 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 3710, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 1600, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 1090, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Rechazo facial por iluminación lateral', count: 75, percentage: 50, solution: 'Posicionarse frente a una fuente de luz difusa.' },
          { reason: 'Certificado de residencia de policía vencido', count: 45, percentage: 30, solution: 'Presentar certificado emitido en los últimos 90 días.' },
          { reason: 'Error en código de verificación web', count: 30, percentage: 20, solution: 'Reintentar solicitud de clave OTP.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 5100,
        totalEntregas: 4990,
        totalObservaciones: 65,
        tasaEfectividad: 98.6,
        tiempoPromedioDias: 1,
        enProceso: 45,
        monthlyHistory: [
          { month: 'Oct', tramites: 780, entregas: 765, observaciones: 10 },
          { month: 'Nov', tramites: 860, entregas: 840, observaciones: 11 },
          { month: 'Dic', tramites: 810, entregas: 795, observaciones: 10 },
          { month: 'Ene', tramites: 930, entregas: 910, observaciones: 13 },
          { month: 'Feb', tramites: 840, entregas: 820, observaciones: 10 },
          { month: 'Mar', tramites: 880, entregas: 860, observaciones: 11 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 2750, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 1325, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 715, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 310, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Clave PIN bloqueada', count: 35, percentage: 54, solution: 'Utilizar PIN / PUK de seguridad entregado con el DNIe.' },
          { reason: 'Fallo de comunicación con tarjeta criptográfica', count: 19, percentage: 29, solution: 'Reinsertar chip de DNIe en el lector y verificar contacto.' },
          { reason: 'Certificado de firma revocado', count: 11, percentage: 17, solution: 'Solicitar emisión de nuevo certificado digital gratuito.' }
        ]
      }
    },
    'Miami': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 11400,
        totalEntregas: 10700,
        totalObservaciones: 290,
        tasaEfectividad: 97.5,
        tiempoPromedioDias: 13,
        enProceso: 410,
        monthlyHistory: [
          { month: 'Oct', tramites: 1790, entregas: 1690, observaciones: 45 },
          { month: 'Nov', tramites: 1950, entregas: 1830, observaciones: 51 },
          { month: 'Dic', tramites: 1740, entregas: 1640, observaciones: 42 },
          { month: 'Ene', tramites: 2060, entregas: 1940, observaciones: 56 },
          { month: 'Feb', tramites: 1890, entregas: 1780, observaciones: 47 },
          { month: 'Mar', tramites: 1970, entregas: 1820, observaciones: 49 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 5930, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 2740, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 1710, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 1020, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Fotografía no cumple estándar para documento biométrico', count: 121, percentage: 42, solution: 'Fotografía en fondo blanco sin accesorios de cabeza ni lentes.' },
          { reason: 'Documento americano de respaldo sin traducción oficial', count: 85, percentage: 29, solution: 'Acompañar traducción simple o jurada del documento.' },
          { reason: 'Huellas biométricas con nivel de coincidencia bajo', count: 53, percentage: 18, solution: 'Limpiar superficie y repetir captura biométrica.' },
          { reason: 'Discrepancia de tasa consular en Money Order', count: 31, percentage: 11, solution: 'Emitir Money Order a nombre de Consulate General of Peru.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 8900,
        totalEntregas: 8490,
        totalObservaciones: 210,
        tasaEfectividad: 97.6,
        tiempoPromedioDias: 15,
        enProceso: 200,
        monthlyHistory: [
          { month: 'Oct', tramites: 1390, entregas: 1330, observaciones: 32 },
          { month: 'Nov', tramites: 1520, entregas: 1450, observaciones: 37 },
          { month: 'Dic', tramites: 1420, entregas: 1360, observaciones: 33 },
          { month: 'Ene', tramites: 1590, entregas: 1520, observaciones: 41 },
          { month: 'Feb', tramites: 1460, entregas: 1390, observaciones: 32 },
          { month: 'Mar', tramites: 1520, entregas: 1440, observaciones: 35 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 5160, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 2225, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 1515, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Captura facial rechazada por flash o sobreexposición', count: 103, percentage: 49, solution: 'Desactivar flash y usar luz difusa natural.' },
          { reason: 'Comprobante de domicilio de Florida sin nombre del titular', count: 62, percentage: 30, solution: 'Presentar lease agreement o bill de utilidades a su nombre.' },
          { reason: 'Número de CUI o DNI anterior erróneo', count: 45, percentage: 21, solution: 'Digitar los 8 dígitos exactos de su DNI.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 5800,
        totalEntregas: 5690,
        totalObservaciones: 70,
        tasaEfectividad: 98.8,
        tiempoPromedioDias: 1,
        enProceso: 40,
        monthlyHistory: [
          { month: 'Oct', tramites: 890, entregas: 875, observaciones: 11 },
          { month: 'Nov', tramites: 980, entregas: 960, observaciones: 12 },
          { month: 'Dic', tramites: 920, entregas: 905, observaciones: 11 },
          { month: 'Ene', tramites: 1050, entregas: 1030, observaciones: 14 },
          { month: 'Feb', tramites: 960, entregas: 940, observaciones: 11 },
          { month: 'Mar', tramites: 1000, entregas: 980, observaciones: 11 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 3130, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 1510, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 810, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 350, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Contraseña PIN no recordada', count: 36, percentage: 51, solution: 'Restablecer con PUK en aplicación RENIEC Ciudadano.' },
          { reason: 'Error en conexión con la plataforma PKI', count: 21, percentage: 30, solution: 'Verificar conexión a internet y certificados raíz RENIEC.' },
          { reason: 'Formato de documento para firma no compatible (no PDF-A)', count: 13, percentage: 19, solution: 'Convertir documento a formato PDF estándar antes de firmar.' }
        ]
      }
    },
    'Santiago': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 8100,
        totalEntregas: 7650,
        totalObservaciones: 220,
        tasaEfectividad: 97.3,
        tiempoPromedioDias: 16,
        enProceso: 230,
        monthlyHistory: [
          { month: 'Oct', tramites: 1280, entregas: 1210, observaciones: 34 },
          { month: 'Nov', tramites: 1390, entregas: 1310, observaciones: 39 },
          { month: 'Dic', tramites: 1230, entregas: 1160, observaciones: 32 },
          { month: 'Ene', tramites: 1480, entregas: 1390, observaciones: 42 },
          { month: 'Feb', tramites: 1340, entregas: 1270, observaciones: 36 },
          { month: 'Mar', tramites: 1380, entregas: 1310, observaciones: 37 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 4210, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 1945, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 1215, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 730, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Fotografía no conforme a estándar biométrico', count: 94, percentage: 43, solution: 'Tomar fotografía con expresión neutra y orejas visibles.' },
          { reason: 'Certificado de residencia de Carabineros desactualizado', count: 65, percentage: 30, solution: 'Presentar certificado emitido recientemente.' },
          { reason: 'Falta de validación previa en RENIEC central', count: 39, percentage: 18, solution: 'Coordinar desbloqueo registral en consulado.' },
          { reason: 'Tasa consular no validada en sucursal bancaria', count: 22, percentage: 10, solution: 'Presentar comprobante con timbrado bancario legible.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 5300,
        totalEntregas: 5060,
        totalObservaciones: 120,
        tasaEfectividad: 97.7,
        tiempoPromedioDias: 17,
        enProceso: 120,
        monthlyHistory: [
          { month: 'Oct', tramites: 830, entregas: 790, observaciones: 19 },
          { month: 'Nov', tramites: 910, entregas: 870, observaciones: 21 },
          { month: 'Dic', tramites: 840, entregas: 800, observaciones: 18 },
          { month: 'Ene', tramites: 960, entregas: 920, observaciones: 23 },
          { month: 'Feb', tramites: 870, entregas: 830, observaciones: 19 },
          { month: 'Mar', tramites: 890, entregas: 850, observaciones: 20 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 3070, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 1325, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 905, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Captura facial móvil con resolución insuficiente', count: 59, percentage: 49, solution: 'Utilizar cámara con resolución mínima de 5 MP.' },
          { reason: 'Comprobante de transferencia bancaria sin RUT visible', count: 37, percentage: 31, solution: 'Adjuntar comprobante oficial con RUT y código de transferencia.' },
          { reason: 'Dirección ingresada no coincide con comuna de Santiago', count: 24, percentage: 20, solution: 'Verificar dirección y comuna chilena correspondiente.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 3200,
        totalEntregas: 3140,
        totalObservaciones: 42,
        tasaEfectividad: 98.6,
        tiempoPromedioDias: 1,
        enProceso: 18,
        monthlyHistory: [
          { month: 'Oct', tramites: 490, entregas: 480, observaciones: 6 },
          { month: 'Nov', tramites: 540, entregas: 530, observaciones: 7 },
          { month: 'Dic', tramites: 510, entregas: 500, observaciones: 7 },
          { month: 'Ene', tramites: 580, entregas: 570, observaciones: 8 },
          { month: 'Feb', tramites: 530, entregas: 520, observaciones: 7 },
          { month: 'Mar', tramites: 550, entregas: 540, observaciones: 7 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 1730, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 830, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 450, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 190, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'PIN de firma bloqueado', count: 22, percentage: 52, solution: 'Desbloquear con PUK mediante el aplicativo Ciudadano Digital.' },
          { reason: 'Dispositivo SmartCard desconectado inesperadamente', count: 13, percentage: 31, solution: 'Verificar cable y puerto USB del lector.' },
          { reason: 'Certificado digital caduco', count: 7, percentage: 17, solution: 'Renovar certificado en línea antes de la expiración.' }
        ]
      }
    },
    'París': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 4300,
        totalEntregas: 4050,
        totalObservaciones: 115,
        tasaEfectividad: 97.3,
        tiempoPromedioDias: 15,
        enProceso: 135,
        monthlyHistory: [
          { month: 'Oct', tramites: 680, entregas: 640, observaciones: 18 },
          { month: 'Nov', tramites: 740, entregas: 700, observaciones: 20 },
          { month: 'Dic', tramites: 660, entregas: 620, observaciones: 17 },
          { month: 'Ene', tramites: 790, entregas: 740, observaciones: 22 },
          { month: 'Feb', tramites: 710, entregas: 670, observaciones: 19 },
          { month: 'Mar', tramites: 720, entregas: 680, observaciones: 19 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 2240, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 1030, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 645, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 385, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Norma de foto francesa incompatible con estándar RENIEC', count: 51, percentage: 44, solution: 'Solicitar foto formato pasaporte peruano 3.5 x 4.5 cm fondo blanco.' },
          { reason: 'Justificatif de domicile no actualizado (< 3 meses)', count: 33, percentage: 29, solution: 'Presentar factura de EDF o telecomunicaciones reciente.' },
          { reason: 'Acta de nacimiento francesa sin transcripción consular', count: 20, percentage: 17, solution: 'Efectuar transcripción en registro civil consular antes del DNI.' },
          { reason: 'Tasa consular pagada en cheque incorrecto', count: 11, percentage: 10, solution: 'Pagar con tarjeta en ventanilla o virement bancaire.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 3100,
        totalEntregas: 2960,
        totalObservaciones: 70,
        tasaEfectividad: 97.7,
        tiempoPromedioDias: 17,
        enProceso: 70,
        monthlyHistory: [
          { month: 'Oct', tramites: 490, entregas: 470, observaciones: 11 },
          { month: 'Nov', tramites: 530, entregas: 510, observaciones: 12 },
          { month: 'Dic', tramites: 490, entregas: 470, observaciones: 11 },
          { month: 'Ene', tramites: 560, entregas: 530, observaciones: 13 },
          { month: 'Feb', tramites: 510, entregas: 490, observaciones: 11 },
          { month: 'Mar', tramites: 520, entregas: 490, observaciones: 12 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 1800, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 775, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 525, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Biometría facial no superada en app móvil', count: 35, percentage: 50, solution: 'Asegurar fondo blanco y sin cabello sobre la frente.' },
          { reason: 'Comprobante de domicilio en Francia no traducido', count: 21, percentage: 30, solution: 'Adjuntar documento oficial con dirección clara.' },
          { reason: 'Código de país en teléfono móvil incorrecto (+33)', count: 14, percentage: 20, solution: 'Colocar prefijo internacional completo.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 2100,
        totalEntregas: 2060,
        totalObservaciones: 28,
        tasaEfectividad: 98.6,
        tiempoPromedioDias: 1,
        enProceso: 12,
        monthlyHistory: [
          { month: 'Oct', tramites: 320, entregas: 315, observaciones: 4 },
          { month: 'Nov', tramites: 360, entregas: 350, observaciones: 5 },
          { month: 'Dic', tramites: 330, entregas: 325, observaciones: 4 },
          { month: 'Ene', tramites: 380, entregas: 375, observaciones: 5 },
          { month: 'Feb', tramites: 350, entregas: 345, observaciones: 5 },
          { month: 'Mar', tramites: 360, entregas: 350, observaciones: 5 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 1130, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 550, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 290, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 130, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'PIN de seguridad bloqueado', count: 15, percentage: 54, solution: 'Desbloquear clave con el PUK entregado con su DNIe.' },
          { reason: 'Error de lectura SmartCard en entorno macOS', count: 9, percentage: 32, solution: 'Instalar certificados de seguridad RENIEC para Mac.' },
          { reason: 'Firma digital no validada', count: 4, percentage: 14, solution: 'Verificar validez del par de llaves en el software RENIEC.' }
        ]
      }
    },
    'Valencia': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO)',
        totalTramites: 3900,
        totalEntregas: 3680,
        totalObservaciones: 98,
        tasaEfectividad: 97.5,
        tiempoPromedioDias: 14,
        enProceso: 122,
        monthlyHistory: [
          { month: 'Oct', tramites: 610, entregas: 580, observaciones: 15 },
          { month: 'Nov', tramites: 670, entregas: 630, observaciones: 18 },
          { month: 'Dic', tramites: 590, entregas: 560, observaciones: 14 },
          { month: 'Ene', tramites: 710, entregas: 670, observaciones: 19 },
          { month: 'Feb', tramites: 650, entregas: 610, observaciones: 16 },
          { month: 'Mar', tramites: 670, entregas: 630, observaciones: 16 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 2030, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 935, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 585, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 350, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Certificado de empadronamiento valenciano caducado', count: 42, percentage: 43, solution: 'Solicitar volante o certificado reciente en ayuntamiento.' },
          { reason: 'Fotografía con brillo excesivo', count: 29, percentage: 30, solution: 'Tomar foto en estudio fotográfico con iluminación difusa.' },
          { reason: 'Huellas desgastadas por trabajo manual', count: 18, percentage: 18, solution: 'Uso de humectante dactilar previo a la toma.' },
          { reason: 'Error en código de depósito en cuenta consular', count: 9, percentage: 9, solution: 'Verificar IBAN del Consulado de Perú en Valencia.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 2200,
        totalEntregas: 2090,
        totalObservaciones: 50,
        tasaEfectividad: 97.7,
        tiempoPromedioDias: 16,
        enProceso: 60,
        monthlyHistory: [
          { month: 'Oct', tramites: 340, entregas: 320, observaciones: 8 },
          { month: 'Nov', tramites: 380, entregas: 360, observaciones: 9 },
          { month: 'Dic', tramites: 350, entregas: 330, observaciones: 8 },
          { month: 'Ene', tramites: 400, entregas: 380, observaciones: 9 },
          { month: 'Feb', tramites: 360, entregas: 340, observaciones: 8 },
          { month: 'Mar', tramites: 370, entregas: 360, observaciones: 8 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 1280, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 550, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 370, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Fallo de reconocimiento facial en smartphone', count: 25, percentage: 50, solution: 'Limpiar lente frontal y realizar el trámite con buena iluminación.' },
          { reason: 'Empadronamiento no legible en adjunto', count: 15, percentage: 30, solution: 'Escanear documento en PDF nítido.' },
          { reason: 'Pago de tasa no asociado al DNI', count: 10, percentage: 20, solution: 'Ingresar código de trámite RENIEC en Págalo.pe.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 1800,
        totalEntregas: 1765,
        totalObservaciones: 24,
        tasaEfectividad: 98.6,
        tiempoPromedioDias: 1,
        enProceso: 11,
        monthlyHistory: [
          { month: 'Oct', tramites: 280, entregas: 275, observaciones: 3 },
          { month: 'Nov', tramites: 310, entregas: 305, observaciones: 4 },
          { month: 'Dic', tramites: 290, entregas: 285, observaciones: 4 },
          { month: 'Ene', tramites: 330, entregas: 325, observaciones: 5 },
          { month: 'Feb', tramites: 290, entregas: 285, observaciones: 4 },
          { month: 'Mar', tramites: 300, entregas: 290, observaciones: 4 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 970, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 470, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 250, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 110, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'PIN de seguridad bloqueado por 3 intentos', count: 13, percentage: 54, solution: 'Desbloquear clave con el PUK en el portal RENIEC.' },
          { reason: 'Lector de tarjeta no detectado', count: 7, percentage: 29, solution: 'Verificar puerto USB y driver de tarjeta inteligente.' },
          { reason: 'Certificado de firma vencido', count: 4, percentage: 17, solution: 'Generar nueva solicitud de certificado gratuito.' }
        ]
      }
    },
    'Accra': {
      sio: {
        serviceName: 'Trámites de DNI Presencial (SIO Manual)',
        totalTramites: 420,
        totalEntregas: 395,
        totalObservaciones: 18,
        tasaEfectividad: 95.7,
        tiempoPromedioDias: 35,
        enProceso: 7,
        monthlyHistory: [
          { month: 'Oct', tramites: 65, entregas: 61, observaciones: 3 },
          { month: 'Nov', tramites: 72, entregas: 68, observaciones: 3 },
          { month: 'Dic', tramites: 60, entregas: 57, observaciones: 2 },
          { month: 'Ene', tramites: 78, entregas: 73, observaciones: 4 },
          { month: 'Feb', tramites: 70, entregas: 66, observaciones: 3 },
          { month: 'Mar', tramites: 75, entregas: 70, observaciones: 3 }
        ],
        byType: [
          { type: 'Renovación de DNIe', count: 218, percentage: 52, color: '#2563eb' },
          { type: 'Duplicado de DNI', count: 101, percentage: 24, color: '#0ea5e9' },
          { type: 'Rectificación de Datos', count: 63, percentage: 15, color: '#10b981' },
          { type: 'Inscripción Primera Vez', count: 38, percentage: 9, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'Ficha decadactilar manual con tinta corrida', count: 8, percentage: 45, solution: 'Repetir toma dactilar con almohadilla de secado rápido.' },
          { reason: 'Fotografía en papel no satinado o tamaño no reglamentario', count: 5, percentage: 28, solution: 'Entregar 2 fotografías tamaño pasaporte fondo blanco.' },
          { reason: 'Demora en tránsito por valija diplomática', count: 3, percentage: 17, solution: 'Monitorear envío quincenal de valija diplomática.' },
          { reason: 'Datos de residencia ghanesa incompletos', count: 2, percentage: 10, solution: 'Indicar Ghana Digital Post GPS o dirección exacta.' }
        ]
      },
      biofacial: {
        serviceName: 'Trámites en Línea (App DNI Biofacial)',
        totalTramites: 110,
        totalEntregas: 104,
        totalObservaciones: 5,
        tasaEfectividad: 95.5,
        tiempoPromedioDias: 38,
        enProceso: 1,
        monthlyHistory: [
          { month: 'Oct', tramites: 16, entregas: 15, observaciones: 1 },
          { month: 'Nov', tramites: 19, entregas: 18, observaciones: 1 },
          { month: 'Dic', tramites: 17, entregas: 16, observaciones: 1 },
          { month: 'Ene', tramites: 21, entregas: 20, observaciones: 1 },
          { month: 'Feb', tramites: 18, entregas: 17, observaciones: 0 },
          { month: 'Mar', tramites: 19, entregas: 18, observaciones: 1 }
        ],
        byType: [
          { type: 'Renovación Virtual DNIe', count: 64, percentage: 58, color: '#2563eb' },
          { type: 'Duplicado en Línea', count: 28, percentage: 25, color: '#0ea5e9' },
          { type: 'Actualización Domicilio Exterior', count: 18, percentage: 17, color: '#10b981' }
        ],
        topObservations: [
          { reason: 'Conexión a internet inestable durante captura facial', count: 3, percentage: 60, solution: 'Conectarse a red Wi-Fi estable para completar la biometría.' },
          { reason: 'Pago de tasa con tarjeta internacional denegada', count: 2, percentage: 40, solution: 'Habilitar compras en línea internacionales en su banco.' }
        ]
      },
      ciudadanoDigital: {
        serviceName: 'Portal Ciudadano Digital (PKI / DNIe)',
        totalTramites: 60,
        totalEntregas: 58,
        totalObservaciones: 2,
        tasaEfectividad: 96.7,
        tiempoPromedioDias: 1,
        enProceso: 0,
        monthlyHistory: [
          { month: 'Oct', tramites: 9, entregas: 9, observaciones: 0 },
          { month: 'Nov', tramites: 11, entregas: 11, observaciones: 0 },
          { month: 'Dic', tramites: 8, entregas: 8, observaciones: 0 },
          { month: 'Ene', tramites: 12, entregas: 11, observaciones: 1 },
          { month: 'Feb', tramites: 10, entregas: 10, observaciones: 0 },
          { month: 'Mar', tramites: 10, entregas: 9, observaciones: 1 }
        ],
        byType: [
          { type: 'Renovación Certificados Digitales DNIe', count: 32, percentage: 54, color: '#c01823' },
          { type: 'Cambio / Desbloqueo de PIN y PUK', count: 16, percentage: 26, color: '#2563eb' },
          { type: 'Descarga de Firma Digital', count: 8, percentage: 14, color: '#10b981' },
          { type: 'Verificación de Estado de Certificado', count: 4, percentage: 6, color: '#f59e0b' }
        ],
        topObservations: [
          { reason: 'PIN de seguridad bloqueado', count: 1, percentage: 50, solution: 'Usar código PUK para restablecer la contraseña.' },
          { reason: 'Conexión intermitente en portal web', count: 1, percentage: 50, solution: 'Reintentar con conexión estable a internet.' }
        ]
      }
    }
  };

  // Catalog of required documents by service
  private readonly servicesDocsCatalog: Record<string, ServiceDocumentsInfo> = {
    'biofacial': {
      serviceId: 'biofacial',
      title: 'App DNI Biofacial',
      subtitle: 'Renovación, Duplicado y Actualización de Domicilio Digital',
      badge: 'Trámite Digital',
      deliveryTime: '26 mins en validación digital',
      documents: [
        {
          name: 'DNI anterior o número de CUI',
          description: 'Número de documento de identidad para validación de datos en RENIEC.',
          iconType: 'id-card',
          tag: 'Obligatorio',
          tagColor: 'bg-red-100 text-red-700'
        },
        {
          name: 'Captura biométrica facial en vivo',
          description: 'Tomada directamente desde la cámara de la App móvil DNI Biofacial (fondo claro, sin lentes ni accesorios).',
          iconType: 'photo',
          tag: 'Digital',
          tagColor: 'bg-blue-100 text-blue-700'
        },
        {
          name: 'Comprobante de pago de tasa consular',
          description: 'Voucher digital de pago por derecho a trámite (Págalo.pe / Banco o transferencia consular).',
          iconType: 'receipt',
          tag: 'Obligatorio',
          tagColor: 'bg-red-100 text-red-700'
        },
        {
          name: 'Recibo o certificado de domicilio',
          description: 'Requerido solo si realiza cambio o actualización de dirección de residencia en el exterior.',
          iconType: 'home',
          tag: 'Si aplica',
          tagColor: 'bg-amber-100 text-amber-800'
        }
      ],
      tips: [
        'Realice la captura facial en un ambiente bien iluminado sin sombras pronunciadas.',
        'Asegúrese de que la cámara de su smartphone cuente con resolución mínima de 5 MP.',
        'Conserve su código de trámite digital para el seguimiento del estado de emisión.'
      ]
    },
    'sio': {
      serviceId: 'sio',
      title: 'SIO - Sistema Integrado Operativo',
      subtitle: 'Inscripción por primera vez, Canje de Libreta y Recojo de DNI',
      badge: 'Modalidad Presencial',
      deliveryTime: '25 mins aprox. de atención presencial',
      documents: [
        {
          name: 'Copia certificada de Acta de Nacimiento',
          description: 'Emitida por RENIEC o Consulado Peruano. Obligatoria para inscripción por primera vez.',
          iconType: 'certificate',
          tag: 'Original',
          tagColor: 'bg-red-100 text-red-700'
        },
        {
          name: 'Libreta Electoral antigua (Física)',
          description: 'Documento original necesario únicamente para el trámite de canje a DNI electrónico.',
          iconType: 'id-card',
          tag: 'Para canje',
          tagColor: 'bg-amber-100 text-amber-800'
        },
        {
          name: 'Documento de identidad local / Residencia',
          description: 'DNI extranjero, pasaporte o permiso de residencia vigente en el país de estancia.',
          iconType: 'id-card',
          tag: 'Identificación',
          tagColor: 'bg-blue-100 text-blue-700'
        },
        {
          name: 'Comprobante de pago o voucher consular',
          description: 'Comprobante de depósito bancario o pago en ventanilla consular por el concepto correspondiente.',
          iconType: 'receipt',
          tag: 'Obligatorio',
          tagColor: 'bg-red-100 text-red-700'
        },
        {
          name: 'Certificado de empadronamiento o domicilio',
          description: 'Documento que acredite la dirección de residencia actual en el extranjero.',
          iconType: 'home',
          tag: 'Acreditación',
          tagColor: 'bg-slate-100 text-slate-700'
        }
      ],
      tips: [
        'La captura biométrica (huellas dactilares y foto) se realiza según la modalidad consular.',
        'El DNI físico se envía desde Lima vía Valija diplomática.',
        'Puede verificar en línea cuando su DNI esté disponible para recojo en el consulado.'
      ]
    }
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const paisParam = params['pais'];
      const ciudadParam = params['ciudad'];

      if (paisParam) {
        this.activeCountryFilter.set(paisParam);
        const matches = this.locations.filter(
          l => l.country.toLowerCase() === paisParam.toLowerCase()
        );
        if (matches.length > 0) {
          if (ciudadParam) {
            const cityMatch = matches.find(
              l => l.city.toLowerCase() === ciudadParam.toLowerCase()
            );
            if (cityMatch) {
              this.selectedLocation.set(cityMatch);
              return;
            }
          }
          this.selectedLocation.set(matches[0]);
          return;
        }
      } else {
        this.activeCountryFilter.set(null);
      }

      if (ciudadParam) {
        const cityMatch = this.locations.find(
          l => l.city.toLowerCase() === ciudadParam.toLowerCase()
        );
        if (cityMatch) {
          this.selectedLocation.set(cityMatch);
        }
      }
    });
  }

  clearCountryFilter(): void {
    this.activeCountryFilter.set(null);
    this.router.navigate(['/consulados']);
  }

  toggleDropdown(): void {
    this.isDropdownOpen.update(v => !v);
  }

  selectLocation(location: LocationOption): void {
    this.selectedLocation.set(location);
    this.isDropdownOpen.set(false);
  }

  openDocumentsModal(serviceId: 'biofacial' | 'sio'): void {
    const data = this.servicesDocsCatalog[serviceId];
    if (data) {
      this.selectedServiceDocs.set(data);
      this.isDocsModalOpen.set(true);
    }
  }

  closeDocumentsModal(): void {
    this.isDocsModalOpen.set(false);
    this.selectedServiceDocs.set(null);
  }

  // Statistics Modal methods
  openStatsModal(serviceId: 'sio' | 'biofacial' | 'ciudadanoDigital' | 'all' = 'all'): void {
    this.statsServiceType.set(serviceId);
    this.hoveredMonthIndex.set(null);
    this.isStatsModalOpen.set(true);
  }

  closeStatsModal(): void {
    this.isStatsModalOpen.set(false);
    this.hoveredMonthIndex.set(null);
  }

  setStatsServiceType(serviceId: 'sio' | 'biofacial' | 'ciudadanoDigital' | 'all'): void {
    this.statsServiceType.set(serviceId);
    this.hoveredMonthIndex.set(null);
  }

  toggleMetric(metric: 'tramites' | 'entregas' | 'observaciones'): void {
    this.visibleMetrics.update(current => {
      const next = { ...current, [metric]: !current[metric] };
      // Ensure at least one metric is always visible
      if (!next.tramites && !next.entregas && !next.observaciones) {
        return current;
      }
      return next;
    });
  }

  setHoveredMonth(index: number | null): void {
    this.hoveredMonthIndex.set(index);
  }

  getCurrentStats(): ConsulateServiceStats {
    const city = this.selectedLocation().city;
    const statsForCity = this.statsCatalog[city] || this.statsCatalog['Madrid'];
    const serviceType = this.statsServiceType();

    if (serviceType === 'sio') {
      return statsForCity.sio;
    } else if (serviceType === 'biofacial') {
      return statsForCity.biofacial;
    } else if (serviceType === 'ciudadanoDigital') {
      return statsForCity.ciudadanoDigital;
    } else {
      // Consolidated
      const sio = statsForCity.sio;
      const bio = statsForCity.biofacial;
      const cd = statsForCity.ciudadanoDigital;

      const combinedMonthly: MonthlyStat[] = sio.monthlyHistory.map((m: MonthlyStat, idx: number) => {
        const bioM = bio.monthlyHistory[idx] || { tramites: 0, entregas: 0, observaciones: 0 };
        const cdM = cd.monthlyHistory[idx] || { tramites: 0, entregas: 0, observaciones: 0 };
        return {
          month: m.month,
          tramites: m.tramites + bioM.tramites + cdM.tramites,
          entregas: m.entregas + bioM.entregas + cdM.entregas,
          observaciones: m.observaciones + bioM.observaciones + cdM.observaciones
        };
      });

      const totalTramites = sio.totalTramites + bio.totalTramites + cd.totalTramites;
      const totalEntregas = sio.totalEntregas + bio.totalEntregas + cd.totalEntregas;
      const totalObservaciones = sio.totalObservaciones + bio.totalObservaciones + cd.totalObservaciones;
      const tasaEfectividad = totalTramites > 0 ? Number(((totalEntregas / totalTramites) * 100).toFixed(1)) : 97.5;
      const tiempoPromedioDias = Math.round((sio.tiempoPromedioDias + bio.tiempoPromedioDias + cd.tiempoPromedioDias) / 3);

      return {
        serviceName: 'Consolidado General (SIO + Biofacial + Ciudadano Digital)',
        totalTramites,
        totalEntregas,
        totalObservaciones,
        tasaEfectividad,
        tiempoPromedioDias,
        enProceso: sio.enProceso + bio.enProceso + cd.enProceso,
        monthlyHistory: combinedMonthly,
        byType: [
          { type: 'DNIe (Presencial + Virtual)', count: Math.round(totalTramites * 0.46), percentage: 46, color: '#2563eb' },
          { type: 'Certificados Ciudadano Digital (PKI)', count: cd.totalTramites, percentage: Math.round((cd.totalTramites / totalTramites) * 100), color: '#c01823' },
          { type: 'Duplicados de DNI', count: Math.round(totalTramites * 0.18), percentage: 18, color: '#0ea5e9' },
          { type: 'Rectificación de Datos / Domicilio', count: Math.round(totalTramites * 0.12), percentage: 12, color: '#10b981' }
        ],
        topObservations: sio.topObservations
      };
    }
  }

  getMaxMonthlyValue(): number {
    const stats = this.getCurrentStats();
    let max = 100;
    stats.monthlyHistory.forEach(m => {
      if (this.visibleMetrics().tramites && m.tramites > max) max = m.tramites;
      if (this.visibleMetrics().entregas && m.entregas > max) max = m.entregas;
      if (this.visibleMetrics().observaciones && m.observaciones > max) max = m.observaciones;
    });
    return Math.ceil(max * 1.15); // 15% head room for bar chart aesthetics
  }

  getBarHeightPercentage(value: number): number {
    const max = this.getMaxMonthlyValue();
    if (max <= 0) return 4;
    const pct = (value / max) * 100;
    return Math.max(4, Math.min(100, Math.round(pct)));
  }

  formatNumber(val: number): string {
    return new Intl.NumberFormat('es-PE').format(val);
  }
}





