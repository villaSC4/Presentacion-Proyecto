import imgAlmendra from '../assets/img/Almendra-Dulce2.png';
import imgAlmendrasDispersas from '../assets/img/almendras_dispersas.png';
import imgJojoba from '../assets/img/Aceite de Jojoba.png';
import imgJojobaDisperso from '../assets/img/Jojoba-disperso.png';
import imgSemillaUva from '../assets/img/aceite de uva.png';
import imgUvasDispersas from '../assets/img/uvas-dispersas.png';

export interface OilItem {
  id: string;
  name: string;
  shortTitle: string;
  origin: string;
  tagline: string;
  description: string;
  properties: string[];
  recommendedFor: string;
  texture: string;
  aromaProfile: string;
  image: string;
  decoration?: string;
  colorHex: string;
}

export const BOTANICAL_OILS: OilItem[] = [
  {
    id: 'almond',
    name: 'Aceite de Almendras Dulces',
    shortTitle: 'Almendra Dulce',
    origin: 'Prensado en frío 100% Puro',
    tagline: 'Antiinflamatorio natural e hidratante con propiedades emolientes.',
    description: 'Antiinflamatorio natural e hidratante con propiedades emolientes. Rico en vitaminas A, B y E para una nutrición y calma profunda.',
    properties: ['Antiinflamatorio natural', 'Emoliente de alta penetración', 'Suaviza y calma irritaciones', 'Rico en Ácidos Grasos Esenciales'],
    recommendedFor: 'Tensión muscular acumulada, piel seca o deshidratada y momentos de alta ansiedad.',
    texture: 'Sedosa, fluida y reconfortante',
    aromaProfile: 'Suave, dulce y ligeramente abizcochado',
    image: imgAlmendra,
    decoration: imgAlmendrasDispersas,
    colorHex: '#D4A373'
  },
  {
    id: 'jojoba',
    name: 'Aceite de Jojoba Extra Virgen',
    shortTitle: 'Jojoba extra-virgen',
    origin: 'Extracción Orgánica de Cera Líquida',
    tagline: 'Nutre e hidrata a profundidad aportando luminosidad a la piel.',
    description: 'Nutre e hidrata a profundidad aportando luminosidad a la piel. Su afinidad biológica permite una absorción impecable sin dejar residuos grasos.',
    properties: ['Regulador del sebo cutáneo', 'Nutritivo y bio-compatible', 'Luminosidad sin residuo graso', 'Acción protectora de la barrera cutánea'],
    recommendedFor: 'Pieles mixtas o sensibles, contracturas con foco en la textura de la piel y revitalización general.',
    texture: 'Ligera, aterciopelada y de toque seco',
    aromaProfile: 'Fresco, herbal y sutilmente amaderado',
    image: imgJojoba,
    decoration: imgJojobaDisperso,
    colorHex: '#A66E4E'
  },
  {
    id: 'grapeseed',
    name: 'Aceite de Semilla de Uva',
    shortTitle: 'Semilla de Uva',
    origin: 'Prensado Botánico Antioxidante',
    tagline: 'Antioxidante y antienvejecimiento mejora elasticidad y protege la piel.',
    description: 'Antioxidante y antienvejecimiento mejora elasticidad y protege la piel. Rico en polifenoles que estimulan la firmeza tisular.',
    properties: ['Antioxidante de máxima potencia', 'Mejora elasticidad y firmeza', 'Protección contra el estrés oxidativo', 'Fórmula hipoalergénica de absorción rápida'],
    recommendedFor: 'Deportistas, masajes Detox V-conic y personas que buscan reafirmar la elasticidad de la piel.',
    texture: 'Ultra ligera, deslizante y tonificante',
    aromaProfile: 'Limpio, neutro y ligeramente afrutado',
    image: imgSemillaUva,
    decoration: imgUvasDispersas,
    colorHex: '#3A4F41'
  }
];
