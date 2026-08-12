export interface OilItem {
  id: string;
  name: string;
  origin: string;
  tagline: string;
  description: string;
  properties: string[];
  recommendedFor: string;
  texture: string;
  aromaProfile: string;
  image: string;
  colorHex: string;
}

export const BOTANICAL_OILS: OilItem[] = [
  {
    id: 'almond',
    name: 'Aceite de Almendras Dulces',
    origin: 'Prensado en frío 100% Puro',
    tagline: 'El clásico nutritivo para pieles sensibles y calma profunda',
    description: 'Rico en vitaminas A, B y E, este aceite dorado posee extraordinarias propiedades antiinflamatorias y emolientes. Es ideal para masajes prolongados ya que penetra gradualmente suavizando las capas cutáneas.',
    properties: ['Antiinflamatorio natural', 'Emoliente de alta penetración', 'Suaviza y calma irritaciones', 'Rico en Ácidos Grasos Esenciales'],
    recommendedFor: 'Tensión muscular acumulada, piel seca o deshidratada y momentos de alta ansiedad.',
    texture: 'Sedosa, fluida y reconfortante',
    aromaProfile: 'Suave, dulce y ligeramente abizcochado',
    image: '/images/almond_oil_real.png',
    colorHex: '#D4A373'
  },
  {
    id: 'jojoba',
    name: 'Aceite de Jojoba Extra Virgen',
    origin: 'Extracción Orgánica de Cera Líquida',
    tagline: 'Nutrición pura y regulador sebáceo de alta afinidad epidérmica',
    description: 'Su estructura molecular es idéntica al sebo natural de la piel humana, lo que permite una absorción limpia sin tapar poros. Aporta máxima luminosidad y nutrición profunda.',
    properties: ['Regulador del sebo cutáneo', 'Nutritivo y bio-compatible', 'Luminosidad sin residuo graso', 'Acción protectora de la barrera cutánea'],
    recommendedFor: 'Pieles mixtas o sensibles, contracturas con foco en la textura de la piel y revitalización general.',
    texture: 'Ligera, aterciopelada y de toque seco',
    aromaProfile: 'Fresco, herbal y sutilmente amaderado',
    image: '/images/dropper_oil_real.png',
    colorHex: '#A66E4E'
  },
  {
    id: 'grapeseed',
    name: 'Aceite de Semilla de Uva',
    origin: 'Prensado Botánico Antioxidante',
    tagline: 'Protección celular y mejora de la elasticidad muscular',
    description: 'Concentrado con polifenoles y proantocianidinas, combate los radicales libres mientras mejora la elasticidad muscular y vascular. Su ligereza facilita pases descontracturantes rápidos.',
    properties: ['Antioxidante de máxima potencia', 'Mejora elasticidad y firmeza', 'Protección contra el estrés oxidativo', 'Fórmula hipoalergénica de absorción rápida'],
    recommendedFor: 'Deportistas, masajes Detox V-conic y personas que buscan reafirmar la elasticidad de la piel.',
    texture: 'Ultra ligera, deslizante y tonificante',
    aromaProfile: 'Limpio, neutro y ligeramente afrutado',
    image: '/images/grape_oil_real.png',
    colorHex: '#3A4F41'
  }
];
