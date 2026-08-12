export interface CarouselProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tag: string;
  accentColor: string;
  bgColor: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  highlights: string[];
}

export const OILS_CAROUSEL_PRODUCTS: CarouselProduct[] = [
  {
    id: 'jojoba-almond',
    name: 'Aceite Esencial de Jojoba & Almendras',
    subtitle: 'Nutrición Profunda & Regeneración Cutánea',
    description: 'Fórmula 100% pura y prensada en frío. Ideal para masajes relajantes y tratamientos de hidratación intensa.',
    tag: '100% Orgánico',
    accentColor: '#8C5A3E',
    bgColor: '#8C5A3E',
    gradientFrom: '#8C5A3E',
    gradientTo: '#5A3420',
    image: '/images/product_jojoba_dropper.png',
    highlights: ['Extracto Prensado en Frío', 'Vitamina E & Ácidos Grasos', 'Absorción Rápida Sin Residuo']
  },
  {
    id: 'keratin-coconut',
    name: 'Tratamiento Intensivo de Queratina & Coco',
    subtitle: 'Reparación Estructural & Brillo Natural',
    description: 'Enriquecido con extracto de coco, macadamia, girasol y almendras para restaurar la vitalidad y sedosidad.',
    tag: 'Fórmula Avanzada',
    accentColor: '#2C3E35',
    bgColor: '#2C3E35',
    gradientFrom: '#2C3E35',
    gradientTo: '#17241F',
    image: '/images/product_keratin_floating.png',
    highlights: ['Queratina Botánica Orgánica', 'Coco, Macadamia & Girasol', 'Reparación Capilar & Muscular']
  }
];
