// Generated automatically from data.xlsx (5 Continents)
export interface ConsularCity {
  city: string;
  country: string;
  lat: number;
  lng: number;
  phone: string;
  address: string;
  sioActive: boolean;
  sioCaptureMode?: string;
  sioDeliveryMethod?: string;
  biofacialActive: boolean;
  sircmActive: boolean;
  ciudadanoDigitalActive: boolean;
  codLocal?: string;
}

export interface CountryData {
  name: string;
  code: string;
  flag: string;
  continentId: string;
  cities: ConsularCity[];
}

export interface ContinentData {
  id: string;
  name: string;
  color: string;
  hexColor: number;
  textColor: string;
  borderColor: string;
  centerLat: number;
  centerLng: number;
  description: string;
  countries: CountryData[];
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
  continentId?: string;
  codLocal?: string;
  phone: string;
  whatsappPhone?: string;
  address: string;
  email: string;
  photo: string;
  sioActive: boolean;
  sioCaptureMode?: 'SEMIAUTOMÁTICA' | 'MANUAL' | 'CAPTURA EN VIVO' | string;
  sioDeliveryMethod?: string;
  biofacialActive: boolean;
  sircmActive: boolean;
  ciudadanoDigitalActive: boolean;
  importantNotice?: string | null;
  lat?: number;
  lng?: number;
  schedules: ScheduleShift[];
}

