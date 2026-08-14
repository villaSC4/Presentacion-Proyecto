export interface ServiceOption {
  duration: '50 min' | '80 min';
  price: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'relajantes' | 'detox' | 'descontracturantes';
  categoryLabel: string;
  description: string;
  benefits: string[];
  options: ServiceOption[];
  badge?: string;
  image: string;
  videoUrl?: string;
  techTag?: string;
}

export const MASSAGE_SERVICES: ServiceItem[] = [

  {
    id: 'dream-relax',
    title: 'Dream Relax',
    subtitle: 'Viaje sensorial de relajación profunda',
    category: 'relajantes',
    categoryLabel: 'Masajes Relajantes',
    description: 'Masaje rítmico envolvente diseñado para disolver la tensión nerviosa y restaurar el equilibrio mental. Incorpora aceites orgánicos calientes y técnicas suecas de presión suave.',
    benefits: ['Disminución del estrés y la ansiedad', 'Mejora la calidad del sueño', 'Aumento de la serotonina', 'Alivio de la tensión muscular sutil'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    badge: 'Popular',
    image: '/images/dream_relax.png',
    videoUrl: '/video/DreamRelax.mp4'
  },
  {
    id: 'total-reset',
    title: 'Total Reset',
    subtitle: 'Masaje corporal integral + Reflexología Podal',
    category: 'relajantes',
    categoryLabel: 'Masajes Relajantes',
    description: 'La combinación perfecta entre relajación corporal total y la estimulación de puntos reflejos en los pies para reactivar la energía vital de tus órganos.',
    benefits: ['Estimulación del sistema linfático', 'Liberación de bloqueos energéticos', 'Alivio de pesadez general', 'Sedación del sistema nervioso'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    badge: 'Recomendado',
    image: '/images/total_relax.png',
    videoUrl: '/video/TotalReset.mp4'
  },
  {
    id: 'relax-reset',
    title: 'Relax Reset',
    subtitle: 'Maniobras profundas + Reflexología Podal',
    category: 'relajantes',
    categoryLabel: 'Masajes Relajantes',
    description: 'Combina maniobras de presión profunda descontracturante con reflexología podal especializada. Libera bloqueos neuromusculares y reactiva la energía vital desde los pies.',
    benefits: ['Alivio de contracturas profundas', 'Estimulación reflexológica podal', 'Liberación de bloqueos energéticos', 'Sedación del sistema nervioso'],
    options: [
      { duration: '50 min', price: 120 }
    ],
    image: '/images/relax_reset.jpg',
    videoUrl: '/video/Relax_Reset.mp4'
  },


  {
    id: 'detox-completo',
    title: 'Detox Muscular Completo',
    subtitle: 'Tratamiento integral de cuerpo entero con V-Conic + Drenaje',
    category: 'detox',
    categoryLabel: 'Descontracturante Detox',
    description: 'Experiencia terapéutica de máxima intensidad sin dolor gracias a la innovadora tecnología V-conic. Elimina toxinas cristalizadas y nudos profundos en todo el cuerpo.',
    benefits: ['Eliminación de toxinas acumuladas', 'Descontracturación sin trauma ni hematomas', 'Drenaje linfático acelerado', 'Recuperación de movilidad total'],
    options: [
      { duration: '80 min', price: 150 }
    ],
    badge: 'Tecnología Exclusiva',
    techTag: 'Tecnología V-Conic Sin Dolor',
    image: '/images/detox_muscular.png',
    videoUrl: '/video/DetoxMuscular.mp4'
  },
  {
    id: 'detox-superior',
    title: 'Detox Muscular Superior',
    subtitle: 'Espalda, hombros, cuello y zona cervical',
    category: 'detox',
    categoryLabel: 'Descontracturante Detox',
    description: 'Focalizado en las zonas de mayor sobrecarga postural por trabajo de oficina y estrés digital. Deshace nudos en la zona trapecio-cervical y escapular.',
    benefits: ['Alivio de cefaleas tensionales', 'Liberación de rigidez en cuello y hombros', 'Mejora la postura escapular', 'Descompresión muscular'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    techTag: 'Tecnología V-Conic Sin Dolor',
    image: '/images/detox_muscular_superior.png',
    videoUrl: '/video/DetoxMuscularSuperior.mp4'
  },
  {
    id: 'detox-inferior',
    title: 'Detox Muscular Inferior',
    subtitle: 'Zona lumbar, glúteos, piernas y pies',
    category: 'detox',
    categoryLabel: 'Descontracturante Detox',
    description: 'Dirigido a combatir dolores de cintura, ciática sutil, y tensión acumulada en Isquiotibiales y zona lumbar por sedentarismo o actividad física intensa.',
    benefits: ['Descompresión de zona lumbar', 'Alivio de tensión en nervio ciático', 'Relajación de glúteos y piernas', 'Eliminación de ácido láctico'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    techTag: 'Tecnología V-Conic Sin Dolor',
    image: '/images/detox_muscular_inferior.png',
    videoUrl: '/video/DetoxMuscularInferior.mp4'
  },


  {
    id: 'bambu-herramientas',
    title: 'Masaje Descontracturante',
    subtitle: 'Intensidad profunda + Herramientas Terapéuticas',
    category: 'descontracturantes',
    categoryLabel: 'Descontracturantes Especiales',
    description: 'Masaje de alta intensidad que combina técnicas manuales de presión profunda con herramientas terapéuticas especializadas para deshacer contracturas severas y reactivar el flujo muscular.',
    benefits: ['Descontracturación profunda y duradera', 'Reactiva la microcirculación', 'Efecto sedante profundo', 'Descompresión de fascias y tejidos'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    badge: 'Alta Intensidad',
    image: '/images/masaje_descontracturante.jpg',
    videoUrl: '/video/Masaje_Descontracturante.mp4'
  },
  {
    id: 'trend-superior',
    title: 'Descontracturante Superior',
    subtitle: 'Cuello, hombros, espalda y brazos',
    category: 'descontracturantes',
    categoryLabel: 'Descontracturantes Especiales',
    description: 'Tratamiento descontracturante focalizado en la zona superior del cuerpo: cuello, hombros, espalda alta y brazos. Libera tensiones acumuladas por el estrés postural y trabajo digital.',
    benefits: ['Alivio de rigidez cervical y trapecio', 'Liberación de hombros y escápulas', 'Apertura pectoral y respiratoria', 'Mejora de la postura superior'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    image: '/images/trend_superior.png',
    videoUrl: '/video/Descontracturante_Superior.mp4'
  },
  {
    id: 'trend-inferior-reflexologia',
    title: 'Descontracturante Inferior',
    subtitle: 'Zona lumbar, piernas, pantorrillas, pies + Reflexología Podal',
    category: 'descontracturantes',
    categoryLabel: 'Descontracturantes Especiales',
    description: 'Descontracturación profunda focalizada en la zona lumbar, piernas, pantorrillas y pies, complementada con reflexología podal para liberar tensiones acumuladas en el tren inferior.',
    benefits: ['Descompresión de zona lumbar', 'Alivio de piernas y pantorrillas', 'Estimulación reflexológica podal', 'Eliminación de ácido láctico'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    image: '/images/trend_inferior_reflexologia.png',
    videoUrl: '/video/Descontracturante_Inferior.mp4'
  }
];
