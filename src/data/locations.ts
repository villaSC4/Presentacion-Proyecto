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
    hours: 'Lunes a Sábado: 8:00 am - 8:00 pm',
    mapEmbedUrl: 'https://maps.google.com/?q=Chacarilla+Surco+Lima'
  },
  {
    id: 'qmedic-lima',
    name: 'Sede Central Qmedic Lima',
    address: 'Av. Javier Prado Este 2455, San Borja / Lima',
    reference: 'Frente a la Estación de la Cultura',
    phoneDisplay: '925 602 615',
    whatsappNumber: '51925602615',
    hours: 'Lunes a Sábado: 8:30 am - 7:30 pm',
    mapEmbedUrl: 'https://maps.google.com/?q=San+Borja+Lima'
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
  whatsappPrimary: {
    number: '912 680 658',
    waUrl: 'https://wa.me/51912680658'
  },
  whatsappSecondary: {
    number: '925 602 615',
    waUrl: 'https://wa.me/51925602615'
  }
};