export const CONTINENTS_DATA: ContinentData[] = [
  {
    "id": "america",
    "name": "América",
    "color": "#10b981",
    "hexColor": 0x10b981,
    "textColor": "text-emerald-400",
    "borderColor": "border-emerald-500",
    "centerLat": 10,
    "centerLng": -75,
    "description": "Red consular y servicios digitales en América del Norte, Centroamérica, el Caribe y América del Sur.",
    "countries": [
      {
        "name": "Chile",
        "code": "CL",
        "flag": "🇨🇱",
        "continentId": "america",
        "cities": [
          {
            "city": "Antofagasta",
            "country": "Chile",
            "lat": -23.6509,
            "lng": -70.3975,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Antofagasta, Chile",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067644"
          },
          {
            "city": "Arica",
            "country": "Chile",
            "lat": -18.4783,
            "lng": -70.3126,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Arica, Chile",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061601"
          },
          {
            "city": "Iquique",
            "country": "Chile",
            "lat": -20.2307,
            "lng": -70.1357,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Iquique, Chile",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061602"
          },
          {
            "city": "Santiago",
            "country": "Chile",
            "lat": -33.4489,
            "lng": -70.6693,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Santiago, Chile",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061603"
          }
        ]
      },
      {
        "name": "Paraguay",
        "code": "PY",
        "flag": "🇵🇾",
        "continentId": "america",
        "cities": [
          {
            "city": "Asunción",
            "country": "Paraguay",
            "lat": -25.2637,
            "lng": -57.5759,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Asunción, Paraguay",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "065301"
          }
        ]
      },
      {
        "name": "Estados Unidos",
        "code": "US",
        "flag": "🇺🇸",
        "continentId": "america",
        "cities": [
          {
            "city": "Atlanta",
            "country": "Estados Unidos",
            "lat": 33.749,
            "lng": -84.388,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Atlanta, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062310"
          },
          {
            "city": "Boston",
            "country": "Estados Unidos",
            "lat": 42.3601,
            "lng": -71.0589,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Boston, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062311"
          },
          {
            "city": "Chicago",
            "country": "Estados Unidos",
            "lat": 41.8781,
            "lng": -87.6298,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Chicago, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062301"
          },
          {
            "city": "Dallas",
            "country": "Estados Unidos",
            "lat": 32.7767,
            "lng": -96.797,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Dallas, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062318"
          },
          {
            "city": "Denver",
            "country": "Estados Unidos",
            "lat": 39.7392,
            "lng": -104.9903,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Denver, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062319"
          },
          {
            "city": "Hartford",
            "country": "Estados Unidos",
            "lat": 41.7658,
            "lng": -72.6734,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Hartford, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062320"
          },
          {
            "city": "Honolulu",
            "country": "Estados Unidos",
            "lat": 21.3069,
            "lng": -157.8583,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Honolulu, Estados Unidos",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062312"
          },
          {
            "city": "Houston",
            "country": "Estados Unidos",
            "lat": 29.7604,
            "lng": -95.3698,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Houston, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062302"
          },
          {
            "city": "Los Angeles",
            "country": "Estados Unidos",
            "lat": 34.0522,
            "lng": -118.2437,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Los Angeles, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062303"
          },
          {
            "city": "Miami",
            "country": "Estados Unidos",
            "lat": 25.7617,
            "lng": -80.1918,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Miami, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062304"
          },
          {
            "city": "New Orleans",
            "country": "Estados Unidos",
            "lat": 29.9511,
            "lng": -90.0715,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en New Orleans, Estados Unidos",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062313"
          },
          {
            "city": "Nueva York",
            "country": "Estados Unidos",
            "lat": 40.7128,
            "lng": -74.006,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Nueva York, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062305"
          },
          {
            "city": "Paterson",
            "country": "Estados Unidos",
            "lat": 40.9168,
            "lng": -74.1718,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Paterson, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062306"
          },
          {
            "city": "Phoenix",
            "country": "Estados Unidos",
            "lat": 33.4484,
            "lng": -112.074,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Phoenix, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "067632"
          },
          {
            "city": "Salt Lake City",
            "country": "Estados Unidos",
            "lat": 40.7608,
            "lng": -111.891,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Salt Lake City, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "067621"
          },
          {
            "city": "San Francisco",
            "country": "Estados Unidos",
            "lat": 37.7749,
            "lng": -122.4194,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en San Francisco, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062308"
          },
          {
            "city": "San Luis",
            "country": "Estados Unidos",
            "lat": 38.627,
            "lng": -90.1994,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en San Luis, Estados Unidos",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062315"
          },
          {
            "city": "Seattle",
            "country": "Estados Unidos",
            "lat": 47.6062,
            "lng": -122.3321,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Seattle, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062316"
          },
          {
            "city": "Tampa",
            "country": "Estados Unidos",
            "lat": 27.9506,
            "lng": -82.4572,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Tampa, Estados Unidos",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067611"
          },
          {
            "city": "Washington",
            "country": "Estados Unidos",
            "lat": 38.9072,
            "lng": -77.0369,
            "phone": "+1 305 373 8520",
            "address": "Consulado del Perú en Washington, Estados Unidos",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062309"
          }
        ]
      },
      {
        "name": "Colombia",
        "code": "CO",
        "flag": "🇨🇴",
        "continentId": "america",
        "cities": [
          {
            "city": "Barranquilla",
            "country": "Colombia",
            "lat": 10.9685,
            "lng": -74.7813,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Barranquilla, Colombia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061103"
          },
          {
            "city": "Bogotáá",
            "country": "Colombia",
            "lat": 0.0,
            "lng": 0.0,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Bogotáá, Colombia",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061101"
          },
          {
            "city": "Cali",
            "country": "Colombia",
            "lat": 3.4516,
            "lng": -76.532,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Cali, Colombia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061104"
          },
          {
            "city": "Cartagena de Indias",
            "country": "Colombia",
            "lat": 10.391,
            "lng": -75.4794,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Cartagena de Indias, Colombia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061106"
          },
          {
            "city": "Leticia",
            "country": "Colombia",
            "lat": -4.2153,
            "lng": -69.9406,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Leticia, Colombia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061102"
          },
          {
            "city": "Medellín",
            "country": "Colombia",
            "lat": 6.2442,
            "lng": -75.5812,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Medellín, Colombia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061105"
          }
        ]
      },
      {
        "name": "Brasil",
        "code": "BR",
        "flag": "🇧🇷",
        "continentId": "america",
        "cities": [
          {
            "city": "Belo Horizonte",
            "country": "Brasil",
            "lat": -19.9167,
            "lng": -43.9345,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Belo Horizonte, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067629"
          },
          {
            "city": "Brasilia",
            "country": "Brasil",
            "lat": -15.8267,
            "lng": -47.9218,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Brasilia, Brasil",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060804"
          },
          {
            "city": "Curitiba",
            "country": "Brasil",
            "lat": -25.4284,
            "lng": -49.2733,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Curitiba, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060807"
          },
          {
            "city": "Fortaleza",
            "country": "Brasil",
            "lat": -3.7172,
            "lng": -38.5433,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Fortaleza, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067626"
          },
          {
            "city": "Manaos",
            "country": "Brasil",
            "lat": -3.119,
            "lng": -60.0217,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Manaos, Brasil",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "060801"
          },
          {
            "city": "Porto Alegre",
            "country": "Brasil",
            "lat": -30.0346,
            "lng": -51.2177,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Porto Alegre, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060810"
          },
          {
            "city": "Porto Velho",
            "country": "Brasil",
            "lat": -8.7619,
            "lng": -63.9039,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Porto Velho, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060808"
          },
          {
            "city": "Recife",
            "country": "Brasil",
            "lat": -8.0476,
            "lng": -34.877,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Recife, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060812"
          },
          {
            "city": "Rio Branco",
            "country": "Brasil",
            "lat": -9.9753,
            "lng": -67.8249,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Rio Branco, Brasil",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "060811"
          },
          {
            "city": "Rio de Janeiro",
            "country": "Brasil",
            "lat": -22.9068,
            "lng": -43.1729,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Rio de Janeiro, Brasil",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060802"
          },
          {
            "city": "Salvador",
            "country": "Brasil",
            "lat": -12.9777,
            "lng": -38.5016,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Salvador, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060809"
          },
          {
            "city": "San Pablo",
            "country": "Brasil",
            "lat": -23.5505,
            "lng": -46.6333,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en San Pablo, Brasil",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060803"
          },
          {
            "city": "Tabatinga",
            "country": "Brasil",
            "lat": -4.2325,
            "lng": -69.9381,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Tabatinga, Brasil",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067630"
          }
        ]
      },
      {
        "name": "Argentina",
        "code": "AR",
        "flag": "🇦🇷",
        "continentId": "america",
        "cities": [
          {
            "city": "Buenos Aires",
            "country": "Argentina",
            "lat": -34.6037,
            "lng": -58.3816,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Buenos Aires, Argentina",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060301"
          },
          {
            "city": "Cordoba",
            "country": "Argentina",
            "lat": -31.4201,
            "lng": -64.1888,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Cordoba, Argentina",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060302"
          },
          {
            "city": "Corrientes",
            "country": "Argentina",
            "lat": -27.4698,
            "lng": -58.8306,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Corrientes, Argentina",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060306"
          },
          {
            "city": "La Plata",
            "country": "Argentina",
            "lat": -34.9214,
            "lng": -57.9545,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en La Plata, Argentina",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060303"
          },
          {
            "city": "Mar de Plata",
            "country": "Argentina",
            "lat": -38.0055,
            "lng": -57.5562,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Mar de Plata, Argentina",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060308"
          },
          {
            "city": "Mendoza",
            "country": "Argentina",
            "lat": -32.8895,
            "lng": -68.8458,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Mendoza, Argentina",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060305"
          },
          {
            "city": "Rosario",
            "country": "Argentina",
            "lat": -32.9468,
            "lng": -60.6393,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Rosario, Argentina",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060307"
          },
          {
            "city": "Salta",
            "country": "Argentina",
            "lat": -24.7821,
            "lng": -65.4232,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Salta, Argentina",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067609"
          }
        ]
      },
      {
        "name": "Venezuela",
        "code": "VE",
        "flag": "🇻🇪",
        "continentId": "america",
        "cities": [
          {
            "city": "Caracas",
            "country": "Venezuela",
            "lat": 10.4806,
            "lng": -66.9036,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Caracas, Venezuela",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "066601"
          },
          {
            "city": "Puerto Ordaz",
            "country": "Venezuela",
            "lat": 8.297,
            "lng": -62.723,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Puerto Ordaz, Venezuela",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "066602"
          }
        ]
      },
      {
        "name": "Guyana Francesa",
        "code": "GF",
        "flag": "🇬🇫",
        "continentId": "america",
        "cities": [
          {
            "city": "Cayena",
            "country": "Guyana Francesa",
            "lat": 4.9372,
            "lng": -52.326,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Cayena, Guyana Francesa",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067201"
          }
        ]
      },
      {
        "name": "Bolivia",
        "code": "BO",
        "flag": "🇧🇴",
        "continentId": "america",
        "cities": [
          {
            "city": "Cochabamba",
            "country": "Bolivia",
            "lat": -17.3895,
            "lng": -66.1568,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Cochabamba, Bolivia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060703"
          },
          {
            "city": "La Paz",
            "country": "Bolivia",
            "lat": -16.5,
            "lng": -68.15,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en La Paz, Bolivia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060701"
          },
          {
            "city": "Santa Cruz",
            "country": "Bolivia",
            "lat": -17.8146,
            "lng": -63.1561,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Santa Cruz, Bolivia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "060702"
          },
          {
            "city": "Sucre",
            "country": "Bolivia",
            "lat": -19.0333,
            "lng": -65.2627,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Sucre, Bolivia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060704"
          }
        ]
      },
      {
        "name": "Panamáá",
        "code": "PE",
        "flag": "🇵🇪",
        "continentId": "america",
        "cities": [
          {
            "city": "Colón",
            "country": "Panamáá",
            "lat": 9.3598,
            "lng": -79.9014,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Colón, Panamáá",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065202"
          },
          {
            "city": "Panamáá",
            "country": "Panamáá",
            "lat": 0.0,
            "lng": 0.0,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Panamáá, Panamáá",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "065201"
          },
          {
            "city": "Puerto David",
            "country": "Panamáá",
            "lat": 8.4274,
            "lng": -82.4308,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Puerto David, Panamáá",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "652023"
          },
          {
            "city": "Santiago",
            "country": "Panamáá",
            "lat": -33.4489,
            "lng": -70.6693,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Santiago, Panamáá",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067608"
          }
        ]
      },
      {
        "name": "Ecuador",
        "code": "EC",
        "flag": "🇪🇨",
        "continentId": "america",
        "cities": [
          {
            "city": "Cuenca",
            "country": "Ecuador",
            "lat": -2.9001,
            "lng": -79.0059,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Cuenca, Ecuador",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "067628"
          },
          {
            "city": "Guayaquil",
            "country": "Ecuador",
            "lat": -2.1709,
            "lng": -79.9224,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Guayaquil, Ecuador",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061901"
          },
          {
            "city": "Loja",
            "country": "Ecuador",
            "lat": -3.9931,
            "lng": -79.2042,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Loja, Ecuador",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061902"
          },
          {
            "city": "Machala",
            "country": "Ecuador",
            "lat": -3.2581,
            "lng": -79.9553,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Machala, Ecuador",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "061904"
          },
          {
            "city": "Quito",
            "country": "Ecuador",
            "lat": -0.1807,
            "lng": -78.4678,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Quito, Ecuador",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061905"
          }
        ]
      },
      {
        "name": "México",
        "code": "MX",
        "flag": "🇲🇽",
        "continentId": "america",
        "cities": [
          {
            "city": "Guadalajara",
            "country": "México",
            "lat": 20.6597,
            "lng": -103.3496,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Guadalajara, México",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064602"
          },
          {
            "city": "México",
            "country": "México",
            "lat": 19.4326,
            "lng": -99.1332,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en México, México",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "064601"
          },
          {
            "city": "Monterrey",
            "country": "México",
            "lat": 25.6866,
            "lng": -100.3161,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Monterrey, México",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064603"
          }
        ]
      },
      {
        "name": "Guatemala",
        "code": "GT",
        "flag": "🇬🇹",
        "continentId": "america",
        "cities": [
          {
            "city": "Guatemala",
            "country": "Guatemala",
            "lat": 14.6349,
            "lng": -90.5069,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Guatemala, Guatemala",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062800"
          }
        ]
      },
      {
        "name": "Cuba",
        "code": "CU",
        "flag": "🇨🇺",
        "continentId": "america",
        "cities": [
          {
            "city": "La Habana",
            "country": "Cuba",
            "lat": 23.1136,
            "lng": -82.3666,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en La Habana, Cuba",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "061501"
          }
        ]
      },
      {
        "name": "Nicaragua",
        "code": "NI",
        "flag": "🇳🇮",
        "continentId": "america",
        "cities": [
          {
            "city": "Managua",
            "country": "Nicaragua",
            "lat": 12.115,
            "lng": -86.2362,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Managua, Nicaragua",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064801"
          }
        ]
      },
      {
        "name": "Uruguay",
        "code": "UY",
        "flag": "🇺🇾",
        "continentId": "america",
        "cities": [
          {
            "city": "Montevideo",
            "country": "Uruguay",
            "lat": -34.9011,
            "lng": -56.1645,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Montevideo, Uruguay",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "066501"
          }
        ]
      },
      {
        "name": "Canadáá",
        "code": "PE",
        "flag": "🇵🇪",
        "continentId": "america",
        "cities": [
          {
            "city": "Montreal",
            "country": "Canadáá",
            "lat": 45.5017,
            "lng": -73.5673,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Montreal, Canadáá",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061001"
          },
          {
            "city": "Ottawa",
            "country": "Canadáá",
            "lat": 45.4215,
            "lng": -75.6972,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Ottawa, Canadáá",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061004"
          },
          {
            "city": "Quebec",
            "country": "Canadáá",
            "lat": 46.8139,
            "lng": -71.208,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Quebec, Canadáá",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061005"
          },
          {
            "city": "Toronto",
            "country": "Canadáá",
            "lat": 43.6532,
            "lng": -79.3832,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Toronto, Canadáá",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061002"
          },
          {
            "city": "Vancouver",
            "country": "Canadáá",
            "lat": 49.2827,
            "lng": -123.1207,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Vancouver, Canadáá",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061003"
          }
        ]
      },
      {
        "name": "Trinidad y Tobago",
        "code": "TT",
        "flag": "🇹🇹",
        "continentId": "america",
        "cities": [
          {
            "city": "Puerto España",
            "country": "Trinidad y Tobago",
            "lat": 10.6549,
            "lng": -61.5019,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Puerto España, Trinidad y Tobago",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067625"
          }
        ]
      },
      {
        "name": "Costa Rica",
        "code": "CR",
        "flag": "🇨🇷",
        "continentId": "america",
        "cities": [
          {
            "city": "San Joséé",
            "country": "Costa Rica",
            "lat": 0.0,
            "lng": 0.0,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en San Joséé, Costa Rica",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "061301"
          }
        ]
      },
      {
        "name": "Puerto Rico",
        "code": "PR",
        "flag": "🇵🇷",
        "continentId": "america",
        "cities": [
          {
            "city": "San Juan",
            "country": "Puerto Rico",
            "lat": 18.4655,
            "lng": -66.1057,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en San Juan, Puerto Rico",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062307"
          }
        ]
      },
      {
        "name": "El Salvador",
        "code": "SV",
        "flag": "🇸🇻",
        "continentId": "america",
        "cities": [
          {
            "city": "San Salvador",
            "country": "El Salvador",
            "lat": 13.6929,
            "lng": -89.2182,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en San Salvador, El Salvador",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062101"
          }
        ]
      },
      {
        "name": "República Dominicana",
        "code": "DO",
        "flag": "🇩🇴",
        "continentId": "america",
        "cities": [
          {
            "city": "Santo Domingo",
            "country": "República Dominicana",
            "lat": 18.4861,
            "lng": -69.9312,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Santo Domingo, República Dominicana",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "067002"
          }
        ]
      },
      {
        "name": "Honduras",
        "code": "HN",
        "flag": "🇭🇳",
        "continentId": "america",
        "cities": [
          {
            "city": "Tegucigalpa",
            "country": "Honduras",
            "lat": 14.0723,
            "lng": -87.1921,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Tegucigalpa, Honduras",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062901"
          }
        ]
      }
    ]
  },
  {
    "id": "europa",
    "name": "Europa",
    "color": "#3b82f6",
    "hexColor": 0x3b82f6,
    "textColor": "text-blue-400",
    "borderColor": "border-blue-500",
    "centerLat": 48,
    "centerLng": 15,
    "description": "Red consular en los países de Europa y principales sedes receptoras.",
    "countries": [
      {
        "name": "Bélgica",
        "code": "BE",
        "flag": "🇧🇪",
        "continentId": "europa",
        "cities": [
          {
            "city": "Amberes",
            "country": "Bélgica",
            "lat": 51.2194,
            "lng": 4.4025,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Amberes, Bélgica",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060601"
          },
          {
            "city": "Bruselas",
            "country": "Bélgica",
            "lat": 50.8503,
            "lng": 4.3517,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Bruselas, Bélgica",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "060602"
          },
          {
            "city": "Gante",
            "country": "Bélgica",
            "lat": 51.0543,
            "lng": 3.7174,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Gante, Bélgica",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060603"
          }
        ]
      },
      {
        "name": "Holanda",
        "code": "NL",
        "flag": "🇳🇱",
        "continentId": "europa",
        "cities": [
          {
            "city": "Amsterdam",
            "country": "Holanda",
            "lat": 52.3676,
            "lng": 4.9041,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Amsterdam, Holanda",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "065101"
          },
          {
            "city": "Rotterdam",
            "country": "Holanda",
            "lat": 51.9244,
            "lng": 4.4777,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Rotterdam, Holanda",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065102"
          }
        ]
      },
      {
        "name": "Turquía",
        "code": "TR",
        "flag": "🇹🇷",
        "continentId": "europa",
        "cities": [
          {
            "city": "Ankara",
            "country": "Turquía",
            "lat": 39.9334,
            "lng": 32.8597,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Ankara, Turquía",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067613"
          },
          {
            "city": "Estambul",
            "country": "Turquía",
            "lat": 41.0082,
            "lng": 28.9784,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Estambul, Turquía",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "066401"
          }
        ]
      },
      {
        "name": "Grecia",
        "code": "GR",
        "flag": "🇬🇷",
        "continentId": "europa",
        "cities": [
          {
            "city": "Atenas",
            "country": "Grecia",
            "lat": 37.9838,
            "lng": 23.7275,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Atenas, Grecia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062701"
          },
          {
            "city": "Salónica",
            "country": "Grecia",
            "lat": 40.6401,
            "lng": 22.9444,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Salónica, Grecia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062703"
          }
        ]
      },
      {
        "name": "Azerbaiyán",
        "code": "AZ",
        "flag": "🇦🇿",
        "continentId": "europa",
        "cities": [
          {
            "city": "Bakúú",
            "country": "Azerbaiyán",
            "lat": 0.0,
            "lng": 0.0,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Bakúú, Azerbaiyán",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067627"
          }
        ]
      },
      {
        "name": "España",
        "code": "ES",
        "flag": "🇪🇸",
        "continentId": "europa",
        "cities": [
          {
            "city": "Barcelona",
            "country": "España",
            "lat": 41.3851,
            "lng": 2.1734,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Barcelona, España",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062201"
          },
          {
            "city": "Bilbao",
            "country": "España",
            "lat": 43.263,
            "lng": -2.935,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Bilbao, España",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062203"
          },
          {
            "city": "Las Palmas de Gran Canaria",
            "country": "España",
            "lat": 28.1235,
            "lng": -15.4363,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Las Palmas de Gran Canaria, España",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062205"
          },
          {
            "city": "Madrid",
            "country": "España",
            "lat": 40.4168,
            "lng": -3.7038,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Madrid, España",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062202"
          },
          {
            "city": "Málaga",
            "country": "España",
            "lat": 36.7213,
            "lng": -4.4214,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Málaga, España",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062212"
          },
          {
            "city": "Oviedo",
            "country": "España",
            "lat": 43.3619,
            "lng": -5.8494,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Oviedo, España",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067614"
          },
          {
            "city": "Palma de Mallorca",
            "country": "España",
            "lat": 39.5696,
            "lng": 2.6502,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Palma de Mallorca, España",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062204"
          },
          {
            "city": "Salamanca",
            "country": "España",
            "lat": 40.9701,
            "lng": -5.6635,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Salamanca, España",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062210"
          },
          {
            "city": "Santa Cruz de Tenerife",
            "country": "España",
            "lat": 28.4636,
            "lng": -16.2518,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Santa Cruz de Tenerife, España",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062206"
          },
          {
            "city": "Sevilla",
            "country": "España",
            "lat": 37.3891,
            "lng": -5.9845,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Sevilla, España",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "062208"
          },
          {
            "city": "Valencia",
            "country": "España",
            "lat": 39.4699,
            "lng": -0.3763,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Valencia, España",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062209"
          },
          {
            "city": "Vigo",
            "country": "España",
            "lat": 42.2406,
            "lng": -8.7207,
            "phone": "+34 91 562 9022",
            "address": "Consulado del Perú en Vigo, España",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067610"
          }
        ]
      },
      {
        "name": "Serbia",
        "code": "RS",
        "flag": "🇷🇸",
        "continentId": "europa",
        "cities": [
          {
            "city": "Belgrado",
            "country": "Serbia",
            "lat": 44.7866,
            "lng": 20.4489,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Belgrado, Serbia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "066701"
          }
        ]
      },
      {
        "name": "Alemania",
        "code": "DE",
        "flag": "🇩🇪",
        "continentId": "europa",
        "cities": [
          {
            "city": "Berlín",
            "country": "Alemania",
            "lat": 52.52,
            "lng": 13.405,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Berlín, Alemania",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "060101"
          },
          {
            "city": "Bremen",
            "country": "Alemania",
            "lat": 53.0793,
            "lng": 8.8017,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Bremen, Alemania",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060105"
          },
          {
            "city": "Dusseldorf",
            "country": "Alemania",
            "lat": 51.2277,
            "lng": 6.7735,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Dusseldorf, Alemania",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060106"
          },
          {
            "city": "Frankfurt",
            "country": "Alemania",
            "lat": 50.1109,
            "lng": 8.6821,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Frankfurt, Alemania",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060102"
          },
          {
            "city": "Hamburgo",
            "country": "Alemania",
            "lat": 53.5511,
            "lng": 9.9937,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Hamburgo, Alemania",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060103"
          },
          {
            "city": "Hannover",
            "country": "Alemania",
            "lat": 52.3759,
            "lng": 9.732,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Hannover, Alemania",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060107"
          },
          {
            "city": "Leipzig",
            "country": "Alemania",
            "lat": 51.3397,
            "lng": 12.3731,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Leipzig, Alemania",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067631"
          },
          {
            "city": "Munich",
            "country": "Alemania",
            "lat": 48.1351,
            "lng": 11.582,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Munich, Alemania",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "060108"
          }
        ]
      },
      {
        "name": "Suiza",
        "code": "CH",
        "flag": "🇨🇭",
        "continentId": "europa",
        "cities": [
          {
            "city": "Berna",
            "country": "Suiza",
            "lat": 46.948,
            "lng": 7.4474,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Berna, Suiza",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "066205"
          },
          {
            "city": "Ginebra",
            "country": "Suiza",
            "lat": 46.2044,
            "lng": 6.1432,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Ginebra, Suiza",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "066201"
          }
        ]
      },
      {
        "name": "Suecia",
        "code": "SE",
        "flag": "🇸🇪",
        "continentId": "europa",
        "cities": [
          {
            "city": "Boras",
            "country": "Suecia",
            "lat": 57.721,
            "lng": 12.9401,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Boras, Suecia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "066101"
          },
          {
            "city": "Estocolmo",
            "country": "Suecia",
            "lat": 59.3293,
            "lng": 18.0686,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Estocolmo, Suecia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "066102"
          },
          {
            "city": "Malmo",
            "country": "Suecia",
            "lat": 55.605,
            "lng": 13.0038,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Malmo, Suecia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "066103"
          }
        ]
      },
      {
        "name": "Rumanía",
        "code": "RO",
        "flag": "🇷🇴",
        "continentId": "europa",
        "cities": [
          {
            "city": "Bucarest",
            "country": "Rumanía",
            "lat": 44.4268,
            "lng": 26.1025,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Bucarest, Rumanía",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "065801"
          },
          {
            "city": "Timisoara",
            "country": "Rumanía",
            "lat": 45.7537,
            "lng": 21.2257,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Timisoara, Rumanía",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067615"
          }
        ]
      },
      {
        "name": "Hungría",
        "code": "HU",
        "flag": "🇭🇺",
        "continentId": "europa",
        "cities": [
          {
            "city": "Budapest",
            "country": "Hungría",
            "lat": 47.4979,
            "lng": 19.0402,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Budapest, Hungría",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "063001"
          }
        ]
      },
      {
        "name": "Francia",
        "code": "FR",
        "flag": "🇫🇷",
        "continentId": "europa",
        "cities": [
          {
            "city": "Burdeos",
            "country": "Francia",
            "lat": 44.8378,
            "lng": -0.5792,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Burdeos, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062506"
          },
          {
            "city": "El Havre",
            "country": "Francia",
            "lat": 49.4944,
            "lng": 0.1079,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en El Havre, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062507"
          },
          {
            "city": "Estrasburgo",
            "country": "Francia",
            "lat": 48.5734,
            "lng": 7.7521,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Estrasburgo, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062502"
          },
          {
            "city": "Lyon",
            "country": "Francia",
            "lat": 45.764,
            "lng": 4.8357,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Lyon, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062505"
          },
          {
            "city": "Marsella",
            "country": "Francia",
            "lat": 43.2965,
            "lng": 5.3698,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Marsella, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062503"
          },
          {
            "city": "Mónaco",
            "country": "Francia",
            "lat": 43.7384,
            "lng": 7.4246,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Mónaco, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062508"
          },
          {
            "city": "Niza",
            "country": "Francia",
            "lat": 43.7102,
            "lng": 7.262,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Niza, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062504"
          },
          {
            "city": "París",
            "country": "Francia",
            "lat": 48.8566,
            "lng": 2.3522,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en París, Francia",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062501"
          },
          {
            "city": "Toulouse",
            "country": "Francia",
            "lat": 43.6047,
            "lng": 1.4442,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Toulouse, Francia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062509"
          }
        ]
      },
      {
        "name": "Dinamarca",
        "code": "DK",
        "flag": "🇩🇰",
        "continentId": "europa",
        "cities": [
          {
            "city": "Copenhague",
            "country": "Dinamarca",
            "lat": 55.6761,
            "lng": 12.5683,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Copenhague, Dinamarca",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "061801"
          }
        ]
      },
      {
        "name": "Irlanda",
        "code": "IE",
        "flag": "🇮🇪",
        "continentId": "europa",
        "cities": [
          {
            "city": "Dublín",
            "country": "Irlanda",
            "lat": 53.3498,
            "lng": -6.2603,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Dublín, Irlanda",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "063301"
          }
        ]
      },
      {
        "name": "Italia",
        "code": "IT",
        "flag": "🇮🇹",
        "continentId": "europa",
        "cities": [
          {
            "city": "Florencia",
            "country": "Italia",
            "lat": 43.7696,
            "lng": 11.2558,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Florencia, Italia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "063103"
          },
          {
            "city": "Génova",
            "country": "Italia",
            "lat": 44.4056,
            "lng": 8.9463,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Génova, Italia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "063106"
          },
          {
            "city": "Milán",
            "country": "Italia",
            "lat": 45.4642,
            "lng": 9.19,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Milán, Italia",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "063101"
          },
          {
            "city": "Nápoles",
            "country": "Italia",
            "lat": 40.8518,
            "lng": 14.2681,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Nápoles, Italia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063104"
          },
          {
            "city": "Perugia",
            "country": "Italia",
            "lat": 43.1107,
            "lng": 12.3908,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Perugia, Italia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067602"
          },
          {
            "city": "Roma",
            "country": "Italia",
            "lat": 41.9028,
            "lng": 12.4964,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Roma, Italia",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "063102"
          },
          {
            "city": "Trieste",
            "country": "Italia",
            "lat": 45.6495,
            "lng": 13.7768,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Trieste, Italia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063107"
          },
          {
            "city": "Turín",
            "country": "Italia",
            "lat": 45.0703,
            "lng": 7.6869,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Turín, Italia",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "063105"
          }
        ]
      },
      {
        "name": "Finlandia",
        "code": "FI",
        "flag": "🇫🇮",
        "continentId": "europa",
        "cities": [
          {
            "city": "Helsinki",
            "country": "Finlandia",
            "lat": 60.1699,
            "lng": 24.9384,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Helsinki, Finlandia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "062401"
          },
          {
            "city": "Turku",
            "country": "Finlandia",
            "lat": 60.4518,
            "lng": 22.2666,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Turku, Finlandia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067502"
          }
        ]
      },
      {
        "name": "Ucrania",
        "code": "UA",
        "flag": "🇺🇦",
        "continentId": "europa",
        "cities": [
          {
            "city": "Kiev",
            "country": "Ucrania",
            "lat": 50.4501,
            "lng": 30.5234,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Kiev, Ucrania",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "066901"
          }
        ]
      },
      {
        "name": "Malta",
        "code": "MT",
        "flag": "🇲🇹",
        "continentId": "europa",
        "cities": [
          {
            "city": "La Valetta",
            "country": "Malta",
            "lat": 35.8989,
            "lng": 14.5146,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en La Valetta, Malta",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064401"
          }
        ]
      },
      {
        "name": "Chipre",
        "code": "CY",
        "flag": "🇨🇾",
        "continentId": "europa",
        "cities": [
          {
            "city": "Limassol",
            "country": "Chipre",
            "lat": 34.7071,
            "lng": 33.0226,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Limassol, Chipre",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065701"
          },
          {
            "city": "Nicosia",
            "country": "Chipre",
            "lat": 35.1856,
            "lng": 33.3823,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Nicosia, Chipre",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065702"
          }
        ]
      },
      {
        "name": "Portugal",
        "code": "PT",
        "flag": "🇵🇹",
        "continentId": "europa",
        "cities": [
          {
            "city": "Lisboa",
            "country": "Portugal",
            "lat": 38.7223,
            "lng": -9.1393,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Lisboa, Portugal",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "065501"
          },
          {
            "city": "Porto",
            "country": "Portugal",
            "lat": 41.1579,
            "lng": -8.6291,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Porto, Portugal",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065503"
          }
        ]
      },
      {
        "name": "Gran Bretaña",
        "code": "GB",
        "flag": "🇬🇧",
        "continentId": "europa",
        "cities": [
          {
            "city": "Londres",
            "country": "Gran Bretaña",
            "lat": 51.5074,
            "lng": -0.1278,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Londres, Gran Bretaña",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "062602"
          }
        ]
      },
      {
        "name": "Luxemburgo",
        "code": "LU",
        "flag": "🇱🇺",
        "continentId": "europa",
        "cities": [
          {
            "city": "Luxemburgo",
            "country": "Luxemburgo",
            "lat": 49.6116,
            "lng": 6.1319,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Luxemburgo, Luxemburgo",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064201"
          }
        ]
      },
      {
        "name": "Bielorrusia",
        "code": "BY",
        "flag": "🇧🇾",
        "continentId": "europa",
        "cities": [
          {
            "city": "Minsk",
            "country": "Bielorrusia",
            "lat": 53.9006,
            "lng": 27.559,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Minsk, Bielorrusia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067634"
          }
        ]
      },
      {
        "name": "Rusia",
        "code": "RU",
        "flag": "🇷🇺",
        "continentId": "europa",
        "cities": [
          {
            "city": "Moscúú",
            "country": "Rusia",
            "lat": 0.0,
            "lng": 0.0,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Moscúú, Rusia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "067101"
          },
          {
            "city": "San Petesburgo",
            "country": "Rusia",
            "lat": 59.9311,
            "lng": 30.3609,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en San Petesburgo, Rusia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067633"
          }
        ]
      },
      {
        "name": "Noruega",
        "code": "NO",
        "flag": "🇳🇴",
        "continentId": "europa",
        "cities": [
          {
            "city": "Oslo",
            "country": "Noruega",
            "lat": 59.9139,
            "lng": 10.7522,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Oslo, Noruega",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "064901"
          }
        ]
      },
      {
        "name": "República Checa",
        "code": "CZ",
        "flag": "🇨🇿",
        "continentId": "europa",
        "cities": [
          {
            "city": "Praga",
            "country": "República Checa",
            "lat": 50.0755,
            "lng": 14.4378,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Praga, República Checa",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": false,
            "codLocal": "065601"
          }
        ]
      },
      {
        "name": "República de Islandia",
        "code": "IS",
        "flag": "🇮🇸",
        "continentId": "europa",
        "cities": [
          {
            "city": "Reykjavik",
            "country": "República de Islandia",
            "lat": 64.1466,
            "lng": -21.9426,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Reykjavik, República de Islandia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063401"
          }
        ]
      },
      {
        "name": "Austria",
        "code": "AT",
        "flag": "🇦🇹",
        "continentId": "europa",
        "cities": [
          {
            "city": "Salzburgo",
            "country": "Austria",
            "lat": 47.8095,
            "lng": 13.055,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Salzburgo, Austria",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060501"
          },
          {
            "city": "Viena",
            "country": "Austria",
            "lat": 48.2082,
            "lng": 16.3738,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Viena, Austria",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": true,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "060502"
          }
        ]
      },
      {
        "name": "Polonia",
        "code": "PL",
        "flag": "🇵🇱",
        "continentId": "europa",
        "cities": [
          {
            "city": "Varsovia",
            "country": "Polonia",
            "lat": 52.2297,
            "lng": 21.0122,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Varsovia, Polonia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "065401"
          }
        ]
      },
      {
        "name": "Croacia",
        "code": "HR",
        "flag": "🇭🇷",
        "continentId": "europa",
        "cities": [
          {
            "city": "Zagreb",
            "country": "Croacia",
            "lat": 45.815,
            "lng": 15.9819,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Zagreb, Croacia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061401"
          }
        ]
      }
    ]
  },
  {
    "id": "asia",
    "name": "Asia",
    "color": "#ec4899",
    "hexColor": 0xec4899,
    "textColor": "text-pink-400",
    "borderColor": "border-pink-500",
    "centerLat": 30,
    "centerLng": 105,
    "description": "Cobertura consular y trámites de DNI en Asia Oriental y Medio Oriente.",
    "countries": [
      {
        "name": "Jordania",
        "code": "JO",
        "flag": "🇯🇴",
        "continentId": "asia",
        "cities": [
          {
            "city": "Amman",
            "country": "Jordania",
            "lat": 31.9454,
            "lng": 35.9284,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Amman, Jordania",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063801"
          }
        ]
      },
      {
        "name": "Tailandia",
        "code": "TH",
        "flag": "🇹🇭",
        "continentId": "asia",
        "cities": [
          {
            "city": "Bangkok",
            "country": "Tailandia",
            "lat": 13.7563,
            "lng": 100.5018,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Bangkok, Tailandia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "066301"
          }
        ]
      },
      {
        "name": "China",
        "code": "CN",
        "flag": "🇨🇳",
        "continentId": "asia",
        "cities": [
          {
            "city": "Beijing- Pekín",
            "country": "China",
            "lat": 0.0,
            "lng": 0.0,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Beijing- Pekín, China",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "061701"
          },
          {
            "city": "Guangzhou",
            "country": "China",
            "lat": 23.1291,
            "lng": 113.2644,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Guangzhou, China",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067624"
          },
          {
            "city": "Hong Kong",
            "country": "China",
            "lat": 22.3193,
            "lng": 114.1694,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Hong Kong, China",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062601"
          },
          {
            "city": "Shanghai",
            "country": "China",
            "lat": 31.2304,
            "lng": 121.4737,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Shanghai, China",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061702"
          }
        ]
      },
      {
        "name": "Líbano",
        "code": "LB",
        "flag": "🇱🇧",
        "continentId": "asia",
        "cities": [
          {
            "city": "Beirut",
            "country": "Líbano",
            "lat": 33.8938,
            "lng": 35.5018,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Beirut, Líbano",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064001"
          }
        ]
      },
      {
        "name": "Qatar",
        "code": "QA",
        "flag": "🇶🇦",
        "continentId": "asia",
        "cities": [
          {
            "city": "Doha",
            "country": "Qatar",
            "lat": 25.2854,
            "lng": 51.531,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Doha, Qatar",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067617"
          }
        ]
      },
      {
        "name": "Emiratos Árabes Unidos",
        "code": "AE",
        "flag": "🇦🇪",
        "continentId": "asia",
        "cities": [
          {
            "city": "Dubai",
            "country": "Emiratos Árabes Unidos",
            "lat": 25.2048,
            "lng": 55.2708,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Dubai, Emiratos Árabes Unidos",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067618"
          }
        ]
      },
      {
        "name": "Israel",
        "code": "IL",
        "flag": "🇮🇱",
        "continentId": "asia",
        "cities": [
          {
            "city": "Haifa",
            "country": "Israel",
            "lat": 32.794,
            "lng": 34.9896,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Haifa, Israel",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063501"
          },
          {
            "city": "Tel Aviv",
            "country": "Israel",
            "lat": 32.0853,
            "lng": 34.7818,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Tel Aviv, Israel",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063502"
          }
        ]
      },
      {
        "name": "Vietnam",
        "code": "VN",
        "flag": "🇻🇳",
        "continentId": "asia",
        "cities": [
          {
            "city": "Hanoi",
            "country": "Vietnam",
            "lat": 21.0285,
            "lng": 105.8542,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Hanoi, Vietnam",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067622"
          }
        ]
      },
      {
        "name": "Indonesia",
        "code": "ID",
        "flag": "🇮🇩",
        "continentId": "asia",
        "cities": [
          {
            "city": "Jakarta",
            "country": "Indonesia",
            "lat": -6.2088,
            "lng": 106.8456,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Jakarta, Indonesia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "063201"
          }
        ]
      },
      {
        "name": "Malasia",
        "code": "MY",
        "flag": "🇲🇾",
        "continentId": "asia",
        "cities": [
          {
            "city": "Kuala Lumpur",
            "country": "Malasia",
            "lat": 3.139,
            "lng": 101.6869,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Kuala Lumpur, Malasia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064301"
          }
        ]
      },
      {
        "name": "Kuwait",
        "code": "KW",
        "flag": "KW",
        "continentId": "asia",
        "cities": [
          {
            "city": "Kuwait",
            "country": "Kuwait",
            "lat": 29.3759,
            "lng": 47.9774,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Kuwait, Kuwait",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067619"
          }
        ]
      },
      {
        "name": "Japón",
        "code": "JP",
        "flag": "🇯🇵",
        "continentId": "asia",
        "cities": [
          {
            "city": "Kyoto",
            "country": "Japón",
            "lat": 35.0116,
            "lng": 135.7681,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Kyoto, Japón",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063702"
          },
          {
            "city": "Nagoya",
            "country": "Japón",
            "lat": 35.1815,
            "lng": 136.9066,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Nagoya, Japón",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "067505"
          },
          {
            "city": "Tokio",
            "country": "Japón",
            "lat": 35.6762,
            "lng": 139.6503,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Tokio, Japón",
            "sioActive": true,
            "sioCaptureMode": "CAPTURA EN VIVO",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "063704"
          }
        ]
      },
      {
        "name": "Filipinas",
        "code": "PH",
        "flag": "🇵🇭",
        "continentId": "asia",
        "cities": [
          {
            "city": "Manila",
            "country": "Filipinas",
            "lat": 14.5995,
            "lng": 120.9842,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Manila, Filipinas",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067501"
          }
        ]
      },
      {
        "name": "India",
        "code": "IN",
        "flag": "🇮🇳",
        "continentId": "asia",
        "cities": [
          {
            "city": "Mumbay (ex Bombay)",
            "country": "India",
            "lat": 19.076,
            "lng": 72.8777,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Mumbay (ex Bombay), India",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063602"
          },
          {
            "city": "Nueva Delhi",
            "country": "India",
            "lat": 28.6139,
            "lng": 77.209,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Nueva Delhi, India",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "063601"
          }
        ]
      },
      {
        "name": "Arabia Saudita",
        "code": "SA",
        "flag": "🇸🇦",
        "continentId": "asia",
        "cities": [
          {
            "city": "Riad",
            "country": "Arabia Saudita",
            "lat": 24.7136,
            "lng": 46.6753,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Riad, Arabia Saudita",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067620"
          }
        ]
      },
      {
        "name": "Corea",
        "code": "KR",
        "flag": "🇰🇷",
        "continentId": "asia",
        "cities": [
          {
            "city": "Seúl",
            "country": "Corea",
            "lat": 37.5665,
            "lng": 126.978,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Seúl, Corea",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "061201"
          }
        ]
      },
      {
        "name": "Singapur",
        "code": "SG",
        "flag": "🇸🇬",
        "continentId": "asia",
        "cities": [
          {
            "city": "Singapur",
            "country": "Singapur",
            "lat": 1.3521,
            "lng": 103.8198,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Singapur, Singapur",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065901"
          }
        ]
      }
    ]
  },
  {
    "id": "africa",
    "name": "África",
    "color": "#eab308",
    "hexColor": 0xeab308,
    "textColor": "text-yellow-400",
    "borderColor": "border-yellow-500",
    "centerLat": 5,
    "centerLng": 20,
    "description": "Atención consular y representación diplomática en el continente africano.",
    "countries": [
      {
        "name": "Ghana",
        "code": "GH",
        "flag": "🇬🇭",
        "continentId": "africa",
        "cities": [
          {
            "city": "Acra",
            "country": "Ghana",
            "lat": 5.6037,
            "lng": -0.187,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Acra, Ghana",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067623"
          }
        ]
      },
      {
        "name": "Marruecos",
        "code": "MA",
        "flag": "🇲🇦",
        "continentId": "africa",
        "cities": [
          {
            "city": "Agadir",
            "country": "Marruecos",
            "lat": 30.4278,
            "lng": -9.5981,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Agadir, Marruecos",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064501"
          },
          {
            "city": "Casablanca",
            "country": "Marruecos",
            "lat": 33.5731,
            "lng": -7.5898,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Casablanca, Marruecos",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064502"
          },
          {
            "city": "Rabat",
            "country": "Marruecos",
            "lat": 34.0209,
            "lng": -6.8416,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Rabat, Marruecos",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": true,
            "ciudadanoDigitalActive": true,
            "codLocal": "064503"
          },
          {
            "city": "Tanger",
            "country": "Marruecos",
            "lat": 35.7595,
            "lng": -5.834,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Tanger, Marruecos",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "064504"
          }
        ]
      },
      {
        "name": "Egipto",
        "code": "EG",
        "flag": "🇪🇬",
        "continentId": "africa",
        "cities": [
          {
            "city": "Alejandría",
            "country": "Egipto",
            "lat": 31.2001,
            "lng": 29.9187,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Alejandría, Egipto",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062001"
          },
          {
            "city": "El Cairo",
            "country": "Egipto",
            "lat": 30.0444,
            "lng": 31.2357,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en El Cairo, Egipto",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062002"
          }
        ]
      },
      {
        "name": "Argelia",
        "code": "DZ",
        "flag": "🇩🇿",
        "continentId": "africa",
        "cities": [
          {
            "city": "Argel",
            "country": "Argelia",
            "lat": 36.7538,
            "lng": 3.0588,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Argel, Argelia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "062005"
          }
        ]
      },
      {
        "name": "Kenia",
        "code": "KE",
        "flag": "🇰🇪",
        "continentId": "africa",
        "cities": [
          {
            "city": "Nairobi-Kenia",
            "country": "Kenia",
            "lat": -1.2921,
            "lng": 36.8219,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Nairobi-Kenia, Kenia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "063901"
          }
        ]
      },
      {
        "name": "Sudáfrica",
        "code": "ZA",
        "flag": "🇿🇦",
        "continentId": "africa",
        "cities": [
          {
            "city": "Pretoria",
            "country": "Sudáfrica",
            "lat": -25.7479,
            "lng": 28.2293,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Pretoria, Sudáfrica",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": true,
            "codLocal": "066003"
          }
        ]
      },
      {
        "name": "Túnez",
        "code": "TN",
        "flag": "🇹🇳",
        "continentId": "africa",
        "cities": [
          {
            "city": "Túnez",
            "country": "Túnez",
            "lat": 36.8065,
            "lng": 10.1815,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Túnez, Túnez",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067401"
          }
        ]
      }
    ]
  },
  {
    "id": "oceania",
    "name": "Oceanía",
    "color": "#8b5cf6",
    "hexColor": 0x8b5cf6,
    "textColor": "text-purple-400",
    "borderColor": "border-purple-500",
    "centerLat": -25,
    "centerLng": 135,
    "description": "Atención consular para residentes en Australia y Nueva Zelanda.",
    "countries": [
      {
        "name": "Nueva Zelanda",
        "code": "NZ",
        "flag": "🇳🇿",
        "continentId": "oceania",
        "cities": [
          {
            "city": "Auckland",
            "country": "Nueva Zelanda",
            "lat": -36.8485,
            "lng": 174.7633,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Auckland, Nueva Zelanda",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065001"
          },
          {
            "city": "Christchurch",
            "country": "Nueva Zelanda",
            "lat": -43.5321,
            "lng": 172.6362,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Christchurch, Nueva Zelanda",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "065002"
          },
          {
            "city": "Wellington",
            "country": "Nueva Zelanda",
            "lat": -41.2865,
            "lng": 174.7762,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Wellington, Nueva Zelanda",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067601"
          }
        ]
      },
      {
        "name": "Australia",
        "code": "AU",
        "flag": "🇦🇺",
        "continentId": "oceania",
        "cities": [
          {
            "city": "Brisbane",
            "country": "Australia",
            "lat": -27.4698,
            "lng": 153.0251,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Brisbane, Australia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060404"
          },
          {
            "city": "Camberra",
            "country": "Australia",
            "lat": -35.2809,
            "lng": 149.13,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Camberra, Australia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060402"
          },
          {
            "city": "Melbourne",
            "country": "Australia",
            "lat": -37.8136,
            "lng": 144.9631,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Melbourne, Australia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060403"
          },
          {
            "city": "Perth",
            "country": "Australia",
            "lat": -31.9505,
            "lng": 115.8605,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Perth, Australia",
            "sioActive": false,
            "sioCaptureMode": "MANUAL",
            "sioDeliveryMethod": "Valija diplomática",
            "biofacialActive": false,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "067612"
          },
          {
            "city": "Sidney",
            "country": "Australia",
            "lat": -33.8688,
            "lng": 151.2093,
            "phone": "+51 1 315 2700",
            "address": "Consulado del Perú en Sidney, Australia",
            "sioActive": true,
            "sioCaptureMode": "SEMIAUTOMÁTICA",
            "sioDeliveryMethod": "DHL - SEMANAL",
            "biofacialActive": true,
            "sircmActive": false,
            "ciudadanoDigitalActive": false,
            "codLocal": "060401"
          }
        ]
      }
    ]
  }
];

