import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { AnimatedSection } from '../ui/AnimatedSection';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-white border-t border-[#EFECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
            Experiencia & Opiniones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826]">
            Lo que Dicen Nuestros Pacientes
          </h2>
          <p className="text-sm text-[#6B6763]">
            Historias reales de personas que han recuperado su bienestar y tranquilidad en Relax by Qmedic.
          </p>
        </AnimatedSection>

        {/* TESTIMONIAL CAROUSEL */}
        <AnimatedSection direction="scale" className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-[#EFECE6] shadow-md space-y-6 text-center relative"
            >
              {/* Decorative Quote Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F6F0EC] text-[#8C5A3E] mb-2">
                <Quote className="w-6 h-6" />
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 text-[#D4AF37]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>

              {/* Comment text */}
              <p className="font-serif italic text-lg sm:text-xl text-[#2A2826] leading-relaxed max-w-2xl mx-auto">
                "{current.comment}"
              </p>

              {/* Author & Treatment info */}
              <div className="pt-4 border-t border-[#EFECE6] space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#2A2826]">
                  {current.author}
                </h4>
                <p className="text-xs font-semibold text-[#8C5A3E]">
                  Tratamiento: {current.treatment}
                </p>
                <div className="flex items-center justify-center gap-3 text-[11px] text-[#6B6763] pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8C5A3E]" /> {current.location}
                  </span>
                  <span>&bull;</span>
                  <span>{current.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#FAF8F5] text-[#2A2826] border border-[#EFECE6] hover:bg-[#8C5A3E] hover:text-white transition-all cursor-pointer shadow-xs"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#8C5A3E]' : 'bg-[#DCD6CD] hover:bg-[#8C5A3E]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#FAF8F5] text-[#2A2826] border border-[#EFECE6] hover:bg-[#8C5A3E] hover:text-white transition-all cursor-pointer shadow-xs"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
