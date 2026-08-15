import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles, ShieldCheck, Zap, Feather, HeartHandshake,
  Calendar, CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AnimatedSection } from '../components/ui/AnimatedSection';

import portadaImg from '../assets/img/PORTADA.jpg';
import dreamRelaxImg from '../assets/img/dream relax.png';
import detoxMuscularImg from '../assets/img/Detox Muscular.png';
import detoxInferiorImg from '../assets/img/Detox Muscular Inferior.PNG';
import descontSuperiorImg from '../assets/img/Descontracturante Trend Superior.PNG';

import relajante1 from '../assets/video/relajante1.mp4';
import relajante2 from '../assets/video/relajante2.mp4';
import detoxMuscularVideo from '../assets/video/DetoxMuscular.mp4';

interface ExperienciaPageProps {
  onOpenBooking: () => void;
}

const vp = { once: false, amount: 0.15 };
const ease = [0.215, 0.61, 0.355, 1.0] as const;

const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.614 1.832 6.52L4 29l7.697-1.817A11.946 11.946 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.818a9.832 9.832 0 01-5.006-1.367l-.358-.213-3.724.879.938-3.624-.234-.372A9.818 9.818 0 016.182 15C6.182 9.574 10.574 5.182 16 5.182S25.818 9.574 25.818 15 21.426 24.818 16 24.818zm5.386-7.346c-.295-.147-1.746-.861-2.017-.96-.27-.098-.467-.147-.664.148-.196.295-.763.96-.935 1.157-.172.196-.344.221-.639.073-.295-.147-1.245-.459-2.372-1.464-.877-.783-1.468-1.748-1.64-2.044-.172-.295-.018-.454.129-.601.133-.132.295-.344.442-.516.148-.172.197-.295.296-.492.098-.197.049-.37-.025-.517-.073-.148-.664-1.6-.91-2.19-.24-.575-.484-.497-.664-.506l-.566-.01c-.197 0-.517.073-.788.37-.27.295-1.033 1.01-1.033 2.462s1.057 2.857 1.205 3.054c.147.197 2.08 3.178 5.04 4.457.704.305 1.253.486 1.682.623.707.224 1.35.193 1.858.117.567-.085 1.746-.714 1.992-1.404.246-.689.246-1.28.172-1.404-.073-.123-.27-.197-.566-.344z"
      fill="currentColor"
    />
  </svg>
);

function AutoVideoCard({ src, title, desc }: { src: string; title: string; desc: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (!ref.current) return;
    if (inView) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }, [inView]);

  return (
    <div className="relative rounded-3xl overflow-hidden border-2 border-[#EFECE6] shadow-xl aspect-video bg-[#2C1E18] group">
      <video
        ref={ref}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/90 via-[#2C1E18]/25 to-transparent pointer-events-none" />
      <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 pointer-events-none">
        <h4 className="font-display font-bold text-xl sm:text-2xl text-[#E5B869] drop-shadow-md">{title}</h4>
        <p className="text-sm sm:text-base text-[#FAF7F2] font-medium leading-snug drop-shadow">{desc}</p>
      </div>
    </div>
  );
}

