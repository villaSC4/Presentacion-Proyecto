import imgAlmendra from '../assets/img/Almendra-Dulce.png';
import imgJojoba from '../assets/img/Jojoba extravirgen.png';
import imgSemillaUva from '../assets/img/Semilla-de-Uva.png';

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
    id: 'almendra-dulce',
    name: 'Aceite de Almendra Dulce',
    subtitle: 'Antiinflamatorio natural e hidratante con propiedades emolientes',
    description: 'Fórmula 100% pura y prensada en frío. Rico en vitaminas A, B y E para suavizar la piel y aliviar la tensión muscular acumulada.',
    tag: '100% Orgánico',
    accentColor: '#8C5A3E',
    bgColor: '#8C5A3E',
    gradientFrom: '#8C5A3E',
    gradientTo: '#5A3420',
    image: imgAlmendra,
    highlights: ['Extracto Prensado en Frío', 'Vitamina E & Ácidos Grasos', 'Absorción Rápida Sin Residuo']
  },
  {
    id: 'jojoba-extravirgen',
    name: 'Aceite de Jojoba Extra-Virgen',
    subtitle: 'Nutre e hidrata a profundidad aportando luminosidad a la piel',
    description: 'Extracción orgánica de cera líquida. Afinidad biológica perfecta con la piel que aporta nutrición intensa sin dejar residuo graso.',
    tag: '100% Orgánico',
    accentColor: '#A66E4E',
    bgColor: '#6E4A35',
    gradientFrom: '#A66E4E',
    gradientTo: '#4D3222',
    image: imgJojoba,
    highlights: ['Regulador del Sebo Cutáneo', 'Nutrición Profunda Orgánica', 'Luminosidad & Equilibrio Natural']
  },
  {
    id: 'semilla-de-uva',
    name: 'Aceite de Semilla de Uva',
    subtitle: 'Antioxidante y antienvejecimiento mejora elasticidad y protege la piel',
    description: 'Concentrado botánico rico en polifenoles. Protege contra el estrés oxidativo y estimula la firmeza y elasticidad muscular.',
    tag: '100% Orgánico',
    accentColor: '#3A4F41',
    bgColor: '#2C3E35',
    gradientFrom: '#3A4F41',
    gradientTo: '#1A2820',
    image: imgSemillaUva,
    highlights: ['Antioxidante & Antienvejecimiento', 'Mejora Elasticidad Muscular', 'Fórmula Ligera y Protectora']
  }
];
