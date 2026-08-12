import React from 'react';
import { motion } from 'framer-motion';
import { OilShowcase } from '../components/sections/OilShowcase';
import { OilsCarouselSection } from '../components/sections/OilsCarouselSection';
import { BOTANICAL_OILS } from '../data/oils';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';


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


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BOTANICAL_OILS.map((oil, index) => (

            <motion.div
              key={oil.id + '-scroll'}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, ease, delay: index * 0.12 }}
            >

              <motion.div
                whileHover={{ y: -7, scale: 1.02, boxShadow: '0 22px 44px rgba(184,138,117,0.18)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-6 border border-[#EFE7DD] shadow-xs flex flex-col justify-between h-full cursor-default"
              >
                <div>

                  <div className="arch-top overflow-hidden h-52 mb-5 border border-[#CBB5A1]/30 bg-[#F7F3ED] relative group shadow-sm">
                    <img
                      src={oil.image}
                      alt={oil.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-xs font-display font-bold text-[#B88A75] shadow-sm">
                      💧
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88A75]">
                    {oil.origin}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#4A3E3D] mt-0.5">
                    {oil.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#B88A75] mt-0.5">
                    "{oil.tagline}"
                  </p>

                  <p className="text-xs text-[#8C7D75] mt-3 leading-relaxed">
                    {oil.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#EFE7DD] space-y-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#B88A75]">
                      Propiedades Destacadas:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#8C7D75]">
                      {oil.properties.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3D4A41] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFE7DD]">
                  <Button variant="clay" size="sm" className="w-full" onClick={onOpenBooking}>
                    Elegir {oil.name.split(' ')[2]}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>


      <OilsCarouselSection onOpenBooking={onOpenBooking} />


      <OilShowcase onOpenBooking={onOpenBooking} />

    </div>
  );
};
