import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Heart, 
  MessageCircle, 
  Share2, 
  Music, 
  Flame, 
  Sparkles, 
  ExternalLink,
  Instagram
} from 'lucide-react';

const reelsData = [
  {
    id: 1,
    title: '¿Cómo preparar el Chaufa con el color exacto? 🍚🔥',
    author: '@lovemarkpublicidad',
    sound: 'Sonido Original - Lovemark Kitchen',
    views: '485.2K',
    likes: '42.8K',
    comments: '1,240',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg',
    tag: '#AJINOSILLAO #DeliArroz',
    tiktokUrl: 'https://www.tiktok.com/@lovemarkpublicidad?_r=1&_t=ZS-99GgOCVgIdj'
  },
  {
    id: 2,
    title: 'Sopa Aji-no-men humeante en plena mañana de mercado 🍜✨',
    author: '@lovemarkpublicidad',
    sound: 'Tendencia Gastronómica Perú',
    views: '610.5K',
    likes: '58.3K',
    comments: '2,180',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6262.jpg',
    tag: '#Ajinomen #FoodStyling',
    tiktokUrl: 'https://www.tiktok.com/@lovemarkpublicidad?_r=1&_t=ZS-99GgOCVgIdj'
  },
  {
    id: 3,
    title: '¡Mochila chocolatada Miski Simi en acción! 🍫🏃‍♀️',
    author: '@lovemarkpublicidad',
    sound: 'Muestreo Criollo - Beat Oficial',
    views: '340.1K',
    likes: '31.5K',
    comments: '890',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_0797.jpg',
    tag: '#MiskiSimi #SamplingBTL',
    tiktokUrl: 'https://www.tiktok.com/@lovemarkpublicidad?_r=1&_t=ZS-99GgOCVgIdj'
  },
  {
    id: 4,
    title: 'Probando aderezos secretos en nuestro Kitchen Lab 👩‍🍳❤️',
    author: '@lovemarkpublicidad',
    sound: 'Sazón Peruano - Chef LM',
    views: '295.4K',
    likes: '27.1K',
    comments: '640',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6334.jpg',
    tag: '#Ajinomoto #KitchenLab',
    tiktokUrl: 'https://www.tiktok.com/@lovemarkpublicidad?_r=1&_t=ZS-99GgOCVgIdj'
  }
];

export default function TikTokFeedShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '999px', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.08)', marginBottom: '16px' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#FE2C55', animation: 'pulse-ring 1.5s infinite' }}></span>
            <span style={{ fontWeight: 800, fontSize: '0.84rem', color: '#111', letterSpacing: '0.5px' }}>
              EN VIVO EN TIKTOK & INSTAGRAM
            </span>
          </div>

          <h2 className="section-title">
            El Concepto Viral de <span className="highlight">@lovemarkpublicidad</span>
          </h2>
          <p className="section-desc">
            Así conectamos con millones de personas: detrás de cámaras auténticos, recetas peruanas rápidas y la energía de nuestros promotores en las calles.
          </p>
        </motion.div>

        {/* Reels Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px', marginBottom: '45px' }}>
          {reelsData.map((reel, idx) => (
            <motion.a
              key={reel.id}
              href={reel.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard(reel.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                position: 'relative',
                height: '460px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: hoveredCard === reel.id ? '0 20px 40px rgba(230,0,0,0.25)' : 'var(--shadow-md)',
                border: hoveredCard === reel.id ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              {/* Background Image */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
                <img 
                  src={reel.image} 
                  alt={reel.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: hoveredCard === reel.id ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)'
                }} />
              </div>

              {/* Card Top: Live Badge & Views */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  background: 'rgba(254, 44, 85, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Flame size={13} /> {reel.views} vistas
                </span>

                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.18 1.19 2.12 2.37 2.34.62.13 1.27.09 1.87-.1 1.05-.33 1.86-1.19 2.16-2.23.19-.62.24-1.27.24-1.91V.02h-3.23z"/>
                  </svg>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div style={{ position: 'relative', zIndex: 2, alignSelf: 'center' }}>
                <motion.div
                  animate={{ scale: hoveredCard === reel.id ? 1.15 : 1 }}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(230, 0, 0, 0.85)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 8px 24px rgba(230,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  <Play size={24} fill="#fff" style={{ marginLeft: '3px' }} />
                </motion.div>
              </div>

              {/* Card Bottom: Content & Stats */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ color: 'var(--color-primary-light)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.5px' }}>
                  {reel.tag}
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.02rem', fontWeight: 800, lineHeight: 1.35, margin: '6px 0 10px', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                  {reel.title}
                </h4>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', opacity: 0.9 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Music size={13} />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>
                      {reel.sound}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Heart size={13} fill="#FE2C55" color="#FE2C55" /> {reel.likes}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <MessageCircle size={13} /> {reel.comments}
                    </span>
                  </div>
                </div>
              </div>

            </motion.a>
          ))}
        </div>

        {/* Action Buttons to Social Profiles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
        >
          <a 
            href="https://www.tiktok.com/@lovemarkpublicidad?_r=1&_t=ZS-99GgOCVgIdj" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-dark btn-lg"
            style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.18 1.19 2.12 2.37 2.34.62.13 1.27.09 1.87-.1 1.05-.33 1.86-1.19 2.16-2.23.19-.62.24-1.27.24-1.91V.02h-3.23z"/>
            </svg>
            <span>Ver TikTok Oficial @lovemarkpublicidad</span>
            <ExternalLink size={15} />
          </a>

          <a 
            href="https://www.instagram.com/lovemarkpublicidad?igsi=MTNoOTFpNWdqNjZqYQ==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-lg"
            style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
          >
            <Instagram size={18} style={{ marginRight: '6px' }} />
            <span>Seguir en Instagram</span>
            <ExternalLink size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
