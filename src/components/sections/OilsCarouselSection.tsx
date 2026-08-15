import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Check, Calendar } from 'lucide-react';
import { OILS_CAROUSEL_PRODUCTS } from '../../data/oilsCarousel';
import type { CarouselProduct } from '../../data/oilsCarousel';
import { Button } from '../ui/Button';

interface OilsCarouselSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}


const viewport = { once: false, amount: 0.15 };
const ease = [0.215, 0.61, 0.355, 1.0] as const;

export const OilsCarouselSection: React.FC<OilsCarouselSectionProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const currentProduct: CarouselProduct = OILS_CAROUSEL_PRODUCTS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? OILS_CAROUSEL_PRODUCTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === OILS_CAROUSEL_PRODUCTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      animate={{ backgroundColor: currentProduct.bgColor }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="py-24 text-white relative overflow-hidden transition-colors duration-700"
    >

      <motion.div
        key={`glow-${currentProduct.id}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, #D4AF37 0%, ${currentProduct.accentColor} 60%, transparent 100%)`
        }}
      />


      <AnimatePresence>
        {currentProduct.decoration && (
          <motion.div
            key={`bg-deco-${currentProduct.id}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: 0.85,
              scale: [1.05, 1.12, 1.05],
              y: [0, -10, 0]
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{
              opacity: { duration: 0.4 },
              scale: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
            }}
            className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
          >
            <img
              src={currentProduct.decoration}
              alt={`Decoración para ${currentProduct.name}`}
              className="w-full h-full object-cover opacity-90 filter drop-shadow-2xl scale-110 sm:scale-125"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] border border-white/15 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Showcase Interactivo de Productos & Aceites
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Elíxires Terapéuticos de Autor
          </h2>
          <p className="text-sm text-white/80">
            Explora la riqueza botánica de nuestras fórmulas exclusivas. Cambia de producto para personalizar la sinergia de tu tratamiento.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >


          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl overflow-hidden min-h-[520px] flex items-center relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10"
              >



                <motion.div
                  initial={{ opacity: 0, x: -70, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -70, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
                  className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px] py-4"
                >

                  <motion.div
                    key={`bottle-${currentProduct.id}`}
                    initial={{ scale: 0.9, rotate: -2 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 180, damping: 20 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 50) handlePrev();
                      if (info.offset.x < -50) handleNext();
                    }}
                    className="relative cursor-grab active:cursor-grabbing flex items-center justify-center py-2 z-20"
                  >

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 sm:w-64 md:w-72 h-8 sm:h-10 bg-black/55 blur-xl rounded-[100%] pointer-events-none -z-10 transform scale-y-50" />


                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="h-64 sm:h-80 md:h-[400px] lg:h-[440px] w-auto object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />


                    <div className="absolute top-0 right-0 sm:-top-2 sm:-right-2 bg-white/95 text-[#2A2826] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-white/60 z-30">
                      {currentProduct.tag}
                    </div>
                  </motion.div>
                </motion.div>



                <motion.div
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 70 }}
                  transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0], delay: 0.05 }}
                  className="lg:col-span-6 space-y-6 text-left"
                >

                  <div className="space-y-2">
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37]"
                    >
                      {currentProduct.tag} &bull; Relax by Qmedic
                    </motion.span>

                    <motion.h3
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight"
                    >
                      {currentProduct.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-sm font-semibold text-white/90 italic"
                    >
                      "{currentProduct.subtitle}"
                    </motion.p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans"
                  >
                    {currentProduct.description}
                  </motion.p>


                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#D4AF37]">
                      Propiedades Clave:
                    </h4>
                    <div className="space-y-2">
                      {currentProduct.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-white/90 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-xs"
                        >
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>


                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="pt-2 flex flex-col sm:flex-row items-center gap-3"
                  >
                    <Button
                      variant="clay"
                      size="md"
                      className="w-full sm:w-auto bg-[#D4AF37] text-[#2C3E35] hover:bg-[#c29e2f] shadow-lg font-bold"
                      onClick={() => onOpenBooking()}
                      icon={<Calendar className="w-4 h-4" />}
                    >
                      Agendar Sesión con {currentProduct.name.split(' ')[0]}
                    </Button>
                  </motion.div>

                </motion.div>

              </motion.div>
            </AnimatePresence>

          </div>


          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#2A2826] shadow-2xl border border-[#EFECE6] flex items-center justify-center hover:scale-110 transition-all cursor-pointer z-40"
            aria-label="Producto anterior"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#2A2826] shadow-2xl border border-[#EFECE6] flex items-center justify-center hover:scale-110 transition-all cursor-pointer z-40"
            aria-label="Producto siguiente"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {OILS_CAROUSEL_PRODUCTS.map((prod, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-6 py-3 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#2A2826] shadow-xl font-bold scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#B88A75]' : 'bg-white/50'}`} />
                <span>{prod.name}</span>
              </button>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
};
