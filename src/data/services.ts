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
    image: '/images/massage_relax.png'
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
    image: '/images/massage_relax.png'
  },
  {
    id: 'relax-reset',
    title: 'Relax Reset',
    subtitle: 'Tratamiento localizado para pies y piernas cansadas',
    category: 'relajantes',
    categoryLabel: 'Masajes Relajantes',
    description: 'Terapia focalizada en miembros inferiores que drenan líquidos retendidos y desinflaman articulaciones y músculos tras jornadas prolongadas de pie o camina.',
    benefits: ['Sensación inmediata de ligereza', 'Mejora retorno venoso', 'Desinflamación de tobillos y gemelos', 'Alivio de fatiga podal'],
    options: [
      { duration: '50 min', price: 120 }
    ],
    image: '/images/massage_relax.png'
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
    image: '/images/massage_detox.png'
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
    image: '/images/massage_detox.png'
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
    image: '/images/massage_detox.png'
  },


  {
    id: 'bambu-herramientas',
    title: 'Descontracturante con Cañas de Bambú',
    subtitle: 'Maderoterapia & Cañas de Bambú Térmicas',
    category: 'descontracturantes',
    categoryLabel: 'Descontracturantes Especiales',
    description: 'Técnica milenaria combinada con herramientas ergonómicas de madera natural. Las cañas de bambú se deslizan a presión sostenida para reactivar el riego sanguíneo.',
    benefits: ['Moldeamiento y tonificación', 'Reactiva la microcirculación', 'Efecto sedante profundo', 'Descompresión de fascias'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    badge: 'Terapia Holística',
    image: '/images/massage_detox.png'
  },
  {
    id: 'trend-superior',
    title: 'Trend Superior',
    subtitle: 'Tratamiento localizado de alta eficacia en tronco superior',
    category: 'descontracturantes',
    categoryLabel: 'Descontracturantes Especiales',
    description: 'Combinación vanguardista de digitopresión, pases miofasciales y aceites botánicos termoactivos para liberar el área torácica y cervical.',
    benefits: ['Apertura pectoral y respiratoria', 'Disminución del estrés cervical', 'Flexibilidad articular'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    image: '/images/massage_detox.png'
  },
  {
    id: 'trend-inferior-reflexologia',
    title: 'Trend Inferior + Reflexología',
    subtitle: 'Liberación lumbar y podal coordinada',
    category: 'descontracturantes',
    categoryLabel: 'Descontracturantes Especiales',
    description: 'Acción sinérgica entre masaje descontracturante intenso en tren inferior y estimulación reflexológica especializada en las plantas de los pies.',
    benefits: ['Equilibrio neuro-muscular', 'Desinflamación plantar', 'Restablecimiento de la zancada suave'],
    options: [
      { duration: '50 min', price: 120 },
      { duration: '80 min', price: 150 }
    ],
    image: '/images/massage_detox.png'
  }
];