export const ExperienciaPage: React.FC<ExperienciaPageProps> = ({ onOpenBooking }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  const PILLARS = [
    {
      id: 'ambiente',
      title: 'Ambiente de Santuario',
      tag: '01. AMBIENTE',
      desc: 'Cabinas privadas climatizadas, iluminación tenue regulada, aromas botánicos naturales y toallas calientes para disolver el ruido exterior.',
      img: portadaImg,
      icon: Feather,
      badge: 'Relajación Sensorial'
    },
    {
      id: 'beneficios',
      title: 'Beneficios Integrales',
      tag: '02. BENEFICIOS',
      desc: 'Disminución drástica del estrés, sedación del sistema nervioso, desinflamación neuro-muscular y mejora en la calidad del sueño.',
      img: dreamRelaxImg,
      icon: HeartHandshake,
      badge: 'Salud y Renovación'
    },
    {
      id: 'tecnologia',
      title: 'Tecnología V-Conic',
      tag: '03. TECNOLOGÍA',
      desc: 'Sistema miofascial ergonómico de vanguardia que libera nudos profundos y toxinas sin causar dolor, hematomas ni traumatismos.',
      img: detoxMuscularImg,
      icon: Zap,
      badge: 'Sin Dolor'
    },
    {
      id: 'reflexologia',
      title: 'Reflexología Podal',
      tag: '04. REFLEXOLOGÍA',
      desc: 'Estimulación precisa de puntos reflejos en los pies para liberar bloqueos energéticos y devolver la ligereza a tus órganos y piernas.',
      img: detoxInferiorImg,
      icon: Sparkles,
      badge: 'Vitalidad Podal'
    },
    {
      id: 'tecnicas',
      title: 'Técnicas Exclusivas',
      tag: '05. TÉCNICAS',
      desc: 'Maniobras rítmicas envolventes, presión sueca progresiva y herramientas terapéuticas diseñadas por especialistas en bienestar.',
      img: descontSuperiorImg,
      icon: ShieldCheck,
      badge: 'Respaldo QMEDIC'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#2C1E18] font-sans antialiased selection:bg-[#B88A75] selection:text-white">


      <section
        ref={heroRef}
        className="pt-32 pb-16 lg:pt-36 lg:pb-24 bg-[#F7F3ED] border-b border-[#EFECE6] relative overflow-hidden text-center"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="max-w-4xl mx-auto px-5 sm:px-8 space-y-6 relative z-10"
        >

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-extrabold text-[#B88A75] bg-white/90 border border-[#EFECE6] px-5 py-2 rounded-full inline-block shadow-sm">
              LA EXPERIENCIA RELAX BY QMEDIC
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#3A2820] leading-[1.12] tracking-tight"
          >
            Santuario de Calma, Salud y Renovación
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="text-lg sm:text-xl text-[#5A4A42] leading-relaxed max-w-3xl mx-auto font-normal"
          >
            Cada sesión en <strong>RELAX by QMEDIC</strong> combina un ambiente de desconexión total, 
            tecnología V-Conic sin dolor, reflexología podal y el respaldo médico de 27 años de trayectoria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="pt-4 flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="clay"
              size="lg"
              onClick={onOpenBooking}
              icon={<Calendar className="w-5 h-5" />}
              className="px-8 py-4 text-base font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Reservar mi experiencia
            </Button>
            <a
              href="https://wa.me/51912680658?text=Hola%2C%20quisiera%20consultar%20sobre%20la%20experiencia%20RELAX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#8C5A3E] text-white font-bold text-base hover:bg-[#72462E] hover:scale-105 transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Escribir por WhatsApp
            </a>
          </motion.div>

        </motion.div>
      </section>



      <section className="py-20 lg:py-28 bg-white border-b border-[#EFECE6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">

          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-[#8C5A3E] bg-[#FAF7F2] px-5 py-2 rounded-full border border-[#EFECE6] shadow-sm inline-block">
              NUESTROS 5 PILARES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-tight">
              ¿Qué hace única a la <span className="text-[#8C5A3E]">Experiencia RELAX</span>?
            </h2>
            <p className="text-lg sm:text-xl text-[#5A4A42] leading-relaxed">
              Descubre en imágenes y detalles cómo cuidamos cada aspecto de tu sesión.
            </p>
          </AnimatedSection>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: index * 0.1, ease }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="bg-[#FAF7F2] rounded-3xl overflow-hidden border-2 border-[#EFECE6] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >

                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={pillar.img}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 bg-[#3C2A1E] text-[#E5B869] px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md">
                      {pillar.badge}
                    </div>
                  </div>

                  <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                          {pillar.tag}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white text-[#8C5A3E] border border-[#EFECE6] flex items-center justify-center shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-2xl text-[#2C1E18] leading-tight group-hover:text-[#8C5A3E] transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-base text-[#4A3D36] font-normal leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="w-12 h-1 bg-[#8C5A3E] rounded-full group-hover:w-full transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>



      <section className="py-20 lg:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-[#8C5A3E]">
                EL AMBIENTE PERFECTO
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-tight">
                Cabinas Climatizadas y <span className="text-[#8C5A3E]">Aromaterapia Natural</span>
              </h2>
              <p className="text-lg text-[#5A4A42] leading-relaxed">
                Nuestras instalaciones en Surco – Chacarilla están acústicamente acondicionadas para aislar cualquier sonido exterior. Disfruta de aromaterapia botánica, iluminación cálida y música envolvente para desconectarte por completo.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  'Aromas 100% Orgánicos',
                  'Cabinas Climatizadas',
                  'Toallas Calientes',
                  'Privacidad Absoluta'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#EFECE6] text-sm font-bold text-[#2C1E18]">
                    <CheckCircle2 className="w-5 h-5 text-[#8C5A3E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-6">
              <AutoVideoCard
                src={relajante1}
                title="Santuario de Calma"
                desc="Un entorno pensado al milímetro para tu confort."
              />
            </AnimatedSection>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection direction="left" className="lg:col-span-6 order-2 lg:order-1">
              <AutoVideoCard
                src={detoxMuscularVideo}
                title="Tecnología V-Conic Sin Dolor"
                desc="Liberación miofascial profunda sin traumatismos."
              />
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-[#8C5A3E]">
                TECNOLOGÍA EXCLUSIVA
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-tight">
                V-Conic Detox: <span className="text-[#8C5A3E]">Descontractura Sin Dolor</span>
              </h2>
              <p className="text-lg text-[#5A4A42] leading-relaxed">
                Olvídate de los masajes dolorosos que dejan moretones. El dispositivo V-Conic aplica impulsos miofasciales de alta precisión que desintegran la rigidez muscular promoviendo el drenaje de toxinas sin maltratar los tejidos.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { t: 'Sin Moretones ni Traumatismos', d: 'Tratamiento suave sobre fascias y capas musculares profundas.' },
                  { t: 'Drenaje Detox Linfático', d: 'Favorece la eliminación natural de lactato y sustancias inflamatorias.' },
                  { t: 'Respaldo Médico QMEDIC', d: 'Supervisión y garantía de más de 27 años en salud integral.' }
                ].map((f) => (
                  <div key={f.t} className="p-4 rounded-2xl bg-white border border-[#EFECE6] space-y-1">
                    <h4 className="font-bold text-base text-[#2C1E18] flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#8C5A3E]" /> {f.t}
                    </h4>
                    <p className="text-sm text-[#5A4A42] font-normal leading-relaxed">{f.d}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-[#8C5A3E]">
                REFLEXOLOGÍA & TÉCNICAS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-tight">
                Reflexología Podal y <span className="text-[#8C5A3E]">Maniobras Suecas</span>
              </h2>
              <p className="text-lg text-[#5A4A42] leading-relaxed">
                Integramos estimulación reflexológica en la planta de los pies para desbloquear vías nerviosas y mejorar el funcionamiento de los órganos, combinado con amasamientos suecos y bambuterapia.
              </p>
              <div className="pt-2">
                <Button
                  variant="clay"
                  size="lg"
                  onClick={onOpenBooking}
                  icon={<Calendar className="w-5 h-5" />}
                  className="px-8 py-4 text-base font-bold shadow-xl hover:scale-105 transition-transform"
                >
                  Agendar Sesión de Reflexología
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-6">
              <AutoVideoCard
                src={relajante2}
                title="Técnicas y Reflexología"
                desc="Masaje corporal completo con reflexología podal."
              />
            </AnimatedSection>
          </div>

        </div>
      </section>

    </div>
  );
};
