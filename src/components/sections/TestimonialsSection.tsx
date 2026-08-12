import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

const AVATAR_COLORS = [
  { bg: '#EDE0D4', text: '#8C5A3E' },
  { bg: '#D6E4DA', text: '#3D4A41' },
  { bg: '#E8D8C8', text: '#7A4D2E' },
  { bg: '#DDDCE6', text: '#4A3E6B' },
  { bg: '#F0E6CC', text: '#7A5C1E' },
];

const DUPLICATED = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

const TestimonialCard: React.FC<{ t: typeof TESTIMONIALS[0]; colorIdx: number }> = ({ t, colorIdx }) => {
  const color = AVATAR_COLORS[colorIdx % AVATAR_COLORS.length];
  const initials = t.author.split(' ').slice(0, 2).map(w => w[0]).join('');

  return (
    <div
      className="flex-shrink-0 bg-[#FAF8F5] rounded-3xl border border-[#EFECE6] shadow-sm p-7 flex flex-col gap-4 mx-3"
      style={{ width: '340px' }}
    >

      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-lg shadow-sm border border-white/60"
          style={{ background: color.bg, color: color.text }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-sm text-[#2A2826] truncate">{t.author}</p>
          <p className="text-[10px] text-[#8C5A3E] font-semibold truncate">{t.role}</p>
        </div>
        <div className="flex gap-0.5 shrink-0">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
          ))}
        </div>
      </div>

      <Quote className="w-5 h-5 text-[#CBB5A1]" />

      <p className="text-sm text-[#4A3E3D] leading-relaxed line-clamp-4 flex-1">
        "{t.comment}"
      </p>

      <div className="pt-3 border-t border-[#EFECE6] space-y-1">
        <p className="text-[10px] font-semibold text-[#8C5A3E]">Tratamiento: {t.treatment}</p>
        <div className="flex items-center gap-2 text-[10px] text-[#6B6763]">
          <MapPin className="w-3 h-3 text-[#CBB5A1]" />
          <span>{t.location}</span>
          <span>·</span>
          <span>{t.date}</span>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);


  const [isPaused, setIsPaused] = useState(false);

  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);

  const SPEED = 1.2;


  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });


  const getSingleSetWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 4;
  }, []);


  useEffect(() => {
    const step = () => {
      if (!isPaused && !isDragging.current) {
        posRef.current += SPEED;
        const setWidth = getSingleSetWidth();
        if (setWidth > 0 && posRef.current >= setWidth) {
          posRef.current -= setWidth;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, getSingleSetWidth]);


  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    e.preventDefault();
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.clientX;
    let newPos = dragStartPos.current + delta;
    const setWidth = getSingleSetWidth();
    if (setWidth > 0) {

      newPos = ((newPos % setWidth) + setWidth) % setWidth;
    }
    posRef.current = newPos;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  }, [getSingleSetWidth]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);


  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartPos.current = posRef.current;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.touches[0].clientX;
    let newPos = dragStartPos.current + delta;
    const setWidth = getSingleSetWidth();
    if (setWidth > 0) {
      newPos = ((newPos % setWidth) + setWidth) % setWidth;
    }
    posRef.current = newPos;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
      className="py-20 bg-white border-t border-[#EFECE6] relative overflow-hidden"
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto mb-14 space-y-3"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
          Experiencia & Opiniones
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826]">
          Lo que Dicen Nuestros Pacientes
        </h2>
        <p className="text-sm text-[#6B6763]">
          Historias reales de personas que han recuperado su bienestar y tranquilidad en Relax by Qmedic.
        </p>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="overflow-hidden select-none"
        style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); isDragging.current = false; }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ width: 'max-content' }}
        >
          {DUPLICATED.map((t, idx) => (
            <TestimonialCard
              key={`${t.id}-${idx}`}
              t={t}
              colorIdx={idx % TESTIMONIALS.length}
            />
          ))}
        </div>
      </motion.div>


      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-center text-[11px] text-[#CBB5A1] mt-6 tracking-widest uppercase font-semibold"
      >
        Arrastra o pasa el cursor para interactuar
      </motion.p>
    </motion.section>
  );
};
