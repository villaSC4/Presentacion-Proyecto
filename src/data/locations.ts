export interface LocationItem {
  id: string;
  name: string;
  address: string;
  reference: string;
  phoneDisplay: string;
  whatsappNumber: string;
  hours: string;
  mapEmbedUrl: string;
}

export const LOCATIONS: LocationItem[] = [
  {
    id: 'surco-chacarilla',
    name: 'Sede Surco Chacarilla',
    address: 'Av. Primavera 120, Int. 302, Chacarilla, Surco, Lima',
    reference: 'A 2 cuadras del Centro Comercial Chacarilla',
    phoneDisplay: '912 680 658',
    whatsappNumber: '51912680658',
    hours: 'Lun-Sáb: 9am - 6pm | Jueves: 9am - 2pm',
    mapEmbedUrl: 'https://maps.google.com/?q=Chacarilla+Surco+Lima'
  }
];

export const SOCIAL_LINKS = {
  instagramRelax: {
    handle: '@relax.alivioybienestar',
    url: 'https://instagram.com/relax.alivioybienestar'
  },
  instagramQmedic: {
    handle: '@qmedic.peru',
    url: 'https://instagram.com/qmedic.peru'
  },
  facebook: {
    handle: 'Relax - Alivio y Bienestar',
    url: 'https://www.facebook.com/profile.php?id=61591889185575&locale=es_LA'
  },
  tiktok: {
    handle: '@relax.alivioybienestar',
    url: 'https://www.tiktok.com/@relax.alivioybienestar'
  },
  whatsappPrimary: {
    number: '912 680 658',
    waUrl: 'https://wa.me/51912680658'
  },
  whatsappSecondary: {
    number: '925 602 615',
    waUrl: 'https://wa.me/51925602615'
  }
};
