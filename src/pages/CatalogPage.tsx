import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import { MASSAGE_SERVICES } from '../data/services';
import { Tabs } from '../components/ui/Tabs';
import type { TabOption } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface CatalogPageProps {
  onSelectService: (serviceId: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ onSelectService }) => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'todos';

  const [activeCategory, setActiveCategory] = useState<string>(catParam);
  const [selectedDurations, setSelectedDurations] = useState<Record<string, '50 min' | '80 min'>>({});

  useEffect(() => {
    if (catParam) {
      setActiveCategory(catParam);
    }
  }, [catParam]);

  const categoryTabs: TabOption[] = [
    { id: 'todos', label: 'Todos los Masajes', count: MASSAGE_SERVICES.length },
    { id: 'relajantes', label: 'Relajantes', count: MASSAGE_SERVICES.filter(s => s.category === 'relajantes').length },
    { id: 'detox', label: 'Detox V-Conic (Sin Dolor)', count: MASSAGE_SERVICES.filter(s => s.category === 'detox').length },
    { id: 'descontracturantes', label: 'Especiales & Bambú', count: MASSAGE_SERVICES.filter(s => s.category === 'descontracturantes').length },
  ];

  const filteredServices = activeCategory === 'todos'
    ? MASSAGE_SERVICES
    : MASSAGE_SERVICES.filter(s => s.category === activeCategory);

  const handleDurationToggle = (serviceId: string, duration: '50 min' | '80 min') => {
    setSelectedDurations(prev => ({ ...prev, [serviceId]: duration }));
  };

  return (
    <div className="pt-32 pb-24 bg-[#F7F3ED] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B88A75]">
            Catálogo Completo de Masajes & Terapias
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#4A3E3D]">
            Encuentra tu Experiencia Ideal
          </h1>
          <p className="text-base text-[#8C7D75] leading-relaxed">
            Desde rituales rítmicos envolventes hasta descontracturación con tecnología V-conic sin dolor. Todos nuestros masajes incluyen aromaterapia con aceites 100% naturales.
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection direction="scale" className="flex justify-center">
          <Tabs
            tabs={categoryTabs}
            activeTab={activeCategory}
            onChange={(id) => setActiveCategory(id)}
          />
        </AnimatedSection>

        {/* V-CONIC BANNER NOTICE FOR DETOX */}
        {activeCategory === 'detox' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-3xl bg-[#2C3E35] text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#D4AF37] shrink-0" />
              <div className="text-xs">
                <p className="font-serif font-bold text-base text-white">
                  ¿Qué es la Tecnología V-Conic Sin Dolor?
                </p>
                <p className="text-white/80">
                  Sistema miofascial ergonómico que aplica presión progresiva desintegrando nudos musculares sin traumatizar los tejidos ni causar hematomas.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const currentDuration = selectedDurations[service.id] || service.options[0].duration;

              return (
                // OUTER: bidirectional scroll-reveal (whileInView)
                <motion.div
                  key={service.id + '-scroll'}
                  initial={{ opacity: 0, y: 55 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.08 }}
                  transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: [0.215, 0.61, 0.355, 1.0] }}
                >
                  {/* INNER: AnimatePresence filter transitions + hover lift */}
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileHover={{ y: -7, scale: 1.02, boxShadow: '0 22px 44px rgba(184,138,117,0.20)' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="bg-white rounded-3xl p-6 border border-[#EFE7DD] shadow-xs flex flex-col justify-between cursor-default"
                  >
                  <div>
                    {/* Image */}
                    <div className="arch-top overflow-hidden h-48 mb-5 bg-[#F7F3ED] relative border border-[#CBB5A1]/30">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {service.badge && (
                        <span className="absolute top-3 right-3 px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-[#B88A75] text-white shadow-sm">
                          {service.badge}
                        </span>
                      )}
                      {service.techTag && (
                        <span className="absolute bottom-3 left-3 px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-[#3D4A41] text-white shadow-sm">
                          {service.techTag}
                        </span>
                      )}
                    </div>

                    {/* Title & Desc */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88A75]">
                      {service.categoryLabel}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#4A3E3D] mt-0.5">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#B88A75] mt-0.5">
                      {service.subtitle}
                    </p>
                    <p className="text-xs text-[#8C7D75] mt-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Duration Toggles */}
                    <div className="mt-5 p-1 rounded-full bg-[#EFE7DD] flex items-center gap-1 border border-[#CBB5A1]/40">
                      {service.options.map((opt) => {
                        const isActive = currentDuration === opt.duration;
                        return (
                          <button
                            key={opt.duration}
                            onClick={() => handleDurationToggle(service.id, opt.duration)}
                            className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                              isActive
                                ? 'bg-[#B88A75] text-white shadow-sm'
                                : 'text-[#8C7D75] hover:text-[#4A3E3D]'
                            }`}
                          >
                            {opt.duration} &bull; S/ {opt.price}
                          </button>
                        );
                      })}
                    </div>

                    {/* Benefits List */}
                    <div className="mt-5 space-y-2">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#B88A75]">
                        Beneficios Clave:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#8C7D75]">
                        {service.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3D4A41] shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-[#EFE7DD]">
                    <Button
                      variant="clay"
                      size="md"
                      className="w-full"
                      onClick={() => onSelectService(service.id)}
                      icon={<Calendar className="w-4 h-4" />}
                    >
                      Reservar {service.title} ({currentDuration})
                    </Button>
                  </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
