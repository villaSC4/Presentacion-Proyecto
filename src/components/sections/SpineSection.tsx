import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, MessageCircle, ShieldAlert } from 'lucide-react';

interface Organ {
  name: string;
  img?: string;
}

interface VertebraData {
  region: string;
  color: string;
  badgeBg: string;
  organs: Organ[];
  symptoms: string[];
  y: number;
}

const SPINE_DATA: Record<string, VertebraData> = {
  C1: {
    region: 'Región Cervical',
    color: '#B88A75',
    badgeBg: 'bg-[#B88A75]',
    organs: [
      { name: 'Cerebro', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cer.png' },
      { name: 'Todo el organismo' }
    ],
    symptoms: [
      'Dolores de cabeza recurrentes y migrañas intensas',
      'Sensación de cansancio constante o fatiga crónica',
      'Falta de concentración e insomnio'
    ],
    y: 58
  },
  C2: {
    region: 'Región Cervical',
    color: '#B88A75',
    badgeBg: 'bg-[#B88A75]',
    organs: [
      { name: 'Ojos', img: 'https://spine.pe/wp-content/uploads/2023/06/o-oj.png' },
      { name: 'Nervio óptico y auditivo' },
      { name: 'Glándula lagrimal y mucosa nasal' }
    ],
    symptoms: [
      'Sinusitis crónica o congestión nasal frecuente',
      'Alergias severas',
      'Problemas de visión y fatiga ocular'
    ],
    y: 73
  },
  C3: {
    region: 'Región Cervical',
    color: '#B88A75',
    badgeBg: 'bg-[#B88A75]',
    organs: [
      { name: 'Membrana mucosa de la boca', img: 'https://spine.pe/wp-content/uploads/2023/06/o-muc.png' },
      { name: 'Glándula parótida y oído externo' }
    ],
    symptoms: [
      'Neuritis faciales o dolores punzantes en la cara',
      'Brotes de acné o problemas cutáneos',
      'Molestias en el oído externo'
    ],
    y: 88
  },
  C4: {
    region: 'Región Cervical',
    color: '#B88A75',
    badgeBg: 'bg-[#B88A75]',
    organs: [
      { name: 'Nariz y fosas nasales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-nar.png' },
      { name: 'Labios y boca' }
    ],
    symptoms: [
      'Catarros y resfriados frecuentes',
      'Fiebre del heno u obstrucción nasal constante',
      'Labios agrietados o resequedad bucal'
    ],
    y: 103
  },
  C5: {
    region: 'Región Cervical',
    color: '#B88A75',
    badgeBg: 'bg-[#B88A75]',
    organs: [
      { name: 'Cuerdas vocales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cue.png' },
      { name: 'Glándulas del cuello y faringe' }
    ],
    symptoms: [
      'Dolor de garganta crónico',
      'Amigdalitis recurrente',
      'Ronquera o laringitis constante'
    ],
    y: 118
  },
  C6: {
    region: 'Región Cervical',
    color: '#B88A75',
    badgeBg: 'bg-[#B88A75]',
    organs: [
      { name: 'Glándula tiroides', img: 'https://spine.pe/wp-content/uploads/2023/06/o-glan.png' },
      { name: 'Músculos del cuello, bíceps y hombros' }
    ],
    symptoms: [
      'Adormecimiento, hormigueo y dolor en los brazos',
      'Dolor rígido de hombros y cuello',
      'Debilidad en los bíceps'
    ],
    y: 133
  },
  C7: {
    region: 'Región Cervical',
    color: '#B88A75',
    badgeBg: 'bg-[#B88A75]',
    organs: [
      { name: 'Extensores de la muñeca y manos', img: 'https://spine.pe/wp-content/uploads/2023/06/o-exte.png' }
    ],
    symptoms: [
      'Síndrome del túnel carpiano',
      'Dolor de muñecas y debilidad al sujetar objetos',
      'Adormecimiento en las manos y dedos'
    ],
    y: 148
  },
  T1: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Corazón', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cor.png' }
    ],
    symptoms: [
      'Mal funcionamiento y arritmias leves del corazón',
      'Dolor difuso entre los omóplatos',
      'Dificultad respiratoria leve bajo esfuerzo'
    ],
    y: 168
  },
  T2: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Corazón', img: 'https://spine.pe/wp-content/uploads/2023/06/o-cor.png' }
    ],
    symptoms: [
      'Alteraciones funcionales del ritmo cardíaco',
      'Dolor de pecho de origen no cardíaco',
      'Tensión muscular en la parte alta de la espalda'
    ],
    y: 183
  },
  T3: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Pulmones y bronquios', img: 'https://spine.pe/wp-content/uploads/2023/06/o-pul.png' }
    ],
    symptoms: [
      'Bronquitis frecuente y tos seca crónica',
      'Mayor propensión a neumonías',
      'Asma o dificultades al respirar hondo'
    ],
    y: 198
  },
  T4: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Pulmones y vesícula biliar', img: 'https://spine.pe/wp-content/uploads/2023/06/o-pul.png' }
    ],
    symptoms: [
      'Congestión pulmonar recurrente',
      'Problemas en la vesícula biliar',
      'Pinchazos dolorosos en la caja torácica'
    ],
    y: 213
  },
  T5: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Estómago', img: 'https://spine.pe/wp-content/uploads/2023/06/o-estt.png' }
    ],
    symptoms: [
      'Indigestión, acidez y reflujo gástrico',
      'Pesadez estomacal después de comer',
      'Dolor localizado en la boca del estómago'
    ],
    y: 228
  },
  T6: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Vasos sanguíneos del abdomen', img: 'https://spine.pe/wp-content/uploads/2023/06/o-vas.png' }
    ],
    symptoms: [
      'Mala circulación en órganos abdominales',
      'Dolores difusos en el vientre',
      'Digestión lenta y fatiga estomacal'
    ],
    y: 243
  },
  T7: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Hígado', img: 'https://spine.pe/wp-content/uploads/2023/06/o-hig.png' }
    ],
    symptoms: [
      'Condiciones hepáticas funcionales',
      'Cansancio general por sobrecarga metabólica',
      'Dolores costales derechos'
    ],
    y: 258
  },
  T8: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Páncreas', img: 'https://spine.pe/wp-content/uploads/2023/06/o-pan.png' }
    ],
    symptoms: [
      'Úlceras gástricas o duodenales',
      'Gastritis recurrentes',
      'Fluctuaciones en los niveles de azúcar e indigestión'
    ],
    y: 273
  },
  T9: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Glándula suprarrenal', img: 'https://spine.pe/wp-content/uploads/2023/06/o-glasu.png' }
    ],
    symptoms: [
      'Alergias respiratorias y cutáneas',
      'Urticarias repentinas',
      'Respuesta alterada al estrés y cansancio muscular'
    ],
    y: 288
  },
  T10: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Intestino delgado', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intd.png' }
    ],
    symptoms: [
      'Dolores cólicos causados por gases',
      'Mala absorción de nutrientes',
      'Distensión abdominal recurrente'
    ],
    y: 303
  },
  T11: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Riñón', img: 'https://spine.pe/wp-content/uploads/2023/06/o-rinn.png' }
    ],
    symptoms: [
      'Problemas en los riñones y retención de líquidos',
      'Molestias lumbares altas al despertar',
      'Fatiga renal leve'
    ],
    y: 318
  },
  T12: {
    region: 'Región Torácica / Dorsal',
    color: '#8C5A3E',
    badgeBg: 'bg-[#8C5A3E]',
    organs: [
      { name: 'Riñón y uréteres', img: 'https://spine.pe/wp-content/uploads/2023/06/o-rinn.png' }
    ],
    symptoms: [
      'Trastornos urinarios menores',
      'Problemas renales funcionales',
      'Dolor de espalda a nivel de la cintura'
    ],
    y: 333
  },
  L1: {
    region: 'Región Lumbar / Sacro',
    color: '#4A3020',
    badgeBg: 'bg-[#4A3020]',
    organs: [
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' }
    ],
    symptoms: [
      'Estreñimiento crónico o colon irritable',
      'Colitis recurrente',
      'Gases y digestión irregular en el tracto final'
    ],
    y: 353
  },
  L2: {
    region: 'Región Lumbar / Sacro',
    color: '#4A3020',
    badgeBg: 'bg-[#4A3020]',
    organs: [
      { name: 'Vejiga', img: 'https://spine.pe/wp-content/uploads/2023/06/o-vej.png' },
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' }
    ],
    symptoms: [
      'Síndrome premenstrual severo',
      'Trastornos de la vejiga e incontinencia leve',
      'Disfunción eréctil o impotencia de origen nervioso'
    ],
    y: 373
  },
  L3: {
    region: 'Región Lumbar / Sacro',
    color: '#4A3020',
    badgeBg: 'bg-[#4A3020]',
    organs: [
      { name: 'Vejiga', img: 'https://spine.pe/wp-content/uploads/2023/06/o-vej.png' },
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' }
    ],
    symptoms: [
      'Irregularidad menstrual',
      'Debilidad en las rodillas y dolor articular',
      'Problemas de control en la vejiga'
    ],
    y: 393
  },
  L4: {
    region: 'Región Lumbar / Sacro',
    color: '#4A3020',
    badgeBg: 'bg-[#4A3020]',
    organs: [
      { name: 'Órganos sexuales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-orse.png' },
      { name: 'Genitales externos' }
    ],
    symptoms: [
      'Mala circulación en las piernas y pies fríos',
      'Calambres nocturnos intensos en pantorrillas',
      'Dolores en la zona lumbar baja'
    ],
    y: 413
  },
  'L5/S': {
    region: 'Región Lumbar / Sacro',
    color: '#4A3020',
    badgeBg: 'bg-[#4A3020]',
    organs: [
      { name: 'Intestino grueso', img: 'https://spine.pe/wp-content/uploads/2023/06/o-intg.png' },
      { name: 'Órganos sexuales', img: 'https://spine.pe/wp-content/uploads/2023/06/o-orse.png' },
      { name: 'Genitales externos' }
    ],
    symptoms: [
      'Ciática (dolor agudo que baja por el glúteo y la pierna)',
      'Hemorroides recurrentes',
      'Malestar crónico en el hueso sacro o coxis'
    ],
    y: 438
  }
};

