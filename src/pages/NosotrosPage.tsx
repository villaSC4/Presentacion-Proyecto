import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck, Sparkles,
  MapPin, Calendar, Clock, HeartHandshake, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AnimatedSection } from '../components/ui/AnimatedSection';

import portadaImg from '../assets/img/PORTADA.jpg';
import dreamRelaxImg from '../assets/img/dream relax.png';
import totalRelaxImg from '../assets/img/total relax.png';
import detoxMuscularImg from '../assets/img/Detox Muscular.png';
import detoxSuperiorImg from '../assets/img/Detox Muscular Superior.png';
import detoxInferiorImg from '../assets/img/Detox Muscular Inferior.PNG';
import descontSuperiorImg from '../assets/img/Descontracturante Trend Superior.PNG';
import descontInferiorImg from '../assets/img/Descontracturante Reflex Trend Inferior.PNG';
import masajeDescontImg from '../assets/img/Masaje Descontracturante.jpg';
import relaxResetImg from '../assets/img/Relax Reset.jpg';
import logoImg from '../assets/img/logo.jpeg';
import qmedicLogo from '../assets/img/qmedic_logo.png';

import relajacion2 from '../assets/video/relajacion2.mp4';
import dreamRelaxVideo from '../assets/video/DreamRelax.mp4';
import detoxMuscularVideo from '../assets/video/DetoxMuscular.mp4';

