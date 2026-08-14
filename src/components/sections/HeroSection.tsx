import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck, ArrowRight, HeartPulse, Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import qmedicLogo from '../../assets/img/qmedic_logo.png';

interface HeroSectionProps {
  onOpenBooking: () => void;
}


const HERO_PHRASES = [
  { line1: 'Sana tu cuerpo,', line2: 'libera tu tensión.' },
  { line1: 'Masajes que van', line2: 'más allá del dolor.' },
  { line1: 'Bienestar real,', line2: 'desde adentro.' },
  { line1: 'Tu columna merece', line2: 'el mejor cuidado.' },
  { line1: 'Reconnecta con', line2: 'tu equilibrio.' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const currentPhrase = HERO_PHRASES[phraseIndex];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#2A2826] text-white pt-24 pb-16">


      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/spa.mp4"
          poster="/images/relax_logo_cover.png"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-90 saturate-[1.1]"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />


        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8C5A3E]/20 rounded-full blur-3xl pointer-events-none" />
      </div>


      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
          aria-label={isPlaying ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
          aria-label={isMuted ? 'Activar sonido ambiental' : 'Silenciar sonido'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
        </button>
      </div>


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="space-y-8"
        >

          <div className="min-h-[160px] sm:min-h-[200px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={phraseIndex}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1.0] }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg"
              >
                {currentPhrase.line1}
                <br />
                <span className="text-[#C2C8B8]">{currentPhrase.line2}</span>
              </motion.h1>
            </AnimatePresence>
          </div>


          <div className="flex items-center justify-center gap-2">
            {HERO_PHRASES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPhraseIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${idx === phraseIndex
                    ? 'w-6 h-2 bg-[#D4AF37]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                aria-label={`Frase ${idx + 1}`}
              />
            ))}
          </div>


          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="clay"
              size="lg"
              onClick={onOpenBooking}
              icon={<Calendar className="w-5 h-5" />}
              className="w-full sm:w-auto bg-[#B88A75] text-white hover:bg-[#A37763] shadow-2xl font-bold px-8 py-4 text-base"
            >
              Agendar Sesión en WhatsApp
            </Button>

            <a
              href="#catalogo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-md transition-all shadow-lg hover:border-white/50"
            >
              <span>Ver Masajes & Precios</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>


          <div className="pt-6 grid grid-cols-3 gap-5 max-w-2xl mx-auto">


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.215, 0.61, 0.355, 1.0] }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#EDE0D4]/75 backdrop-blur-md border border-[#CBB5A1]/50 shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#B88A75]/30">
                  <img src={qmedicLogo} alt="Qmedic" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-display font-bold text-[#4A3E3D] text-sm leading-tight">Respaldo Qmedic</p>
                  <p className="text-[10px] text-[#8C7D75] mt-1 leading-snug">27+ años de trayectoria</p>
                </div>
              </motion.div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45, ease: [0.215, 0.61, 0.355, 1.0] }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#D6E4DA]/75 backdrop-blur-md border border-[#A8C4AE]/50 shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#A8C4AE]/40 flex items-center justify-center border border-[#A8C4AE]/40">
                  <HeartPulse className="w-7 h-7 text-[#3D4A41]" />
                </div>
                <div>
                  <p className="font-display font-bold text-[#3D4A41] text-sm leading-tight">Tecnología V-Conic</p>
                  <p className="text-[10px] text-[#5A6B60] mt-1 leading-snug">Descontracturante sin dolor</p>
                </div>
              </motion.div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#E8D8C8]/75 backdrop-blur-md border border-[#CBB5A1]/50 shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#CBB5A1]/40 flex items-center justify-center border border-[#B88A75]/30">
                  <ShieldCheck className="w-7 h-7 text-[#8C5A3E]" />
                </div>
                <div>
                  <p className="font-display font-bold text-[#4A3E3D] text-sm leading-tight">100% Botánico</p>
                  <p className="text-[10px] text-[#8C7D75] mt-1 leading-snug">Aceites puros prensados en frío</p>
                </div>
              </motion.div>
            </motion.div>

          </div>


          <div className="pt-4 flex justify-center">
            <a
              href="#catalogo"
              className="inline-flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Desplazarse hacia abajo"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">Explorar</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
              </motion.div>
            </a>
          </div>

        </motion.div>
      </div>

    </section>
  );
};
