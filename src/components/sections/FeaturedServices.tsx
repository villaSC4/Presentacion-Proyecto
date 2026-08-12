import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar } from 'lucide-react';
import { MASSAGE_SERVICES } from '../../data/services';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

interface FeaturedServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onSelectService }) => {
  // State for selected duration per service card (defaults to 50 min or 80 min)
  const [selectedDurations, setSelectedDurations] = useState<Record<string, '50 min' | '80 min'>>({
    'dream-relax': '80 min',
    'total-reset': '50 min',
    'detox-completo': '80 min',
    'bambu-herramientas': '50 min',
  });

  const featuredList = MASSAGE_SERVICES.filter(s => ['dream-relax', 'total-reset', 'detox-completo', 'bambu-herramientas'].includes(s.id));

  const handleDurationToggle = (serviceId: string, duration: '50 min' | '80 min') => {
    setSelectedDurations(prev => ({ ...prev, [serviceId]: duration }));
  };

  return (
    <section id="catalogo" className="py-20 bg-white border-t border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
              Tratamientos Destacados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826]">
              Experiencias de Relajación & Detox
            </h2>
            <p className="text-sm text-[#6B6763]">
              Selecciona el tiempo de tu preferencia para ver la tarifa actualizada y reservar tu cita de manera personalizada.
            </p>
          </div>

          <a
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#8C5A3E] hover:text-[#754930] underline underline-offset-4 shrink-0"
          >
            Ver catálogo completo de masajes &rarr;
          </a>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((service, index) => {
            const currentDuration = selectedDurations[service.id] || service.options[0].duration;
            const currentOption = service.options.find(o => o.duration === currentDuration) || service.options[0];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1.0] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#EFECE6] flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Badge if available */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-[#8C5A3E] text-white shadow-xs">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Service Image Frame */}
                  <div className="arch-top overflow-hidden h-44 mb-5 border border-white shadow-sm bg-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Category */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5A3E]">
                    {service.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#2A2826] mt-0.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#6B6763] line-clamp-2 mt-1">
                    {service.subtitle}
                  </p>

                  {/* Duration Selector Tabs inside Card */}
                  <div className="mt-4 p-1 rounded-full bg-[#EFECE6] flex items-center gap-1">
                    {service.options.map((opt) => {
                      const isActive = currentDuration === opt.duration;
                      return (
                        <button
                          key={opt.duration}
                          onClick={() => handleDurationToggle(service.id, opt.duration)}
                          className={`flex-1 py-1 px-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#8C5A3E] text-white shadow-xs'
                              : 'text-[#6B6763] hover:text-[#2A2826]'
                          }`}
                        >
                          {opt.duration}
                        </button>
                      );
                    })}
                  </div>

                  {/* Price display */}
                  <div className="mt-4 flex items-baseline justify-between border-b border-[#EFECE6] pb-4">
                    <span className="text-xs text-[#6B6763]">Tarifa Sesión</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-[#8C5A3E]">S/</span>
                      <span className="font-serif font-bold text-3xl text-[#2A2826]">
                        {currentOption.price}
                      </span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="mt-4 space-y-1.5 text-xs text-[#6B6763]">
                    {service.benefits.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2C3E35] shrink-0" />
                        <span className="line-clamp-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="mt-6 pt-2">
                  <Button
                    variant="clay"
                    size="sm"
                    className="w-full"
                    onClick={() => onSelectService(service.id)}
                    icon={<Calendar className="w-4 h-4" />}
                  >
                    Agendar este Masaje
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