export const ALL_LOCATIONS_DATA: LocationOption[] = [
  {
    "city": "Acra",
    "country": "Ghana",
    "continentId": "africa",
    "codLocal": "067623",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Acra, Ghana",
    "email": "consulperu-acra@rree.gob.pe",
    "photo": "ghana.png",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 5.6037,
    "lng": -0.187,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Agadir",
    "country": "Marruecos",
    "continentId": "africa",
    "codLocal": "064501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Agadir, Marruecos",
    "email": "consulperu-agadir@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 30.4278,
    "lng": -9.5981,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Alejandría",
    "country": "Egipto",
    "continentId": "africa",
    "codLocal": "062001",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Alejandría, Egipto",
    "email": "consulperu-alejandría@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 31.2001,
    "lng": 29.9187,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Amberes",
    "country": "Bélgica",
    "continentId": "europa",
    "codLocal": "060601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Amberes, Bélgica",
    "email": "consulperu-amberes@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 51.2194,
    "lng": 4.4025,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Amman",
    "country": "Jordania",
    "continentId": "asia",
    "codLocal": "063801",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Amman, Jordania",
    "email": "consulperu-amman@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 31.9454,
    "lng": 35.9284,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Amsterdam",
    "country": "Holanda",
    "continentId": "europa",
    "codLocal": "065101",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Amsterdam, Holanda",
    "email": "consulperu-amsterdam@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 52.3676,
    "lng": 4.9041,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Ankara",
    "country": "Turquía",
    "continentId": "europa",
    "codLocal": "067613",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Ankara, Turquía",
    "email": "consulperu-ankara@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 39.9334,
    "lng": 32.8597,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Antofagasta",
    "country": "Chile",
    "continentId": "america",
    "codLocal": "067644",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Antofagasta, Chile",
    "email": "consulperu-antofagast@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -23.6509,
    "lng": -70.3975,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Argel",
    "country": "Argelia",
    "continentId": "africa",
    "codLocal": "062005",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Argel, Argelia",
    "email": "consulperu-argel@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 36.7538,
    "lng": 3.0588,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Arica",
    "country": "Chile",
    "continentId": "america",
    "codLocal": "061601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Arica, Chile",
    "email": "consulperu-arica@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -18.4783,
    "lng": -70.3126,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Asunción",
    "country": "Paraguay",
    "continentId": "america",
    "codLocal": "065301",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Asunción, Paraguay",
    "email": "consulperu-asunción@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -25.2637,
    "lng": -57.5759,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Atenas",
    "country": "Grecia",
    "continentId": "europa",
    "codLocal": "062701",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Atenas, Grecia",
    "email": "consulperu-atenas@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 37.9838,
    "lng": 23.7275,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Atlanta",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062310",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Atlanta, Estados Unidos",
    "email": "consulperu-atlanta@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 33.749,
    "lng": -84.388,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Auckland",
    "country": "Nueva Zelanda",
    "continentId": "oceania",
    "codLocal": "065001",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Auckland, Nueva Zelanda",
    "email": "consulperu-auckland@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -36.8485,
    "lng": 174.7633,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Bakúú",
    "country": "Azerbaiyán",
    "continentId": "europa",
    "codLocal": "067627",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Bakúú, Azerbaiyán",
    "email": "consulperu-bakúú@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 0.0,
    "lng": 0.0,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Bangkok",
    "country": "Tailandia",
    "continentId": "asia",
    "codLocal": "066301",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Bangkok, Tailandia",
    "email": "consulperu-bangkok@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 13.7563,
    "lng": 100.5018,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Barcelona",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062201",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Barcelona, España",
    "email": "consulperu-barcelona@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 41.3851,
    "lng": 2.1734,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Barranquilla",
    "country": "Colombia",
    "continentId": "america",
    "codLocal": "061103",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Barranquilla, Colombia",
    "email": "consulperu-barranquil@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 10.9685,
    "lng": -74.7813,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Beijing- Pekín",
    "country": "China",
    "continentId": "asia",
    "codLocal": "061701",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Beijing- Pekín, China",
    "email": "consulperu-beijing-pe@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 0.0,
    "lng": 0.0,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Beirut",
    "country": "Líbano",
    "continentId": "asia",
    "codLocal": "064001",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Beirut, Líbano",
    "email": "consulperu-beirut@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 33.8938,
    "lng": 35.5018,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Belgrado",
    "country": "Serbia",
    "continentId": "europa",
    "codLocal": "066701",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Belgrado, Serbia",
    "email": "consulperu-belgrado@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 44.7866,
    "lng": 20.4489,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Belo Horizonte",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "067629",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Belo Horizonte, Brasil",
    "email": "consulperu-belohorizo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -19.9167,
    "lng": -43.9345,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Berlín",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "060101",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Berlín, Alemania",
    "email": "consulperu-berlín@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 52.52,
    "lng": 13.405,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Berna",
    "country": "Suiza",
    "continentId": "europa",
    "codLocal": "066205",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Berna, Suiza",
    "email": "consulperu-berna@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 46.948,
    "lng": 7.4474,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Bilbao",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062203",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Bilbao, España",
    "email": "consulperu-bilbao@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 43.263,
    "lng": -2.935,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Bogotáá",
    "country": "Colombia",
    "continentId": "america",
    "codLocal": "061101",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Bogotáá, Colombia",
    "email": "consulperu-bogotáá@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 0.0,
    "lng": 0.0,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Boras",
    "country": "Suecia",
    "continentId": "europa",
    "codLocal": "066101",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Boras, Suecia",
    "email": "consulperu-boras@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 57.721,
    "lng": 12.9401,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Boston",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062311",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Boston, Estados Unidos",
    "email": "consulperu-boston@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 42.3601,
    "lng": -71.0589,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Brasilia",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060804",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Brasilia, Brasil",
    "email": "consulperu-brasilia@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -15.8267,
    "lng": -47.9218,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Bremen",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "060105",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Bremen, Alemania",
    "email": "consulperu-bremen@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 53.0793,
    "lng": 8.8017,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Brisbane",
    "country": "Australia",
    "continentId": "oceania",
    "codLocal": "060404",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Brisbane, Australia",
    "email": "consulperu-brisbane@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -27.4698,
    "lng": 153.0251,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Bruselas",
    "country": "Bélgica",
    "continentId": "europa",
    "codLocal": "060602",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Bruselas, Bélgica",
    "email": "consulperu-bruselas@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 50.8503,
    "lng": 4.3517,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Bucarest",
    "country": "Rumanía",
    "continentId": "europa",
    "codLocal": "065801",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Bucarest, Rumanía",
    "email": "consulperu-bucarest@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 44.4268,
    "lng": 26.1025,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Budapest",
    "country": "Hungría",
    "continentId": "europa",
    "codLocal": "063001",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Budapest, Hungría",
    "email": "consulperu-budapest@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 47.4979,
    "lng": 19.0402,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Buenos Aires",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "060301",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Buenos Aires, Argentina",
    "email": "consulperu-buenosaire@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -34.6037,
    "lng": -58.3816,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Burdeos",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062506",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Burdeos, Francia",
    "email": "consulperu-burdeos@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 44.8378,
    "lng": -0.5792,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Cali",
    "country": "Colombia",
    "continentId": "america",
    "codLocal": "061104",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Cali, Colombia",
    "email": "consulperu-cali@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 3.4516,
    "lng": -76.532,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Camberra",
    "country": "Australia",
    "continentId": "oceania",
    "codLocal": "060402",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Camberra, Australia",
    "email": "consulperu-camberra@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -35.2809,
    "lng": 149.13,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Caracas",
    "country": "Venezuela",
    "continentId": "america",
    "codLocal": "066601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Caracas, Venezuela",
    "email": "consulperu-caracas@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 10.4806,
    "lng": -66.9036,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Cartagena de Indias",
    "country": "Colombia",
    "continentId": "america",
    "codLocal": "061106",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Cartagena de Indias, Colombia",
    "email": "consulperu-cartagenad@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 10.391,
    "lng": -75.4794,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Casablanca",
    "country": "Marruecos",
    "continentId": "africa",
    "codLocal": "064502",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Casablanca, Marruecos",
    "email": "consulperu-casablanca@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 33.5731,
    "lng": -7.5898,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Cayena",
    "country": "Guyana Francesa",
    "continentId": "america",
    "codLocal": "067201",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Cayena, Guyana Francesa",
    "email": "consulperu-cayena@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 4.9372,
    "lng": -52.326,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Chicago",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062301",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Chicago, Estados Unidos",
    "email": "consulperu-chicago@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 41.8781,
    "lng": -87.6298,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Christchurch",
    "country": "Nueva Zelanda",
    "continentId": "oceania",
    "codLocal": "065002",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Christchurch, Nueva Zelanda",
    "email": "consulperu-christchur@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -43.5321,
    "lng": 172.6362,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Cochabamba",
    "country": "Bolivia",
    "continentId": "america",
    "codLocal": "060703",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Cochabamba, Bolivia",
    "email": "consulperu-cochabamba@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -17.3895,
    "lng": -66.1568,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Colón",
    "country": "Panamáá",
    "continentId": "america",
    "codLocal": "065202",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Colón, Panamáá",
    "email": "consulperu-colón@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 9.3598,
    "lng": -79.9014,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Copenhague",
    "country": "Dinamarca",
    "continentId": "europa",
    "codLocal": "061801",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Copenhague, Dinamarca",
    "email": "consulperu-copenhague@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 55.6761,
    "lng": 12.5683,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Cordoba",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "060302",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Cordoba, Argentina",
    "email": "consulperu-cordoba@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -31.4201,
    "lng": -64.1888,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Corrientes",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "060306",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Corrientes, Argentina",
    "email": "consulperu-corrientes@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -27.4698,
    "lng": -58.8306,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Cuenca",
    "country": "Ecuador",
    "continentId": "america",
    "codLocal": "067628",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Cuenca, Ecuador",
    "email": "consulperu-cuenca@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -2.9001,
    "lng": -79.0059,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Curitiba",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060807",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Curitiba, Brasil",
    "email": "consulperu-curitiba@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -25.4284,
    "lng": -49.2733,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Dallas",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062318",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Dallas, Estados Unidos",
    "email": "consulperu-dallas@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 32.7767,
    "lng": -96.797,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Denver",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062319",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Denver, Estados Unidos",
    "email": "consulperu-denver@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 39.7392,
    "lng": -104.9903,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Doha",
    "country": "Qatar",
    "continentId": "asia",
    "codLocal": "067617",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Doha, Qatar",
    "email": "consulperu-doha@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 25.2854,
    "lng": 51.531,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Dubai",
    "country": "Emiratos Árabes Unidos",
    "continentId": "asia",
    "codLocal": "067618",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Dubai, Emiratos Árabes Unidos",
    "email": "consulperu-dubai@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 25.2048,
    "lng": 55.2708,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Dublín",
    "country": "Irlanda",
    "continentId": "europa",
    "codLocal": "063301",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Dublín, Irlanda",
    "email": "consulperu-dublín@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 53.3498,
    "lng": -6.2603,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Dusseldorf",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "060106",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Dusseldorf, Alemania",
    "email": "consulperu-dusseldorf@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 51.2277,
    "lng": 6.7735,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "El Cairo",
    "country": "Egipto",
    "continentId": "africa",
    "codLocal": "062002",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en El Cairo, Egipto",
    "email": "consulperu-elcairo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 30.0444,
    "lng": 31.2357,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "El Havre",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062507",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en El Havre, Francia",
    "email": "consulperu-elhavre@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 49.4944,
    "lng": 0.1079,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Estambul",
    "country": "Turquía",
    "continentId": "europa",
    "codLocal": "066401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Estambul, Turquía",
    "email": "consulperu-estambul@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 41.0082,
    "lng": 28.9784,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Estocolmo",
    "country": "Suecia",
    "continentId": "europa",
    "codLocal": "066102",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Estocolmo, Suecia",
    "email": "consulperu-estocolmo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 59.3293,
    "lng": 18.0686,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Estrasburgo",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062502",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Estrasburgo, Francia",
    "email": "consulperu-estrasburg@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 48.5734,
    "lng": 7.7521,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Florencia",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "063103",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Florencia, Italia",
    "email": "consulperu-florencia@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 43.7696,
    "lng": 11.2558,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Fortaleza",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "067626",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Fortaleza, Brasil",
    "email": "consulperu-fortaleza@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -3.7172,
    "lng": -38.5433,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Frankfurt",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "060102",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Frankfurt, Alemania",
    "email": "consulperu-frankfurt@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 50.1109,
    "lng": 8.6821,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Gante",
    "country": "Bélgica",
    "continentId": "europa",
    "codLocal": "060603",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Gante, Bélgica",
    "email": "consulperu-gante@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 51.0543,
    "lng": 3.7174,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Génova",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "063106",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Génova, Italia",
    "email": "consulperu-génova@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 44.4056,
    "lng": 8.9463,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Ginebra",
    "country": "Suiza",
    "continentId": "europa",
    "codLocal": "066201",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Ginebra, Suiza",
    "email": "consulperu-ginebra@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 46.2044,
    "lng": 6.1432,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Guadalajara",
    "country": "México",
    "continentId": "america",
    "codLocal": "064602",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Guadalajara, México",
    "email": "consulperu-guadalajar@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 20.6597,
    "lng": -103.3496,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Guangzhou",
    "country": "China",
    "continentId": "asia",
    "codLocal": "067624",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Guangzhou, China",
    "email": "consulperu-guangzhou@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 23.1291,
    "lng": 113.2644,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Guatemala",
    "country": "Guatemala",
    "continentId": "america",
    "codLocal": "062800",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Guatemala, Guatemala",
    "email": "consulperu-guatemala@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 14.6349,
    "lng": -90.5069,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Guayaquil",
    "country": "Ecuador",
    "continentId": "america",
    "codLocal": "061901",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Guayaquil, Ecuador",
    "email": "consulperu-guayaquil@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -2.1709,
    "lng": -79.9224,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Haifa",
    "country": "Israel",
    "continentId": "asia",
    "codLocal": "063501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Haifa, Israel",
    "email": "consulperu-haifa@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 32.794,
    "lng": 34.9896,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Hamburgo",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "060103",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Hamburgo, Alemania",
    "email": "consulperu-hamburgo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 53.5511,
    "lng": 9.9937,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Hannover",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "060107",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Hannover, Alemania",
    "email": "consulperu-hannover@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 52.3759,
    "lng": 9.732,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Hanoi",
    "country": "Vietnam",
    "continentId": "asia",
    "codLocal": "067622",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Hanoi, Vietnam",
    "email": "consulperu-hanoi@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 21.0285,
    "lng": 105.8542,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Hartford",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062320",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Hartford, Estados Unidos",
    "email": "consulperu-hartford@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 41.7658,
    "lng": -72.6734,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Helsinki",
    "country": "Finlandia",
    "continentId": "europa",
    "codLocal": "062401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Helsinki, Finlandia",
    "email": "consulperu-helsinki@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 60.1699,
    "lng": 24.9384,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Hong Kong",
    "country": "China",
    "continentId": "asia",
    "codLocal": "062601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Hong Kong, China",
    "email": "consulperu-hongkong@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 22.3193,
    "lng": 114.1694,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Honolulu",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062312",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Honolulu, Estados Unidos",
    "email": "consulperu-honolulu@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 21.3069,
    "lng": -157.8583,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Houston",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062302",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Houston, Estados Unidos",
    "email": "consulperu-houston@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 29.7604,
    "lng": -95.3698,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Iquique",
    "country": "Chile",
    "continentId": "america",
    "codLocal": "061602",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Iquique, Chile",
    "email": "consulperu-iquique@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -20.2307,
    "lng": -70.1357,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Jakarta",
    "country": "Indonesia",
    "continentId": "asia",
    "codLocal": "063201",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Jakarta, Indonesia",
    "email": "consulperu-jakarta@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": -6.2088,
    "lng": 106.8456,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Kiev",
    "country": "Ucrania",
    "continentId": "europa",
    "codLocal": "066901",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Kiev, Ucrania",
    "email": "consulperu-kiev@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 50.4501,
    "lng": 30.5234,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Kuala Lumpur",
    "country": "Malasia",
    "continentId": "asia",
    "codLocal": "064301",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Kuala Lumpur, Malasia",
    "email": "consulperu-kualalumpu@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 3.139,
    "lng": 101.6869,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Kuwait",
    "country": "Kuwait",
    "continentId": "asia",
    "codLocal": "067619",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Kuwait, Kuwait",
    "email": "consulperu-kuwait@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 29.3759,
    "lng": 47.9774,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Kyoto",
    "country": "Japón",
    "continentId": "asia",
    "codLocal": "063702",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Kyoto, Japón",
    "email": "consulperu-kyoto@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 35.0116,
    "lng": 135.7681,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "La Habana",
    "country": "Cuba",
    "continentId": "america",
    "codLocal": "061501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en La Habana, Cuba",
    "email": "consulperu-lahabana@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 23.1136,
    "lng": -82.3666,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "La Paz",
    "country": "Bolivia",
    "continentId": "america",
    "codLocal": "060701",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en La Paz, Bolivia",
    "email": "consulperu-lapaz@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -16.5,
    "lng": -68.15,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "La Plata",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "060303",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en La Plata, Argentina",
    "email": "consulperu-laplata@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -34.9214,
    "lng": -57.9545,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "La Valetta",
    "country": "Malta",
    "continentId": "europa",
    "codLocal": "064401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en La Valetta, Malta",
    "email": "consulperu-lavaletta@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 35.8989,
    "lng": 14.5146,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Las Palmas de Gran Canaria",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062205",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Las Palmas de Gran Canaria, España",
    "email": "consulperu-laspalmasd@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 28.1235,
    "lng": -15.4363,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Leipzig",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "067631",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Leipzig, Alemania",
    "email": "consulperu-leipzig@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 51.3397,
    "lng": 12.3731,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Leticia",
    "country": "Colombia",
    "continentId": "america",
    "codLocal": "061102",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Leticia, Colombia",
    "email": "consulperu-leticia@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -4.2153,
    "lng": -69.9406,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Limassol",
    "country": "Chipre",
    "continentId": "europa",
    "codLocal": "065701",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Limassol, Chipre",
    "email": "consulperu-limassol@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 34.7071,
    "lng": 33.0226,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Lisboa",
    "country": "Portugal",
    "continentId": "europa",
    "codLocal": "065501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Lisboa, Portugal",
    "email": "consulperu-lisboa@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 38.7223,
    "lng": -9.1393,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Loja",
    "country": "Ecuador",
    "continentId": "america",
    "codLocal": "061902",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Loja, Ecuador",
    "email": "consulperu-loja@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -3.9931,
    "lng": -79.2042,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Londres",
    "country": "Gran Bretaña",
    "continentId": "europa",
    "codLocal": "062602",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Londres, Gran Bretaña",
    "email": "consulperu-londres@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 51.5074,
    "lng": -0.1278,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Los Angeles",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062303",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Los Angeles, Estados Unidos",
    "email": "consulperu-losangeles@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 34.0522,
    "lng": -118.2437,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Luxemburgo",
    "country": "Luxemburgo",
    "continentId": "europa",
    "codLocal": "064201",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Luxemburgo, Luxemburgo",
    "email": "consulperu-luxemburgo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 49.6116,
    "lng": 6.1319,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Lyon",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062505",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Lyon, Francia",
    "email": "consulperu-lyon@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 45.764,
    "lng": 4.8357,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Machala",
    "country": "Ecuador",
    "continentId": "america",
    "codLocal": "061904",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Machala, Ecuador",
    "email": "consulperu-machala@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": -3.2581,
    "lng": -79.9553,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Madrid",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062202",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Madrid, España",
    "email": "consulperu-madrid@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 40.4168,
    "lng": -3.7038,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Málaga",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062212",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Málaga, España",
    "email": "consulperu-málaga@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 36.7213,
    "lng": -4.4214,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Malmo",
    "country": "Suecia",
    "continentId": "europa",
    "codLocal": "066103",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Malmo, Suecia",
    "email": "consulperu-malmo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 55.605,
    "lng": 13.0038,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Managua",
    "country": "Nicaragua",
    "continentId": "america",
    "codLocal": "064801",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Managua, Nicaragua",
    "email": "consulperu-managua@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 12.115,
    "lng": -86.2362,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Manaos",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060801",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Manaos, Brasil",
    "email": "consulperu-manaos@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": -3.119,
    "lng": -60.0217,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Manila",
    "country": "Filipinas",
    "continentId": "asia",
    "codLocal": "067501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Manila, Filipinas",
    "email": "consulperu-manila@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 14.5995,
    "lng": 120.9842,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Mar de Plata",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "060308",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Mar de Plata, Argentina",
    "email": "consulperu-mardeplata@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -38.0055,
    "lng": -57.5562,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Marsella",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062503",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Marsella, Francia",
    "email": "consulperu-marsella@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 43.2965,
    "lng": 5.3698,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Medellín",
    "country": "Colombia",
    "continentId": "america",
    "codLocal": "061105",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Medellín, Colombia",
    "email": "consulperu-medellín@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 6.2442,
    "lng": -75.5812,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Melbourne",
    "country": "Australia",
    "continentId": "oceania",
    "codLocal": "060403",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Melbourne, Australia",
    "email": "consulperu-melbourne@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -37.8136,
    "lng": 144.9631,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Mendoza",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "060305",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Mendoza, Argentina",
    "email": "consulperu-mendoza@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -32.8895,
    "lng": -68.8458,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "México",
    "country": "México",
    "continentId": "america",
    "codLocal": "064601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en México, México",
    "email": "consulperu-méxico@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 19.4326,
    "lng": -99.1332,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Miami",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062304",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Miami, Estados Unidos",
    "email": "consulperu-miami@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 25.7617,
    "lng": -80.1918,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Milán",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "063101",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Milán, Italia",
    "email": "consulperu-milán@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 45.4642,
    "lng": 9.19,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Minsk",
    "country": "Bielorrusia",
    "continentId": "europa",
    "codLocal": "067634",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Minsk, Bielorrusia",
    "email": "consulperu-minsk@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 53.9006,
    "lng": 27.559,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Mónaco",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062508",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Mónaco, Francia",
    "email": "consulperu-mónaco@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 43.7384,
    "lng": 7.4246,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Monterrey",
    "country": "México",
    "continentId": "america",
    "codLocal": "064603",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Monterrey, México",
    "email": "consulperu-monterrey@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 25.6866,
    "lng": -100.3161,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Montevideo",
    "country": "Uruguay",
    "continentId": "america",
    "codLocal": "066501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Montevideo, Uruguay",
    "email": "consulperu-montevideo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -34.9011,
    "lng": -56.1645,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Montreal",
    "country": "Canadáá",
    "continentId": "america",
    "codLocal": "061001",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Montreal, Canadáá",
    "email": "consulperu-montreal@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 45.5017,
    "lng": -73.5673,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Moscúú",
    "country": "Rusia",
    "continentId": "europa",
    "codLocal": "067101",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Moscúú, Rusia",
    "email": "consulperu-moscúú@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 0.0,
    "lng": 0.0,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Mumbay (ex Bombay)",
    "country": "India",
    "continentId": "asia",
    "codLocal": "063602",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Mumbay (ex Bombay), India",
    "email": "consulperu-mumbayexbo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 19.076,
    "lng": 72.8777,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Munich",
    "country": "Alemania",
    "continentId": "europa",
    "codLocal": "060108",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Munich, Alemania",
    "email": "consulperu-munich@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 48.1351,
    "lng": 11.582,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Nagoya",
    "country": "Japón",
    "continentId": "asia",
    "codLocal": "067505",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Nagoya, Japón",
    "email": "consulperu-nagoya@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 35.1815,
    "lng": 136.9066,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Nairobi-Kenia",
    "country": "Kenia",
    "continentId": "africa",
    "codLocal": "063901",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Nairobi-Kenia, Kenia",
    "email": "consulperu-nairobi-ke@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -1.2921,
    "lng": 36.8219,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Nápoles",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "063104",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Nápoles, Italia",
    "email": "consulperu-nápoles@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 40.8518,
    "lng": 14.2681,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "New Orleans",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062313",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en New Orleans, Estados Unidos",
    "email": "consulperu-neworleans@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 29.9511,
    "lng": -90.0715,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Nicosia",
    "country": "Chipre",
    "continentId": "europa",
    "codLocal": "065702",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Nicosia, Chipre",
    "email": "consulperu-nicosia@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 35.1856,
    "lng": 33.3823,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Niza",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062504",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Niza, Francia",
    "email": "consulperu-niza@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 43.7102,
    "lng": 7.262,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Nueva Delhi",
    "country": "India",
    "continentId": "asia",
    "codLocal": "063601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Nueva Delhi, India",
    "email": "consulperu-nuevadelhi@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 28.6139,
    "lng": 77.209,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Nueva York",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062305",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Nueva York, Estados Unidos",
    "email": "consulperu-nuevayork@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 40.7128,
    "lng": -74.006,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Oslo",
    "country": "Noruega",
    "continentId": "europa",
    "codLocal": "064901",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Oslo, Noruega",
    "email": "consulperu-oslo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 59.9139,
    "lng": 10.7522,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Ottawa",
    "country": "Canadáá",
    "continentId": "america",
    "codLocal": "061004",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Ottawa, Canadáá",
    "email": "consulperu-ottawa@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 45.4215,
    "lng": -75.6972,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Oviedo",
    "country": "España",
    "continentId": "europa",
    "codLocal": "067614",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Oviedo, España",
    "email": "consulperu-oviedo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 43.3619,
    "lng": -5.8494,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Palma de Mallorca",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062204",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Palma de Mallorca, España",
    "email": "consulperu-palmademal@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 39.5696,
    "lng": 2.6502,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Panamáá",
    "country": "Panamáá",
    "continentId": "america",
    "codLocal": "065201",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Panamáá, Panamáá",
    "email": "consulperu-panamáá@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 0.0,
    "lng": 0.0,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "París",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en París, Francia",
    "email": "consulperu-parís@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 48.8566,
    "lng": 2.3522,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Paterson",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062306",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Paterson, Estados Unidos",
    "email": "consulperu-paterson@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 40.9168,
    "lng": -74.1718,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Perth",
    "country": "Australia",
    "continentId": "oceania",
    "codLocal": "067612",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Perth, Australia",
    "email": "consulperu-perth@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -31.9505,
    "lng": 115.8605,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Perugia",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "067602",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Perugia, Italia",
    "email": "consulperu-perugia@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 43.1107,
    "lng": 12.3908,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Phoenix",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "067632",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Phoenix, Estados Unidos",
    "email": "consulperu-phoenix@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 33.4484,
    "lng": -112.074,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Porto",
    "country": "Portugal",
    "continentId": "europa",
    "codLocal": "065503",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Porto, Portugal",
    "email": "consulperu-porto@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 41.1579,
    "lng": -8.6291,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Porto Alegre",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060810",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Porto Alegre, Brasil",
    "email": "consulperu-portoalegr@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -30.0346,
    "lng": -51.2177,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Porto Velho",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060808",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Porto Velho, Brasil",
    "email": "consulperu-portovelho@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -8.7619,
    "lng": -63.9039,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Praga",
    "country": "República Checa",
    "continentId": "europa",
    "codLocal": "065601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Praga, República Checa",
    "email": "consulperu-praga@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 50.0755,
    "lng": 14.4378,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Pretoria",
    "country": "Sudáfrica",
    "continentId": "africa",
    "codLocal": "066003",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Pretoria, Sudáfrica",
    "email": "consulperu-pretoria@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": -25.7479,
    "lng": 28.2293,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Puerto David",
    "country": "Panamáá",
    "continentId": "america",
    "codLocal": "652023",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Puerto David, Panamáá",
    "email": "consulperu-puertodavi@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 8.4274,
    "lng": -82.4308,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Puerto España",
    "country": "Trinidad y Tobago",
    "continentId": "america",
    "codLocal": "067625",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Puerto España, Trinidad y Tobago",
    "email": "consulperu-puertoespa@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 10.6549,
    "lng": -61.5019,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Puerto Ordaz",
    "country": "Venezuela",
    "continentId": "america",
    "codLocal": "066602",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Puerto Ordaz, Venezuela",
    "email": "consulperu-puertoorda@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 8.297,
    "lng": -62.723,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Quebec",
    "country": "Canadáá",
    "continentId": "america",
    "codLocal": "061005",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Quebec, Canadáá",
    "email": "consulperu-quebec@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 46.8139,
    "lng": -71.208,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Quito",
    "country": "Ecuador",
    "continentId": "america",
    "codLocal": "061905",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Quito, Ecuador",
    "email": "consulperu-quito@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -0.1807,
    "lng": -78.4678,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Rabat",
    "country": "Marruecos",
    "continentId": "africa",
    "codLocal": "064503",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Rabat, Marruecos",
    "email": "consulperu-rabat@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 34.0209,
    "lng": -6.8416,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Recife",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060812",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Recife, Brasil",
    "email": "consulperu-recife@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -8.0476,
    "lng": -34.877,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Reykjavik",
    "country": "República de Islandia",
    "continentId": "europa",
    "codLocal": "063401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Reykjavik, República de Islandia",
    "email": "consulperu-reykjavik@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 64.1466,
    "lng": -21.9426,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Riad",
    "country": "Arabia Saudita",
    "continentId": "asia",
    "codLocal": "067620",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Riad, Arabia Saudita",
    "email": "consulperu-riad@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 24.7136,
    "lng": 46.6753,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Rio Branco",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060811",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Rio Branco, Brasil",
    "email": "consulperu-riobranco@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": -9.9753,
    "lng": -67.8249,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Rio de Janeiro",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060802",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Rio de Janeiro, Brasil",
    "email": "consulperu-riodejanei@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -22.9068,
    "lng": -43.1729,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Roma",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "063102",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Roma, Italia",
    "email": "consulperu-roma@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 41.9028,
    "lng": 12.4964,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Rosario",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "060307",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Rosario, Argentina",
    "email": "consulperu-rosario@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -32.9468,
    "lng": -60.6393,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Rotterdam",
    "country": "Holanda",
    "continentId": "europa",
    "codLocal": "065102",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Rotterdam, Holanda",
    "email": "consulperu-rotterdam@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 51.9244,
    "lng": 4.4777,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Salamanca",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062210",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Salamanca, España",
    "email": "consulperu-salamanca@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 40.9701,
    "lng": -5.6635,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Salónica",
    "country": "Grecia",
    "continentId": "europa",
    "codLocal": "062703",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Salónica, Grecia",
    "email": "consulperu-salónica@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 40.6401,
    "lng": 22.9444,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Salt Lake City",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "067621",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Salt Lake City, Estados Unidos",
    "email": "consulperu-saltlakeci@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 40.7608,
    "lng": -111.891,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Salta",
    "country": "Argentina",
    "continentId": "america",
    "codLocal": "067609",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Salta, Argentina",
    "email": "consulperu-salta@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -24.7821,
    "lng": -65.4232,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Salvador",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060809",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Salvador, Brasil",
    "email": "consulperu-salvador@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -12.9777,
    "lng": -38.5016,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Salzburgo",
    "country": "Austria",
    "continentId": "europa",
    "codLocal": "060501",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Salzburgo, Austria",
    "email": "consulperu-salzburgo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 47.8095,
    "lng": 13.055,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "San Francisco",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062308",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en San Francisco, Estados Unidos",
    "email": "consulperu-sanfrancis@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 37.7749,
    "lng": -122.4194,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "San Joséé",
    "country": "Costa Rica",
    "continentId": "america",
    "codLocal": "061301",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en San Joséé, Costa Rica",
    "email": "consulperu-sanjoséé@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 0.0,
    "lng": 0.0,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "San Juan",
    "country": "Puerto Rico",
    "continentId": "america",
    "codLocal": "062307",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en San Juan, Puerto Rico",
    "email": "consulperu-sanjuan@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 18.4655,
    "lng": -66.1057,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "San Luis",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062315",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en San Luis, Estados Unidos",
    "email": "consulperu-sanluis@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 38.627,
    "lng": -90.1994,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "San Pablo",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "060803",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en San Pablo, Brasil",
    "email": "consulperu-sanpablo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -23.5505,
    "lng": -46.6333,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "San Petesburgo",
    "country": "Rusia",
    "continentId": "europa",
    "codLocal": "067633",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en San Petesburgo, Rusia",
    "email": "consulperu-sanpetesbu@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 59.9311,
    "lng": 30.3609,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "San Salvador",
    "country": "El Salvador",
    "continentId": "america",
    "codLocal": "062101",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en San Salvador, El Salvador",
    "email": "consulperu-sansalvado@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 13.6929,
    "lng": -89.2182,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Santa Cruz",
    "country": "Bolivia",
    "continentId": "america",
    "codLocal": "060702",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Santa Cruz, Bolivia",
    "email": "consulperu-santacruz@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": -17.8146,
    "lng": -63.1561,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Santa Cruz de Tenerife",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062206",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Santa Cruz de Tenerife, España",
    "email": "consulperu-santacruzd@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 28.4636,
    "lng": -16.2518,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Santiago",
    "country": "Chile",
    "continentId": "america",
    "codLocal": "061603",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Santiago, Chile",
    "email": "consulperu-santiago@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": -33.4489,
    "lng": -70.6693,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Santiago",
    "country": "Panamáá",
    "continentId": "america",
    "codLocal": "067608",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Santiago, Panamáá",
    "email": "consulperu-santiago@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -33.4489,
    "lng": -70.6693,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Santo Domingo",
    "country": "República Dominicana",
    "continentId": "america",
    "codLocal": "067002",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Santo Domingo, República Dominicana",
    "email": "consulperu-santodomin@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 18.4861,
    "lng": -69.9312,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Seattle",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062316",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Seattle, Estados Unidos",
    "email": "consulperu-seattle@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 47.6062,
    "lng": -122.3321,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Seúl",
    "country": "Corea",
    "continentId": "asia",
    "codLocal": "061201",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Seúl, Corea",
    "email": "consulperu-seúl@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 37.5665,
    "lng": 126.978,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Sevilla",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062208",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Sevilla, España",
    "email": "consulperu-sevilla@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 37.3891,
    "lng": -5.9845,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Shanghai",
    "country": "China",
    "continentId": "asia",
    "codLocal": "061702",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Shanghai, China",
    "email": "consulperu-shanghai@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 31.2304,
    "lng": 121.4737,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Sidney",
    "country": "Australia",
    "continentId": "oceania",
    "codLocal": "060401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Sidney, Australia",
    "email": "consulperu-sidney@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -33.8688,
    "lng": 151.2093,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Singapur",
    "country": "Singapur",
    "continentId": "asia",
    "codLocal": "065901",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Singapur, Singapur",
    "email": "consulperu-singapur@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 1.3521,
    "lng": 103.8198,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Sucre",
    "country": "Bolivia",
    "continentId": "america",
    "codLocal": "060704",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Sucre, Bolivia",
    "email": "consulperu-sucre@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -19.0333,
    "lng": -65.2627,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Tabatinga",
    "country": "Brasil",
    "continentId": "america",
    "codLocal": "067630",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Tabatinga, Brasil",
    "email": "consulperu-tabatinga@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -4.2325,
    "lng": -69.9381,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Tampa",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "067611",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Tampa, Estados Unidos",
    "email": "consulperu-tampa@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 27.9506,
    "lng": -82.4572,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Tanger",
    "country": "Marruecos",
    "continentId": "africa",
    "codLocal": "064504",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Tanger, Marruecos",
    "email": "consulperu-tanger@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 35.7595,
    "lng": -5.834,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Tegucigalpa",
    "country": "Honduras",
    "continentId": "america",
    "codLocal": "062901",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Tegucigalpa, Honduras",
    "email": "consulperu-tegucigalp@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": false,
    "lat": 14.0723,
    "lng": -87.1921,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Tel Aviv",
    "country": "Israel",
    "continentId": "asia",
    "codLocal": "063502",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Tel Aviv, Israel",
    "email": "consulperu-telaviv@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 32.0853,
    "lng": 34.7818,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Timisoara",
    "country": "Rumanía",
    "continentId": "europa",
    "codLocal": "067615",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Timisoara, Rumanía",
    "email": "consulperu-timisoara@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 45.7537,
    "lng": 21.2257,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Tokio",
    "country": "Japón",
    "continentId": "asia",
    "codLocal": "063704",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Tokio, Japón",
    "email": "consulperu-tokio@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": false,
    "ciudadanoDigitalActive": true,
    "lat": 35.6762,
    "lng": 139.6503,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Toronto",
    "country": "Canadáá",
    "continentId": "america",
    "codLocal": "061002",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Toronto, Canadáá",
    "email": "consulperu-toronto@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 43.6532,
    "lng": -79.3832,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Toulouse",
    "country": "Francia",
    "continentId": "europa",
    "codLocal": "062509",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Toulouse, Francia",
    "email": "consulperu-toulouse@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 43.6047,
    "lng": 1.4442,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Trieste",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "063107",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Trieste, Italia",
    "email": "consulperu-trieste@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 45.6495,
    "lng": 13.7768,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Túnez",
    "country": "Túnez",
    "continentId": "africa",
    "codLocal": "067401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Túnez, Túnez",
    "email": "consulperu-túnez@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 36.8065,
    "lng": 10.1815,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Turín",
    "country": "Italia",
    "continentId": "europa",
    "codLocal": "063105",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Turín, Italia",
    "email": "consulperu-turín@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 45.0703,
    "lng": 7.6869,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Turku",
    "country": "Finlandia",
    "continentId": "europa",
    "codLocal": "067502",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Turku, Finlandia",
    "email": "consulperu-turku@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 60.4518,
    "lng": 22.2666,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Valencia",
    "country": "España",
    "continentId": "europa",
    "codLocal": "062209",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Valencia, España",
    "email": "consulperu-valencia@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 39.4699,
    "lng": -0.3763,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Vancouver",
    "country": "Canadáá",
    "continentId": "america",
    "codLocal": "061003",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Vancouver, Canadáá",
    "email": "consulperu-vancouver@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 49.2827,
    "lng": -123.1207,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Varsovia",
    "country": "Polonia",
    "continentId": "europa",
    "codLocal": "065401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Varsovia, Polonia",
    "email": "consulperu-varsovia@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 52.2297,
    "lng": 21.0122,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Viena",
    "country": "Austria",
    "continentId": "europa",
    "codLocal": "060502",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Viena, Austria",
    "email": "consulperu-viena@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 48.2082,
    "lng": 16.3738,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Vigo",
    "country": "España",
    "continentId": "europa",
    "codLocal": "067610",
    "phone": "+34 91 562 9022",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Vigo, España",
    "email": "consulperu-vigo@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 42.2406,
    "lng": -8.7207,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Washington",
    "country": "Estados Unidos",
    "continentId": "america",
    "codLocal": "062309",
    "phone": "+1 305 373 8520",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Washington, Estados Unidos",
    "email": "consulperu-washington@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "CAPTURA EN VIVO",
    "sioDeliveryMethod": "DHL - SEMANAL",
    "biofacialActive": true,
    "sircmActive": true,
    "ciudadanoDigitalActive": true,
    "lat": 38.9072,
    "lng": -77.0369,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Wellington",
    "country": "Nueva Zelanda",
    "continentId": "oceania",
    "codLocal": "067601",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Wellington, Nueva Zelanda",
    "email": "consulperu-wellington@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": true,
    "sioCaptureMode": "SEMIAUTOMÁTICA",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": -41.2865,
    "lng": 174.7762,
    "importantNotice": "Atención consular presencial bajo modalidad de cita previa.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  },
  {
    "city": "Zagreb",
    "country": "Croacia",
    "continentId": "europa",
    "codLocal": "061401",
    "phone": "+51 1 315 2700",
    "whatsappPhone": "",
    "address": "Consulado del Perú en Zagreb, Croacia",
    "email": "consulperu-zagreb@rree.gob.pe",
    "photo": "MADRID.jpg",
    "sioActive": false,
    "sioCaptureMode": "MANUAL",
    "sioDeliveryMethod": "Valija diplomática",
    "biofacialActive": false,
    "sircmActive": false,
    "ciudadanoDigitalActive": false,
    "lat": 45.815,
    "lng": 15.9819,
    "importantNotice": "Trámites consulares y remisión documentaria por valija diplomática.",
    "schedules": [
      {
        "days": "De Lunes a Viernes",
        "consularHours": "08:30 – 14:00 h (Hora local)",
        "peruHours": "02:00 – 07:30 h (Hora Perú)",
        "modality": "(Trámites presenciales con cita previa)"
      }
    ]
  }
];
