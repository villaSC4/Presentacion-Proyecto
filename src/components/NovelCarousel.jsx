import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Flame, Eye } from 'lucide-react';

const carouselSlides = [
  {
    id: 1,
    title: 'Chefs en Acción: Chaufa Criollo en Vivo',
    subtitle: 'Mercado Central • AJI-NO-SILLAO & Deli Arroz',
    tag: 'BTL & Cocina en Vivo',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg',
    metric: '+450 Degustaciones'
  },
  {
    id: 2,
    title: 'Food Styling de Alta Definición: Sabor Ramen',
    subtitle: 'Kitchen Lab • Campaña Aji-no-men',
    tag: 'Producción Gastronómica',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6262.jpg',
    metric: 'Resolución 4K Ultra HD'
  },
  {
    id: 3,
    title: 'Muestreo Móvil Itinerante con Mochila Térmica',
    subtitle: 'Pasillos y Paradas • Miski Simi',
    tag: 'Sampling Directo',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_0797.jpg',
    metric: '+65K Muestras Entregadas'
  },
  {
    id: 4,
    title: 'Tradición y Caldo Caliente en Puesto de Abarrotes',
    subtitle: 'Mercado Mayorista • Doña Gusta',
    tag: 'Trade Marketing PDV',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6176.jpg',
    metric: '98.5% Aceptación'
  },
  {
    id: 5,
    title: 'Detrás de Cámaras: Creación y Pruebas Culinarias',
    subtitle: 'Estudio Creativo • Lovemark Team',
    tag: 'Behind the Scenes',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6334.jpg',
    metric: '100% Contenido Propio'
  },
  {
    id: 6,
    title: 'Texturas y Sabor Concentrado al Detalle',
    subtitle: 'Sesión Publicitaria • Aji-no-men',
    tag: 'Macro Fotografía',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6270.jpg',
    metric: '+85 Contenidos Virales'
  }
];

export default function NovelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  // Helper to calculate relative distance for 3D depth
  const getSlideProps = (index) => {
    const total = carouselSlides.length;
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;

    const isActive = diff === 0;
    const isPrev = diff === -1 || (currentIndex === 0 && index === total - 1);
    const isNext = diff === 1 || (currentIndex === total - 1 && index === 0);

    return {
      isActive,
      isPrev,
      isNext,
      diff,
    };
  };

  return (
    <section 
      className="section" 
      style={{ 
        paddingTop: '40px', 
        paddingBottom: '70px', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '35px' }}>
          <span className="section-badge">Experiencias Visuales en Alta Gama</span>
          <h2 className="section-title">
            Momentos de Impacto <span className="highlight">Lovemark</span>
          </h2>
          <p className="section-desc">
            Desliza para explorar la pasión de nuestro equipo en los mercados, la cocina y los sets fotográficos.
          </p>
        </div>

        {/* 3D Showcase Carousel Container */}
        <div style={{ position: 'relative', maxWidth: '1080px', margin: '0 auto', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px' }}>
            {carouselSlides.map((slide, idx) => {
              const { isActive, diff } = getSlideProps(idx);
              const isVisible = Math.abs(diff) <= 2;

              if (!isVisible) return null;

              // Calculate 3D transformation values
              const xOffset = diff * 280; // horizontal separation
              const zOffset = -Math.abs(diff) * 160; // depth
              const rotateY = diff * -18; // 3D tilt angle
              const scale = isActive ? 1 : 0.85;
              const opacity = isActive ? 1 : Math.abs(diff) === 1 ? 0.65 : 0.3;
              const zIndex = 10 - Math.abs(diff);

              return (
                <motion.div
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  animate={{
                    x: xOffset,
                    z: zOffset,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                  }}
                  style={{
                    position: 'absolute',
                    width: '580px',
                    height: '400px',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    cursor: isActive ? 'default' : 'pointer',
                    boxShadow: isActive 
                      ? '0 25px 50px -12px rgba(230, 0, 0, 0.35), 0 0 25px rgba(230, 0, 0, 0.18)' 
                      : '0 15px 30px rgba(0, 0, 0, 0.2)',
                    border: isActive ? '3px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.6)',
                    background: '#18181B',
                    zIndex: zIndex,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity',
                  }}
                >
                  {/* Slide Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: isActive ? 'brightness(1)' : 'brightness(0.7)',
                      transition: 'filter 0.4s ease',
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '28px',
                      color: '#fff',
                    }}
                  >
                    {/* Top Pill Badges */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          background: 'rgba(230, 0, 0, 0.88)',
                          backdropFilter: 'blur(8px)',
                          padding: '5px 14px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {slide.tag}
                      </span>

                      <span
                        style={{
                          background: 'rgba(0, 0, 0, 0.6)',
                          backdropFilter: 'blur(8px)',
                          padding: '5px 12px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#FDE047',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        <Sparkles size={13} /> {slide.metric}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: isActive ? '1.5rem' : '1.2rem',
                          fontWeight: 900,
                          lineHeight: 1.25,
                          marginBottom: '6px',
                          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                          transition: 'font-size 0.3s ease',
                        }}
                      >
                        {slide.title}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Anterior diapositiva"
            style={{
              position: 'absolute',
              left: '10px',
              zIndex: 20,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-dark)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = 'var(--color-dark)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Siguiente diapositiva"
            style={{
              position: 'absolute',
              right: '10px',
              zIndex: 20,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-dark)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = 'var(--color-dark)';
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Pagination Dots & Progress */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {carouselSlides.map((_, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir a diapositiva ${idx + 1}`}
                style={{
                  width: isActive ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  background: isActive ? 'var(--color-primary)' : 'rgba(0, 0, 0, 0.18)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
