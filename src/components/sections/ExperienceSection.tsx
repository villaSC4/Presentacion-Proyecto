import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Play } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });

  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const benefits = [
    'Terapia 100% indolora',
    'Tecnología no invasiva',
    'Relajación muscular computarizada',
    'Resultados desde la primera sesión'
  ];
  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-[#EFECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
            Demostración Visual
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826] leading-tight">
            Tecnología V-Conic & Bienestar
          </h2>
          <p className="text-sm text-[#6B6763] max-w-2xl mx-auto">
            Experimenta una descontracturación profunda de fascias sin dolor ni traumatismos tisulares. Nuestra tecnología eleva tu bienestar al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#EFECE6] bg-[#2A2826] aspect-video group"
          >
            <video
              ref={videoRef}
              src="/video/DetoxMuscular.mp4"
              poster="/images/detox_muscular.png"
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
            />
            
            <div 
              className={`absolute inset-0 transition-colors duration-300 flex items-center justify-center cursor-pointer ${isPlaying ? 'bg-transparent group-hover:bg-black/10' : 'bg-black/40'}`}
              onClick={togglePlay}
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg border border-white/30 hover:scale-110">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              )}
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                Visualización Terapéutica
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F6F0EC] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8C5A3E]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2826]">
                Descompresión Muscular Avanzada
              </h3>
              <p className="text-sm text-[#6B6763] leading-relaxed">
                Nuestra máquina especializada aplica vibraciones cónicas calculadas para disolver los nudos musculares y reducir el estrés en zonas clave, sin cirugía y sin incomodidad.
              </p>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2C3E35] shrink-0" />
                  <span className="text-sm font-semibold text-[#4A3E3D]">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
