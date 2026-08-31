import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  Flame, 
  Sparkles, 
  Check, 
  Clock, 
  Heart,
  ChevronRight,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

const culinaryDishes = [
  {
    id: 'chaufa',
    name: 'Arroz Chaufa de Mercado',
    product: 'AJI-NO-SILLAO® + Deli Arroz®',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg',
    tag: 'El Favorito en Puntos de Venta',
    chefSecret: 'El toque de AJI-NO-SILLAO al final del salteado con fuego alto le da el color tostado brillante sin salar en exceso.',
    prepTime: '8 minutos en demostración',
    flavorNotes: ['Umami Profundo', 'Color Caramelo Natural', 'Arroz Graneado Perfecto'],
    tastingsPerDay: '+400 platos servidos'
  },
  {
    id: 'ramen',
    name: 'Sopa Ramen Aji-no-men® Especial',
    product: 'Aji-no-men® Carne y Verduras',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6262.jpg',
    tag: 'Food Styling & Degustación Caliente',
    chefSecret: 'Fideos al dente sumergidos en caldo humeante decorado con huevo de codorniz, cebolla china fresca y gotas de ajonjolí.',
    prepTime: '3 minutos en caliente',
    flavorNotes: ['Caldo Reconfortante', 'Fideos Ondulados', 'Sabor Casero Rápido'],
    tastingsPerDay: '+600 vasitos de degustación'
  },
  {
    id: 'caldo',
    name: 'Caldo de Gallina Concentrado',
    product: 'Doña Gusta® Gallina',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6176.jpg',
    tag: 'Tradición en Pasillos de Abastos',
    chefSecret: 'Doña Gusta disuelto en agua hirviendo con jengibre y fideos cabello de ángel levanta el ánimo en cualquier mañana fría de mercado.',
    prepTime: '5 minutos de infusión',
    flavorNotes: ['Aroma Intenso a Hogar', 'Color Dorado Apetitoso', 'Sazón Rendidor'],
    tastingsPerDay: '+350 vasitos térmicos'
  },
  {
    id: 'umami',
    name: 'Aderezo Criollo Potenciado',
    product: 'AJI-NO-MOTO® Umami',
    image: '/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6016.jpg',
    tag: 'El Secreto Universal de la Casera',
    chefSecret: 'Media cucharadita al terminar el aderezo de cebolla y ajo despierta los azúcares naturales del tomate y la carne.',
    prepTime: '2 minutos de toque final',
    flavorNotes: ['Resalta Sabores Naturales', 'Menos Sal Necesaria', 'Sabor Umami Puro'],
    tastingsPerDay: '+500 contactos demostrados'
  }
];

export default function InteractiveKitchenExperience() {
  const [activeDish, setActiveDish] = useState(culinaryDishes[0]);

  return (
    <section className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-badge">Experiencia Culinaria en Vivo</span>
          <h2 className="section-title">
            El Sazón de <span className="highlight">Nuestros Chefs en Acción</span>
          </h2>
          <p className="section-desc">
            En Lovemark demostramos la calidad de cada producto en vivo frente a las caseras con recetas irresistibles que generan compra inmediata.
          </p>
        </motion.div>

        {/* Interactive Experience Grid */}
        <div style={{
          background: '#fff',
          borderRadius: '30px',
          border: '1px solid var(--color-border)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          padding: '36px'
        }}>
          
          {/* Dish Selector Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '36px' }}>
            {culinaryDishes.map((dish) => {
              const isSelected = activeDish.id === dish.id;
              return (
                <motion.button
                  key={dish.id}
                  onClick={() => setActiveDish(dish)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '18px',
                    textAlign: 'left',
                    background: isSelected ? 'linear-gradient(135deg, var(--color-primary) 0%, #FF1E27 100%)' : 'var(--color-bg-light)',
                    color: isSelected ? '#fff' : 'var(--color-dark)',
                    border: isSelected ? 'none' : '1px solid var(--color-border)',
                    boxShadow: isSelected ? 'var(--shadow-red)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <Utensils size={18} color={isSelected ? '#fff' : 'var(--color-primary)'} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', opacity: isSelected ? 0.9 : 0.7 }}>
                      {dish.product.split('+')[0]}
                    </span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', lineHeight: 1.2 }}>
                    {dish.name}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Dish Showcase Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDish.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}
            >
              
              {/* Left Detail */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '20px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.78rem', marginBottom: '12px' }}>
                  <Flame size={14} />
                  <span>{activeDish.tag}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 900, marginBottom: '6px', color: 'var(--color-dark)' }}>
                  {activeDish.name}
                </h3>
                <div style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '1rem', marginBottom: '18px' }}>
                  Ingrediente Estrella: {activeDish.product}
                </div>

                {/* Chef Secret Box */}
                <div style={{
                  background: 'var(--color-bg-light)',
                  padding: '20px 24px',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                  marginBottom: '24px'
                }}>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 800, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Sparkles size={14} color="var(--color-primary)" />
                    Secreto del Chef Lovemark:
                  </div>
                  <p style={{ fontSize: '0.94rem', color: 'var(--color-dark)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    "{activeDish.chefSecret}"
                  </p>
                </div>

                {/* Flavor Notes Badges */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-text-muted)', marginBottom: '10px' }}>
                    NOTAS DE SABOR Y TEXTURA:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeDish.flavorNotes.map((note, idx) => (
                      <span key={idx} style={{
                        padding: '6px 14px',
                        background: 'rgba(230,0,0,0.06)',
                        border: '1px solid rgba(230,0,0,0.15)',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--color-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <Check size={14} color="var(--color-primary)" />
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <Link to="/cotizador">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn btn-primary"
                  >
                    <Calculator size={16} /> Cotizar Activación con este Plato
                  </motion.button>
                </Link>
              </div>

              {/* Right Visual with Live Badges */}
              <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '420px' }}>
                <img 
                  src={activeDish.image} 
                  alt={activeDish.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Overlay Gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />

                {/* Floating Stat Bottom */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '14px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 800 }}>Impacto Promedio</div>
                    <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{activeDish.tastingsPerDay}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-dark)' }}>
                    <Clock size={16} color="var(--color-primary)" />
                    <span>{activeDish.prepTime}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
