import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  cost: string;
  deliveryTime: string;
  documents: DocumentItem[];
  tips: string[];
}

export interface ScheduleShift {
  days: string;
  consularHours: string;
  peruHours: string;
  modality: string;
}

export interface LocationOption {
  city: string;
  country: string;
  phone: string;
  whatsappPhone?: string;
  address: string;
  email: string;
  photo: string;
  sioActive: boolean;
  sioCaptureMode?: 'SEMIAUTOMÁTICA' | 'MANUAL';
  sioDeliveryMethod?: string;
  biofacialActive: boolean;
  sircmActive: boolean;
  ciudadanoDigitalActive: boolean;
  importantNotice?: string | null;
  schedules: ScheduleShift[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly title = signal('Cartera de Servicios Consulares - Perú');

  // Location selector options
  readonly locations: LocationOption[] = [
    {
      city: 'Madrid',
      country: 'España',
      phone: '+34-91-5629022 Ó +34-91-5629012 , SOLO EMERGENCIA: +34-669701608',
      whatsappPhone: '+34669701608',
      address: '28008, P.º del Pintor Rosales, 30, 28008 Madrid, España',
      email: 'info@consuladoperumadrid.org',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'SEMIAUTOMÁTICA',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: true,
      sircmActive: true,
      ciudadanoDigitalActive: true,
      importantNotice: 'Si usted tramitó su DNI a través de la aplicación DNI Biofacial web RENIEC, deberá acercarse al consulado personalmente para recoger su DNI debido a que se requiere la toma de huellas para la entrega. No se aceptan cartas poder.',
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '08:30 – 14:00 h (Hora España)',
          peruHours: '01:30 – 07:00 h (Hora Perú)',
          modality: '(Trámites presenciales con cita previa)'
        },
        {
          days: 'Martes y Jueves',
          consularHours: '15:00 – 18:00 h (Hora España)',
          peruHours: '08:00 – 11:00 h (Hora Perú)',
          modality: '(Entrega de DNI y pasaportes sin cita)'
        }
      ]
    },
    {
      city: 'Barcelona',
      country: 'España',
      phone: '+34 932 154 321',
      whatsappPhone: '+34932154321',
      address: 'Passeig de Gràcia, 45, 08007 Barcelona, España',
      email: 'informes@consuladoperubarcelona.es',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'SEMIAUTOMÁTICA',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: true,
      sircmActive: true,
      ciudadanoDigitalActive: true,
      importantNotice: null,
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '09:00 – 14:00 h (Hora España)',
          peruHours: '02:00 – 07:00 h (Hora Perú)',
          modality: '(Atención con cita electrónica)'
        },
        {
          days: 'Viernes',
          consularHours: '14:30 – 16:30 h (Hora España)',
          peruHours: '07:30 – 09:30 h (Hora Perú)',
          modality: '(Recojo exclusivo de documentos)'
        }
      ]
    },
    {
      city: 'Valencia',
      country: 'España',
      phone: '+34 963 852 741',
      whatsappPhone: '+34963852741',
      address: 'Plaza del Ayuntamiento, 12, 46002 Valencia, España',
      email: 'valencia@consuladoperu.es',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'MANUAL',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: false,
      sircmActive: true,
      ciudadanoDigitalActive: false,
      importantNotice: 'El servicio App Biofacial y Certificados Digitales se encuentran en mantenimiento técnico. Para trámites biométricos presenciales acudir con cita SIO.',
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '08:30 – 13:30 h (Hora España)',
          peruHours: '01:30 – 06:30 h (Hora Perú)',
          modality: '(Atención presencial regular)'
        }
      ]
    },
    {
      city: 'París',
      country: 'Francia',
      phone: '+33 1 42 61 58 00',
      whatsappPhone: '+33142615800',
      address: '50 Avenue Kléber, 75116 Paris, France',
      email: 'consulat.perou@paris.fr',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'SEMIAUTOMÁTICA',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: true,
      sircmActive: true,
      ciudadanoDigitalActive: false,
      importantNotice: null,
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '09:00 – 14:30 h (Hora Francia)',
          peruHours: '02:00 – 07:30 h (Hora Perú)',
          modality: '(Trámites consulares con cita)'
        }
      ]
    },
    {
      city: 'Milán',
      country: 'Italia',
      phone: '+39 02 7600 6093',
      whatsappPhone: '+390276006093',
      address: 'Via Pantano, 13, 20122 Milano, Italia',
      email: 'informes@consuladoperumilan.it',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'SEMIAUTOMÁTICA',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: true,
      sircmActive: true,
      ciudadanoDigitalActive: true,
      importantNotice: 'El recojo de DNI físico procesado en Lima se efectúa únicamente los días miércoles y viernes con ticket digital.',
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '08:30 – 13:30 h (Hora Italia)',
          peruHours: '01:30 – 06:30 h (Hora Perú)',
          modality: '(Atención general con cita previa)'
        },
        {
          days: 'Miércoles y Viernes',
          consularHours: '14:00 – 16:30 h (Hora Italia)',
          peruHours: '07:00 – 09:30 h (Hora Perú)',
          modality: '(Entrega de documentos procesados)'
        }
      ]
    },
    {
      city: 'Buenos Aires',
      country: 'Argentina',
      phone: '+54 11 4802 2000',
      whatsappPhone: '+541148022000',
      address: 'San Martín 128, C1004 AAD Buenos Aires, Argentina',
      email: 'consultas@consuladoperubaires.org',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'MANUAL',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: true,
      sircmActive: true,
      ciudadanoDigitalActive: true,
      importantNotice: 'Inscripción SIO de recién nacidos requiere presentar acta consular previa registrada en el sistema SIRCM.',
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '09:00 – 14:00 h (Hora Argentina)',
          peruHours: '07:00 – 12:00 h (Hora Perú)',
          modality: '(Trámites consulares y DNI)'
        }
      ]
    },
    {
      city: 'Santiago',
      country: 'Chile',
      phone: '+56 2 2362 9300',
      whatsappPhone: '+56223629300',
      address: 'Av. Andrés Bello 1751, Providencia, Santiago, Chile',
      email: 'contacto@consuladoperuchile.cl',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'MANUAL',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: false,
      sircmActive: true,
      ciudadanoDigitalActive: false,
      importantNotice: null,
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '08:30 – 13:30 h (Hora Chile)',
          peruHours: '06:30 – 11:30 h (Hora Perú)',
          modality: '(Atención con reserva de turno online)'
        }
      ]
    },
    {
      city: 'Miami',
      country: 'Estados Unidos',
      phone: '+1 305 373 8520',
      whatsappPhone: '+13053738520',
      address: '2801 Ponce de Leon Blvd, Coral Gables, FL 33134, EE.UU.',
      email: 'info@consuladoperumiami.gov',
      photo: 'MADRID.jpg',
      sioActive: true,
      sioCaptureMode: 'SEMIAUTOMÁTICA',
      sioDeliveryMethod: 'Valija diplomática',
      biofacialActive: true,
      sircmActive: false,
      ciudadanoDigitalActive: true,
      importantNotice: 'Servicio SIRCM en mantenimiento preventivo. Las actas de registro civil se remitirán temporalmente por valija diplomática.',
      schedules: [
        {
          days: 'De Lunes a Viernes',
          consularHours: '08:30 – 14:00 h (Hora Miami)',
          peruHours: '07:30 – 13:00 h (Hora Perú)',
          modality: '(Atención general con cita previa)'
        }
      ]
    }
  ];

  readonly selectedLocation = signal<LocationOption>(this.locations[0]);
  readonly isDropdownOpen = signal<boolean>(false);

  // Documents modal state
  readonly isDocsModalOpen = signal<boolean>(false);
  readonly selectedServiceDocs = signal<ServiceDocumentsInfo | null>(null);

  // Catalog of required documents by service
  private readonly servicesDocsCatalog: Record<string, ServiceDocumentsInfo> = {
    'biofacial': {
      serviceId: 'biofacial',
      title: 'App DNI Biofacial',
      subtitle: 'Renovación, Duplicado y Actualización de Domicilio Digital',
      badge: 'Trámite Digital',
      cost: 'S/ 30.00',
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
        },
        {
          name: 'Declaración jurada de estado civil',
          description: 'Formato digital para actualizar estado civil en caso corresponda.',
          iconType: 'file-text',
          tag: 'Opcional',
          tagColor: 'bg-slate-100 text-slate-700'
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
      badge: 'Modalidad Presencial / Semiautomática o Manual',
      cost: 'S/ 10.00',
      deliveryTime: '25 mins de atención presencial',
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
          description: 'NIE, DNI extranjero, pasaporte o permiso de residencia vigente en el país de estancia.',
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
        'La captura biométrica (huellas dactilares y foto) se realiza según la modalidad consular (semiautomática o manual).',
        'El DNI físico se envía desde Lima vía Valija diplomática.',
        'Puede verificar en línea cuando su DNI esté disponible para recojo en el consulado.'
      ]
    }
  };

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


}



