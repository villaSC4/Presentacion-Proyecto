import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Sparkles, Check } from 'lucide-react';
import { BOTANICAL_OILS } from '../../data/oils';
import type { OilItem } from '../../data/oils';
import { Button } from '../ui/Button';


const vp = { once: false, amount: 0.12 };
const ease = [0.215, 0.61, 0.355, 1.0] as const;

interface OilShowcaseProps {
  onOpenBooking: () => void;
}

export const OilShowcase: React.FC<OilShowcaseProps> = ({ onOpenBooking }) => {
  const [selectedOilId, setSelectedOilId] = useState<string>(BOTANICAL_OILS[0].id);
  const activeOil = BOTANICAL_OILS.find(o => o.id === selectedOilId) || BOTANICAL_OILS[0];


  const [quizSkinType, setQuizSkinType] = useState<'seca' | 'sensible' | 'mixta'>('sensible');
  const [quizGoal, setQuizGoal] = useState<'relajar' | 'descontracturar' | 'nutrir'>('relajar');

  const getRecommendedOil = (): OilItem => {
    if (quizGoal === 'descontracturar') return BOTANICAL_OILS[2];
    if (quizSkinType === 'mixta') return BOTANICAL_OILS[1];
    return BOTANICAL_OILS[0];
  };

  const recommendedOil = getRecommendedOil();

  return (
    <section className="py-20 bg-[#2C3E35] text-white relative overflow-hidden">

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8C5A3E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
            Insumos Botánicos Puros
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Aceites 100% Puros & Naturales
          </h2>
          <p className="text-sm text-white/80">
            Cada gota aplicada en tus masajes es extraída mediante prensado en frío para preservar todas sus propiedades curativas y antioxidantes.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">


          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="lg:col-span-5 space-y-3"
          >
            {BOTANICAL_OILS.map((oil, idx) => {
              const isSelected = selectedOilId === oil.id;
              return (
                <motion.button
                  key={oil.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, ease, delay: 0.1 + idx * 0.1 }}
                  onClick={() => setSelectedOilId(oil.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white/15 border-[#D4AF37] shadow-lg translate-x-2'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shrink-0 shadow-inner"
                    style={{ backgroundColor: oil.colorHex }}
                  >
                    💧
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-white">
                      {oil.name}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-1">{oil.origin}</p>
                  </div>
                  {isSelected && (
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#2C3E35] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOil.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-[#2A2826] p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-5 arch-top overflow-hidden h-48 sm:h-56 border border-[#EFECE6] bg-[#FAF8F5] relative shadow-sm flex items-center justify-center p-3">
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/40 blur-md rounded-[100%] pointer-events-none scale-y-50" />
                    <img
                      src={activeOil.image}
                      alt={activeOil.name}
                      className="h-full w-auto object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88A75]">
                      {activeOil.origin}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#4A3E3D]">
                      {activeOil.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#B88A75]">
                      "{activeOil.tagline}"
                    </p>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#F7F3ED] text-[#4A3E3D] border border-[#CBB5A1] mt-2">
                      Textura: {activeOil.texture}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#8C7D75] leading-relaxed">
                  {activeOil.description}
                </p>


                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B88A75] mb-2">
                    Beneficios Principales:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeOil.properties.map((prop, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#4A3E3D] bg-[#F7F3ED] p-2.5 rounded-xl border border-[#CBB5A1]/40">
                        <Droplets className="w-3.5 h-3.5 text-[#B88A75]" />
                        <span>{prop}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F3ED] border border-[#CBB5A1]/40 text-xs text-[#8C7D75]">
                  <strong className="text-[#B88A75]">Recomendado para:</strong> {activeOil.recommendedFor}
                </div>

                <div className="pt-2 flex justify-end">
                  <Button variant="clay" size="sm" onClick={onOpenBooking}>
                    Elegir este aceite en mi reserva
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>


        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-4xl mx-auto space-y-6"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Recomendador Virtual de Aceite Personalizado
              </h3>
              <p className="text-xs text-white/70">Responde 2 preguntas breves y descubre el aceite ideal para tu piel y tensión.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/90">1. ¿Cómo sientes tu piel habitualmente?</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'seca', label: 'Seca' },
                  { id: 'sensible', label: 'Sensible' },
                  { id: 'mixta', label: 'Mixta' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setQuizSkinType(item.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      quizSkinType === item.id ? 'bg-[#D4AF37] text-[#2C3E35]' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>


            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/90">2. ¿Cuál es tu objetivo principal?</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'relajar', label: 'Relajar' },
                  { id: 'descontracturar', label: 'Descontracturar' },
                  { id: 'nutrir', label: 'Nutrir' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setQuizGoal(item.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      quizGoal === item.id ? 'bg-[#D4AF37] text-[#2C3E35]' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>


          <div className="p-4 rounded-2xl bg-white/10 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#D4AF37]">
                Tu Aceite Sugerido:
              </span>
              <p className="font-display font-bold text-lg text-white">
                {recommendedOil.name}
              </p>
              <p className="text-white/80">{recommendedOil.tagline}</p>
            </div>
            <button
              onClick={() => {
                setSelectedOilId(recommendedOil.id);
                onOpenBooking();
              }}
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#2C3E35] text-xs font-bold hover:bg-[#c29e2f] transition-colors shrink-0 cursor-pointer"
            >
              Agendar Cita con {recommendedOil.name.split(' ')[2] || 'este aceite'}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
