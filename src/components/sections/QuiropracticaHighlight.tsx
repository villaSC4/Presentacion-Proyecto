import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';
import { QMEDIC_PROMO, COMBINED_THERAPIES } from '../../data/qmedic';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import logoImg from '../../assets/img/logo.jpg';

interface QuiropracticaHighlightProps {
  onOpenBooking: () => void;
}

export const QuiropracticaHighlight: React.FC<QuiropracticaHighlightProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="p-8 sm:p-10 rounded-3xl bg-[#4A3020] text-white border border-[#B88A75]/20 shadow-2xl mb-16 relative overflow-hidden"
        >

          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B88A75]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl shrink-0 overflow-hidden border border-[#D4AF37]/30">
                  <img src={logoImg} alt="Qmedic Logo" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-[#4A3020] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {QMEDIC_PROMO.discount}
                </div>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight">
                {QMEDIC_PROMO.title}
              </h2>

              <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                {QMEDIC_PROMO.subtitle}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                {QMEDIC_PROMO.includes.map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>


            <div className="lg:col-span-4 bg-white/10 p-6 rounded-2xl border border-white/15 text-center space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-white/70">
                Inversión Promocional
              </span>

              <div className="flex items-center justify-center gap-3">
                <span className="text-sm text-white/50 line-through font-serif">
                  S/ {QMEDIC_PROMO.regularPrice}
                </span>
                <span className="font-serif font-bold text-4xl sm:text-5xl text-[#D4AF37]">
                  S/ {QMEDIC_PROMO.promoPrice}
                </span>
              </div>

              <p className="text-[11px] text-white/70">
                Incluye evaluación postural + 5 terapias combinadas en 1 sola visita.
              </p>

              <Button
                variant="clay"
                size="md"
                className="w-full shadow-md"
                onClick={onOpenBooking}
              >
                Reservar Mi Evaluación a S/ 120
              </Button>
            </div>
          </div>
        </motion.div>


        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
              Tratamiento Multidisciplinario del Dolor
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826]">
              Desglose de Terapias Combinadas
            </h3>
            <p className="text-sm text-[#6B6763]">
              Haz clic en cada terapia para explorar en detalle sus mecanismos científicos y beneficios para tu columna.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion items={COMBINED_THERAPIES} onSelectBook={onOpenBooking} />
          </div>
        </div>

      </div>
    </section>
  );
};
