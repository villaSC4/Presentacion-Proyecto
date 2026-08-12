import React from 'react';
import { motion } from 'framer-motion';
import { OilShowcase } from '../components/sections/OilShowcase';
import { OilsCarouselSection } from '../components/sections/OilsCarouselSection';

const vp = { once: false, amount: 0.1 };
const ease = [0.215, 0.61, 0.355, 1.0] as const;

interface IngredientesPageProps {
  onOpenBooking: () => void;
}

export const IngredientesPage: React.FC<IngredientesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-32 pb-24 bg-[#F7F3ED] min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B88A75]">
            Botánica Terapéutica Prensada en Frío
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#4A3E3D]">
            Ingredientes 100% Naturales
          </h1>
          <p className="text-base text-[#8C7D75] leading-relaxed">
            Rechazamos los aceites minerales derivados del petróleo. En Relax by Qmedic empleamos exclusivamente elíxires vegetales orgánicos de primer prensado.
          </p>
        </motion.div>
      </div>

      <OilsCarouselSection onOpenBooking={onOpenBooking} />

      <OilShowcase onOpenBooking={onOpenBooking} />
    </div>
  );
};
