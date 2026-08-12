import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Sparkles, Activity, ShieldCheck, Droplets, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const CategoryGrid: React.FC = () => {
  const categories = [
    {
      id: 'relajantes',
      title: 'Masajes Relajantes',
      subtitle: 'Dream Relax & Total Reset',
      desc: 'Técnicas suecas envolventes y reflexología podal para calmar el sistema nervioso.',
      icon: Sparkles,
      color: 'bg-[#F6F0EC] text-[#8C5A3E]',
      badge: 'Popular',
      link: '/servicios?cat=relajantes',
      image: '/images/massage_relax.png'
    },
    {
      id: 'detox',
      title: 'Descontracturante Detox',
      subtitle: 'Tecnología V-Conic Sin Dolor',
      desc: 'Eliminación profunda de toxinas cristalizadas y nudos musculares en espalda y piernas.',
      icon: Activity,
      color: 'bg-[#EBEFEF] text-[#2C3E35]',
      badge: 'Exclusivo',
      link: '/servicios?cat=detox',
      image: '/images/massage_detox.png'
    },
    {
      id: 'quiropractica',
      title: 'Quiropráctica & Médica',
      subtitle: 'Centro Especializado Qmedic',
      desc: 'Alineamiento vertebral, tracción discal y fisioterapia para la salud de la columna.',
      icon: ShieldCheck,
      color: 'bg-[#FFFBEB] text-[#D4AF37]',
      badge: '50% OFF 1ra Cita',
      link: '/quiropractica',
      image: '/images/quiropractica.png'
    },
    {
      id: 'ingredientes',
      title: 'Ingredientes Botánicos',
      subtitle: 'Aceites 100% Puros',
      desc: 'Almendras dulces, jojoba extra virgen y semilla de uva prensados en frío.',
      icon: Droplets,
      color: 'bg-[#FAF8F5] text-[#8C5A3E]',
      badge: 'Orgánico',
      link: '/ingredientes',
      image: '/images/botanical_oils.png'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
            Nuestros Pilares de Bienestar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826]">
            Categorías Principales
          </h2>
          <p className="text-sm text-[#6B6763]">
            Explora nuestros programas terapéuticos diseñados para cada tipo de tensión muscular y salud espinal.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.215, 0.61, 0.355, 1.0] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <NavLink
                  to={cat.link}
                  className="group relative block bg-white rounded-3xl p-6 border border-[#EFECE6] shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden"
                >
                  {/* Glowing Hover Accent Border Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8C5A3E] to-[#2C3E35] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

                  {/* Card Background Subtle Image Mask */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none scale-105 group-hover:scale-100 transition-transform">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center shadow-xs group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#8C5A3E] border border-[#EFECE6] group-hover:bg-[#8C5A3E] group-hover:text-white transition-colors">
                        {cat.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#2A2826] group-hover:text-[#8C5A3E] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#8C5A3E] mt-0.5">
                        {cat.subtitle}
                      </p>
                      <p className="text-xs text-[#6B6763] mt-2 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#F5F2EC] flex items-center justify-between text-xs font-semibold text-[#2A2826] group-hover:text-[#8C5A3E] relative z-10">
                    <span>Ver Servicios</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