const REGIONS = [
  { label: 'REGIÓN CERVICAL (C1 - C7)', ids: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'], color: '#B88A75' },
  { label: 'REGIÓN TORÁCICA / DORSAL (T1 - T12)', ids: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'], color: '#8C5A3E' },
  { label: 'REGIÓN LUMBAR / SACRO (L1 - L5/S)', ids: ['L1', 'L2', 'L3', 'L4', 'L5/S'], color: '#4A3020' },
];

const vp = { once: false, amount: 0.12 };
const ease = [0.215, 0.61, 0.355, 1.0] as const;

interface SpineSectionProps {
  onOpenBooking: () => void;
}

export const SpineSection: React.FC<SpineSectionProps> = ({ onOpenBooking }) => {
  const [selectedId, setSelectedId] = useState<string>('T8');
  const activeVertebra = SPINE_DATA[selectedId] || SPINE_DATA['T8'];

  const handleConsult = () => {
    onOpenBooking();
  };

  return (
    <section id="columna-interactiva" className="py-20 bg-[#FAF8F5] border-t border-[#EFECE6] relative overflow-hidden">

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B88A75]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#4A3020]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 [perspective:1000px]">
          <motion.div
            initial={{ opacity: 0, rotateX: -70, y: 35 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease }}
            style={{ transformOrigin: '50% 100%' }}
            className="flex justify-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F6F0EC] border border-[#EFECE6] flex items-center justify-center shadow-xs">
              <Activity className="w-6 h-6 text-[#8C5A3E]" />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, rotateX: -80, y: 45 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            style={{ transformOrigin: '50% 100%' }}
            className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826] leading-tight"
          >
            El sistema nervioso controla todo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, rotateX: -80, y: 35 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.85, delay: 0.22, ease }}
            style={{ transformOrigin: '50% 100%' }}
            className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]"
          >
            COMO LOS PROBLEMAS EN LA COLUMNA PUEDEN AFECTAR TU CUERPO
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0, y: 20 }}
            whileInView={{ opacity: 1, scaleX: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full mt-2 origin-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease }}
            className="hidden lg:flex lg:col-span-4 bg-white rounded-3xl shadow-sm p-6 justify-center items-center relative min-h-[570px] border border-[#EFECE6]"
          >
            <div className="relative w-[180px] h-[520px] select-none">

              <img
                src="https://spine.pe/wp-content/uploads/2023/06/spine-cuerpo-bg.png"
                alt="Silueta humana"
                className="w-full h-full object-contain opacity-30"
              />

              <img
                src="https://spine.pe/wp-content/uploads/2023/06/spine-bg-vertical.png"
                alt="Columna vertebral"
                className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[60px] h-auto object-contain filter drop-shadow"
              />

              {Object.entries(SPINE_DATA).map(([id, data]) => {
                const isActive = id === selectedId;
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedId(id)}
                    className="absolute left-[88px] -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none z-30"
                    style={{ top: `${data.y}px` }}
                    title={`Seleccionar vértebra ${id}`}
                  >
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive
                        ? 'bg-[#8C5A3E]/40 scale-150 animate-ping'
                        : 'bg-[#4A3020]/20 scale-100 group-hover:scale-125'
                        }`}
                    />
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-[#8C5A3E]' : 'bg-[#4A3020]/60 group-hover:bg-[#8C5A3E]'
                        }`}
                    />
                  </button>
                );
              })}

              {activeVertebra && (
                <div
                  className="absolute left-[92px] right-[-100px] border-t-2 border-dashed border-[#8C5A3E]/60 transition-all duration-300 flex items-center justify-end z-20 pointer-events-none"
                  style={{ top: `${activeVertebra.y + 7}px` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8C5A3E] -mr-1 shadow-sm" />
                </div>
              )}

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-1 lg:col-span-4 bg-white rounded-3xl shadow-sm p-6 border border-[#EFECE6] space-y-6"
          >
            <h3 className="text-base font-serif font-bold text-[#2A2826] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#8C5A3E]" />
              Selecciona una vertebra:
            </h3>

            <div className="space-y-6">
              {REGIONS.map((reg) => (
                <div key={reg.label} className="space-y-2.5">
                  <h4
                    className="text-xs font-bold uppercase tracking-wider border-b border-[#EFECE6] pb-1"
                    style={{ color: reg.color }}
                  >
                    {reg.label}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {reg.ids.map((id) => {
                      const isActive = id === selectedId;
                      return (
                        <button
                          key={id}
                          onClick={() => setSelectedId(id)}
                          className={`h-9 px-3 rounded-xl font-bold text-xs flex items-center justify-center transition-all duration-200 cursor-pointer ${id === 'L5/S' ? 'w-14' : 'w-9'
                            } ${isActive
                              ? 'text-white shadow-md scale-105'
                              : 'bg-[#FAF8F5] text-[#4A3E3D] hover:bg-[#F6F0EC] border border-[#EFECE6]'
                            }`}
                          style={isActive ? { backgroundColor: reg.color } : {}}
                        >
                          {id === 'L5/S' ? 'L5 / S' : id}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-1 lg:col-span-4 min-h-[480px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-sm border border-[#EFECE6] p-7 flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-6">

                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-serif font-bold text-base shadow-md border-2 border-white"
                      style={{ backgroundColor: activeVertebra.color }}
                    >
                      {selectedId}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-[#2A2826] text-xl leading-tight">
                        Vértebra {selectedId}
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-wider mt-0.5" style={{ color: activeVertebra.color }}>
                        {activeVertebra.region}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#8C5A3E] flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-[#8C5A3E]" />
                      Órganos Afectados:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeVertebra.organs.map((organ, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#EFECE6] text-xs font-semibold text-[#4A3E3D]"
                        >
                          {organ.img && (
                            <img src={organ.img} alt={organ.name} className="w-4 h-4 object-contain" />
                          )}
                          <span>{organ.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-[#EFECE6]">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#6B6763] flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-[#8C5A3E]" />
                      Cómo Influye en Nuestro Cuerpo:
                    </h5>
                    <ul className="space-y-2 text-xs text-[#4A3E3D]">
                      {activeVertebra.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C5A3E] mt-1.5 shrink-0" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-4 border-t border-[#EFECE6]">
                  <button
                    onClick={handleConsult}
                    className="w-full py-3.5 rounded-2xl text-white text-xs font-bold flex items-center justify-center gap-2 transition-all hover:opacity-95 shadow-md cursor-pointer"
                    style={{ backgroundColor: activeVertebra.color }}
                  >
                    <MessageCircle className="w-4.5 h-4.5" />
                    Consultar sobre esta zona
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