interface NosotrosPageProps {
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

const SERVICES = [
  {
    id: '01',
    category: 'relajantes',
    name: 'Dream Relax',
    subtitle: 'Viaje sensorial de relajación profunda',
    desc: 'Maniobras suaves de cuerpo completo diseñadas para disolver la tensión acumulada, serenar la mente y renovar tu bienestar integral.',
    img: dreamRelaxImg,
    duration: '50 / 80 min',
    price: 'S/120 – S/150',
    badge: 'Popular'
  },
  {
    id: '02',
    category: 'relajantes',
    name: 'Relax Reset',
    subtitle: 'Maniobras profundas + Reflexología Podal',
    desc: 'Combinación ideal de masajes de presión adaptada con reflexología podal para reactivar la energía vital y aliviar el cansancio.',
    img: relaxResetImg,
    duration: '50 min',
    price: 'S/120',
    badge: 'Recomendado'
  },
  {
    id: '03',
    category: 'relajantes',
    name: 'Total Reset',
    subtitle: 'Masaje corporal integral + Reflexología',
    desc: 'Masaje relajante en todo el cuerpo que incluye estimulación de puntos reflexológicos en los pies para liberar bloqueos y pesadez.',
    img: totalRelaxImg,
    duration: '50 / 80 min',
    price: 'S/120 – S/150',
    badge: 'Renovador'
  },
  {
    id: '04',
    category: 'descontracturantes',
    name: 'Masaje Descontracturante',
    subtitle: 'Alta intensidad muscular + Herramientas',
    desc: 'Técnica especializada que combina trabajo manual de presión profunda con herramientas terapéuticas para eliminar nudos y rigidez.',
    img: masajeDescontImg,
    duration: '50 / 80 min',
    price: 'S/120 – S/150',
    badge: 'Alivio Profundo'
  },
  {
    id: '05',
    category: 'descontracturantes',
    name: 'Descontracturante Superior',
    subtitle: 'Cuello, hombros, espalda alta y brazos',
    desc: 'Focalizado en aliviar la tensión cervical, trapecios y hombros sobrecargados por postura de oficina, manejo o estrés cotidiano.',
    img: descontSuperiorImg,
    duration: '50 / 80 min',
    price: 'S/120 – S/150',
    badge: 'Zona Alta'
  },
  {
    id: '06',
    category: 'descontracturantes',
    name: 'Descontracturante Inferior',
    subtitle: 'Zona lumbar, piernas y pies + Reflexología',
    desc: 'Descompresión muscular en cintura, glúteos y piernas complementado con reflexología podal para devolver ligereza al caminar.',
    img: descontInferiorImg,
    duration: '50 / 80 min',
    price: 'S/120 – S/150',
    badge: 'Zona Baja'
  },
  {
    id: '07',
    category: 'detox',
    name: 'Detox Muscular Completo',
    subtitle: 'Tecnología V-Conic + Drenaje Detox',
    desc: 'Tecnología V-Conic exclusiva que actúa sobre la fascia y tejido profundo sin causar dolor ni moretones, acelerando la desinflamación.',
    img: detoxMuscularImg,
    duration: '80 min',
    price: 'S/150',
    badge: 'Tecnología Exclusiva'
  },
  {
    id: '08',
    category: 'detox',
    name: 'Detox Muscular Superior',
    subtitle: 'V-Conic en cuello, hombros y espalda',
    desc: 'Tratamiento V-Conic focalizado en la zona cervical y dorsal para descontracturar sin dolor y recuperar el libre movimiento.',
    img: detoxSuperiorImg,
    duration: '50 / 80 min',
    price: 'S/120 – S/150',
    badge: 'Sin Dolor'
  },
  {
    id: '09',
    category: 'detox',
    name: 'Detox Muscular Inferior',
    subtitle: 'V-Conic en zona lumbar, piernas y pies',
    desc: 'Ideal para dolor de cintura, ciática sutil y piernas cansadas. Restaura la elasticidad muscular y estimula la circulación.',
    img: detoxInferiorImg,
    duration: '50 / 80 min',
    price: 'S/120 – S/150',
    badge: 'Drenaje Activo'
  },
];

function VideoCard({ src, title, desc }: { src: string; title: string; desc: string }) {
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

export const NosotrosPage: React.FC<NosotrosPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'relajantes' | 'descontracturantes' | 'detox'>('todos');

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

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
              CONCEPTO & RESPALDO DE MARCA
            </span>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#3A2820] leading-[1.12] tracking-tight"
          >
            Alivio y Bienestar en Cada Visita
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="text-lg sm:text-xl text-[#5A4A42] leading-relaxed max-w-3xl mx-auto font-normal"
          >
            <strong>RELAX by QMEDIC</strong> es una marca independiente enfocada en bienestar y relajación. 
            Nace a partir de la experiencia de <strong>QMEDIC</strong> y cuenta con su respaldo, 
            pero desarrolla una propuesta, comunicación y experiencia propias.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="pt-4 flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="inline-flex items-center gap-2.5 bg-white border border-[#EFECE6] px-5 py-2.5 rounded-2xl shadow-sm text-sm font-bold text-[#3A2820]"
            >
              <ShieldCheck className="w-5 h-5 text-[#8C5A3E]" />
              <span>Respaldado por 27 años de experiencia en salud y bienestar</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="inline-flex items-center gap-2.5 bg-white border border-[#EFECE6] px-5 py-2.5 rounded-2xl shadow-sm text-sm font-bold text-[#3A2820]"
            >
              <Sparkles className="w-5 h-5 text-[#8C5A3E]" />
              <span>Espacio para desconectarse y reencontrarse consigo mismo</span>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>



      <section className="py-20 lg:py-24 bg-white border-b border-[#EFECE6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">


            <AnimatedSection direction="left" className="lg:col-span-5">
              <div className="mx-auto max-w-md space-y-4">
                

                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F7F3ED] aspect-[4/5] relative group">
                  <img
                    src={portadaImg}
                    alt="Santuario RELAX by QMEDIC — Surco Chacarilla"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                    <span className="text-xs uppercase tracking-widest font-extrabold text-[#E5B869]">
                      Sede Surco – Chacarilla
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white drop-shadow">
                      Tu santuario de alivio y paz
                    </h3>
                  </div>
                </div>


                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#3C2A1E] text-white p-4.5 rounded-2xl shadow-xl flex items-center gap-4 border-2 border-[#B88A75]"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E5B869] shadow-inner">
                    <img src={qmedicLogo} alt="Sello QMEDIC" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#E5B869]">27+ Años de Trayectoria</p>
                    <p className="text-sm font-bold text-white leading-tight">Respaldo Médico QMEDIC</p>
                    <p className="text-xs text-gray-300">Salud y bienestar integral</p>
                  </div>
                </motion.div>

              </div>
            </AnimatedSection>


            <AnimatedSection direction="right" delay={0.15} className="lg:col-span-7 space-y-7">
              <div className="space-y-3">
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-[#8C5A3E]">
                  EXPERIENCIA DE MARCA
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-tight">
                  Más que un masaje.<br />
                  <span className="text-[#8C5A3E]">Un reencuentro contigo.</span>
                </h2>
              </div>

              <p className="text-lg text-[#4A3D36] leading-relaxed">
                <strong>RELAX busca ofrecer un espacio para desconectarse del ruido exterior, liberar tensión y reencontrarse consigo mismo.</strong> Aunque contamos con el respaldo médico y la tradición de 27 años de QMEDIC, nuestra atmósfera está pensada 100% para tu pausa y confort sin ambiente clínico.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Propuesta 100% Propia', desc: 'Identidad, cabinas climatizadas, aromas y protocolos de relajación exclusivos.' },
                  { title: 'Respaldados por QMEDIC', desc: '+27 años de trayectoria cuidando la salud de las familias en Lima.' },
                  { title: 'Botánica Terapéutica', desc: 'Aceites orgánicos 100% naturales para proteger y nutrir tu piel.' },
                  { title: 'Tecnología V-Conic Detox', desc: 'Descontracturación sin dolor ni trauma muscular.' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EFECE6]">
                    <CheckCircle2 className="w-6 h-6 text-[#8C5A3E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-base text-[#2C1E18]">{item.title}</h4>
                      <p className="text-sm text-[#5A4A42] font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-[#8C5A3E] pl-5 py-3 italic text-base text-[#3A2820] font-medium leading-relaxed bg-[#FAF7F2] rounded-r-2xl border-y border-r border-[#EFECE6]">
                "Alivio y bienestar en cada visita: el equilibrio perfecto entre respaldo profesional y relajación absoluta."
              </blockquote>
            </AnimatedSection>

          </div>
        </div>
      </section>



      <section className="py-20 lg:py-28 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">


          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-[#8C5A3E] bg-white px-5 py-2 rounded-full border border-[#EFECE6] shadow-sm inline-block">
              Nuestras 9 Experiencias
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-tight">
              Catálogo de <span className="text-[#8C5A3E]">Masajes & Terapias</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#5A4A42] leading-relaxed">
              Explora las imágenes reales y descripciones de cada experiencia diseñada para tu renovación personal.
            </p>
          </AnimatedSection>


          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'todos', label: 'Todos los Masajes (9)' },
              { id: 'relajantes', label: 'Masajes Relajantes' },
              { id: 'descontracturantes', label: 'Descontracturantes Especiales' },
              { id: 'detox', label: 'V-Conic Detox Sin Dolor' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-6 py-3 rounded-full text-base font-bold transition-all shadow-sm cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#3C2A1E] text-white shadow-md scale-105'
                    : 'bg-white text-[#3A2820] hover:bg-[#F7F3ED] border border-[#EFECE6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>


          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={vp}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.12,
                    ease: ease
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="bg-white rounded-3xl overflow-hidden border-2 border-[#EFECE6] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
                >

                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#3C2A1E] text-[#E5B869] px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md">
                      {service.badge}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-extrabold text-[#8C5A3E] shadow-md border border-gray-200">
                      {service.price}
                    </div>
                  </div>


                  <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <span>Experiencia {service.id}</span>
                        <span className="flex items-center gap-1 text-[#3C2A1E]">
                          <Clock className="w-4 h-4 text-[#8C5A3E]" /> {service.duration}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-2xl text-[#2C1E18] leading-tight group-hover:text-[#8C5A3E] transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-sm font-bold text-[#8C5A3E]">
                        {service.subtitle}
                      </p>

                      <p className="text-base text-[#4A3D36] leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>


                    <div className="pt-3 border-t border-gray-100">
                      <button
                        onClick={onOpenBooking}
                        className="w-full py-3.5 px-5 rounded-2xl bg-[#3C2A1E] text-white font-bold text-sm hover:bg-[#8C5A3E] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer group/btn"
                      >
                        <Calendar className="w-4 h-4 text-[#E5B869]" />
                        <span>Reservar esta experiencia</span>
                        <ChevronRight className="w-4 h-4 text-[#E5B869] group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>



      <section className="py-20 lg:py-28 bg-[#3C2A1E] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14">

          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-[#E5B869] bg-white/10 px-5 py-2 rounded-full border border-white/20 inline-block">
              EN MOVIMIENTO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Siente la <span className="text-[#E5B869]">Experiencia RELAX</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
              Mira cómo cuidamos cada detalle en cabina para brindarte un alivio auténtico.
            </p>
          </AnimatedSection>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <VideoCard
                src={dreamRelaxVideo}
                title="Masajes Relajantes"
                desc="Maniobras envolventes y aceites botánicos calientes."
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <VideoCard
                src={detoxMuscularVideo}
                title="V-Conic Detox Sin Dolor"
                desc="Tecnología avanzada para liberar la fascia muscular."
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <VideoCard
                src={relajacion2}
                title="Ambiente y Santuario"
                desc="Espacios climatizados pensados para tu bienestar total."
              />
            </AnimatedSection>
          </div>


          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              '✦ Aromaterapia 100% Natural',
              '✦ Reflexología Podal',
              '✦ Tecnología V-Conic Detox',
              '✦ Toallas Calientes',
              '✦ Sin Hematomas Ni Dolor'
            ].map((tag) => (
              <span key={tag} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white shadow-sm">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>



      <section className="py-20 lg:py-28 bg-[#F7F3ED] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease }}
            className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-[#EFECE6] shadow-2xl text-center space-y-9 relative overflow-hidden"
          >

            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B88A75]/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="space-y-4 max-w-2xl mx-auto relative z-10">
              <span className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-[#8C5A3E]/30 text-[#8C5A3E] px-5 py-2 rounded-full text-sm font-extrabold">
                <HeartHandshake className="w-4 h-4 text-[#8C5A3E]" />
                Tu Espacio de Pausa y Renovación
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-tight">
                Te Esperamos en Nuestro <br />
                <span className="text-[#8C5A3E]">Santuario de Bienestar</span>
              </h2>

              <p className="text-lg sm:text-xl text-[#5A4A42] leading-relaxed font-normal">
                Visítanos en Surco – Chacarilla y regálate el alivio que mereces con la confianza y garantía de QMEDIC.
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10">
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFECE6] flex flex-col items-center space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#3C2A1E] text-[#E5B869] flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase font-extrabold tracking-wider text-gray-500">Sede Principal</p>
                <p className="text-base font-bold text-[#2C1E18]">Surco – Chacarilla</p>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFECE6] flex flex-col items-center space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#8C5A3E] text-white flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase font-extrabold tracking-wider text-gray-500">Atención WhatsApp</p>
                <a
                  href="https://wa.me/51912680658?text=Hola%2C%20quisiera%20reservar%20una%20sesion%20en%20RELAX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#8C5A3E] hover:underline"
                >
                  912 680 658
                </a>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFECE6] flex flex-col items-center space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#3C2A1E] text-[#E5B869] flex items-center justify-center shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase font-extrabold tracking-wider text-gray-500">Horario de Atención</p>
                <p className="text-base font-bold text-[#2C1E18]">Lun – Sáb · 9am – 6pm</p>
              </div>
            </div>


            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button
                variant="clay"
                size="lg"
                onClick={onOpenBooking}
                icon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto px-9 py-4 text-base font-bold shadow-xl hover:scale-105 transition-transform"
              >
                Reservar mi cita ahora
              </Button>
              <a
                href="https://wa.me/51912680658?text=Hola%2C%20quisiera%20reservar%20una%20experiencia%20RELAX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#8C5A3E] text-white text-base font-bold hover:bg-[#72462E] hover:scale-105 transition-all shadow-xl"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
            </div>


            <div className="pt-6 border-t border-gray-200 flex items-center justify-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#B88A75]">
                <img src={logoImg} alt="RELAX by QMEDIC" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-lg text-[#2C1E18] leading-none">RELAX</p>
                <p className="text-xs font-extrabold tracking-widest uppercase text-[#8C5A3E]">by QMEDIC</p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};
