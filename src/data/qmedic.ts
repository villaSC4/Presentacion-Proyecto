export interface CombinedTherapy {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  iconName: string;
}

export const QMEDIC_PROMO = {
  title: "Evaluación Quiropráctica + Sesión de Terapias Combinadas",
  promoPrice: 120,
  regularPrice: 180,
  discount: "50% OFF en tu 1ra Sesión",
  subtitle: "Respaldo médico con más de 27 años de trayectoria en el diagnóstico y tratamiento integral del dolor espinal y articular en Lima.",
  includes: [
    "Evaluación postural y rango de movilidad espinal",
    "Diagnóstico personalizado con especialista",
    "Sesión completa de Terapias Combinadas (Alineamiento + Tracción + Fisioterapia + Acupuntura)",
    "Plan de mantenimiento preventivo y ergonomía"
  ]
};

export const COMBINED_THERAPIES: CombinedTherapy[] = [
  {
    id: 'fisioterapia',
    number: '01',
    title: 'Fisioterapia',
    shortDesc: 'Recuperación de movilidad, fuerza muscular y flexibilidad articular.',
    fullDesc: 'Mediante agentes físicos, cinesiterapia y ejercicios de estabilización guiados por profesionales médicos, restauramos la funcionalidad óptima del sistema musculoesquelético para prevenir recaídas.',
    benefits: ['Rehabilitación tisular y muscular', 'Fortalecimiento de la musculatura estabilizadora', 'Ampliación de rangos de movimiento sin dolor'],
    iconName: 'Activity'
  },
  {
    id: 'acupuntura',
    number: '02',
    title: 'Acupuntura',
    shortDesc: 'Control sintomático del estrés, desinflamación neuro-muscular y equilibrio energético.',
    fullDesc: 'Técnica milenaria respaldada por la medicina moderna que inserta agujas ultrapuras en meridianos estratégicos para inhibir las vías del dolor, liberar endorfinas y desinflamar raíces nerviosas.',
    benefits: ['Reducción drástica del dolor crónico', 'Efecto ansiolítico y descontracturante natural', 'Estimulación del flujo sanguíneo local'],
    iconName: 'Zap'
  },
  {
    id: 'quiropractica',
    number: '03',
    title: 'Quiropráctica',
    shortDesc: 'Alineamiento vertebral preciso y liberación de compresión nerviosa.',
    fullDesc: 'Ajustes espinales de alta velocidad y baja amplitud realizados por doctores especialistas para corregir subluxaciones vertebrales, devolviendo la señal neuro-espinal correcta entre el cerebro y el cuerpo.',
    benefits: ['Alineación articular y postural', 'Eliminación del pellizcamiento de nervios', 'Alivio instantáneo de la tensión axial'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'traccion-lumbar',
    number: '04',
    title: 'Expansión de Columna (Tracción Lumbar)',
    shortDesc: 'Descompresión discal computarizada/mecánica para hernias y ciática.',
    fullDesc: 'Dispositivo terapéutico de tracción que genera una fuerza de distracción sutil y controlada en la zona lumbar, creando presión negativa dentro de los discos vertebrales para promover la reabsorción de hernias y nutrición discal.',
    benefits: ['Alivio del dolor por hernia discal y protusiones', 'Descompresión del nervio ciático', 'Hidratación y nutrición de discos intervertebrales'],
    iconName: 'Maximize2'
  },
  {
    id: 'traccion-cervical',
    number: '05',
    title: 'Estiramiento de Cuello (Tracción Cervical)',
    shortDesc: 'Alivio de tensión acumulada y mejora drástica de movilidad cervical.',
    fullDesc: 'Tracción cervical de precisión que elonga suavemente las vértebras C1 a C7, reduciendo la rigidez producida por el síndrome de cuello de texto, bruxismo o latigazo cervical.',
    benefits: ['Alivio de cefaleas tensionales y mareos posturales', 'Recuperación de la curvatura lordótica cervical', 'Liberación de la rigidez en trapecios y hombros'],
    iconName: 'ArrowUpDown'
  }
];
