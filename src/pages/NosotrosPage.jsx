import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Utensils, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import PageHero from '../components/PageHero';

const scrollAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
};

export default function NosotrosPage() {
  return (
    <div className="nosotros-page">
      <PageHero 
        badge="Nuestra Esencia"
        title="El Concepto"
        highlight="Lovemark"
        description="Transformamos marcas ordinarias en marcas amadas que conquistan el corazón y la mesa de los hogares peruanos."
      />

      {/* =====================================================================
          Philosophy In-Depth
          ===================================================================== */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
            <motion.div {...scrollAnimation}>
              <span className="section-badge">¿Qué es una Lovemark?</span>
              <h2 className="section-title">
                Lealtad que va <span className="highlight">más allá de la razón</span>
              </h2>
              <p className="section-desc" style={{ marginBottom: '18px' }}>
                En el marketing tradicional, los productos se venden por precio, empaque o necesidad básica. Una <strong>Lovemark</strong>, en cambio, genera devoción incondicional, misterio, sensualidad e intimidad.
              </p>
              <p className="section-desc" style={{ marginBottom: '18px' }}>
                Las marcas de <strong>Ajinomoto del Perú</strong> representan exactamente esto: forman parte de la memoria gustativa y el cariño familiar de millones de peruanos desde hace más de 50 años.
              </p>
              <p className="section-desc" style={{ marginBottom: '28px' }}>
                En <strong>Lovemark</strong> somos los guardianes de ese vínculo. Diseñamos experiencias vivenciales en los mercados de abasto, degustaciones calientes con chefs profesionales y contenido dinámico para redes que mantiene ese amor vivo en las nuevas generaciones.
              </p>

              <Link to="/marcas">
                <motion.button 
                  whileHover={{ scale: 1.03, x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary"
                >
                  <span>Ver Nuestro Trabajo con Ajinomoto</span> <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              {...scrollAnimation}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ position: 'relative' }}
            >
              <img 
                src="/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg" 
                alt="Activación Lovemark con consumidora"
                style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '16px 20px',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(230,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Heart size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0 }}>Cercanía en el Mercado</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>Conectando cara a cara con la casera y el ama de casa.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          The 4 Pillars of Lovemark
          ===================================================================== */}
      <section className="section section-alt">
        <div className="container">
          <motion.div className="section-header" {...scrollAnimation}>
            <span className="section-badge">Nuestros Pilares</span>
            <h2 className="section-title">Los 4 Fundamentos de <span className="highlight">Nuestra Ejecución</span></h2>
            <p className="section-desc">
              Cada acción en campo y campaña digital responde a un método probado para generar retorno y amor de marca.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <motion.div 
              {...scrollAnimation}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-md)' }}
              style={{ background: '#fff', padding: '32px 26px', borderRadius: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Heart size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px' }}>1. Conexión Sensorial</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                El olor a sopa caliente Aji-no-men, el brillo de una comida sazonada con AJI-NO-SILLAO y la calidez del trato humano de nuestras promotoras.
              </p>
            </motion.div>

            <motion.div 
              {...scrollAnimation}
              transition={{ duration: 0.55, delay: 0.1 }}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-md)' }}
              style={{ background: '#fff', padding: '32px 26px', borderRadius: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px' }}>2. Dominio del PDV</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                Conocemos al detalle la dinámica de los mercados mayoristas, paradas de abastos, supermercados y bodegas en Lima y provincias.
              </p>
            </motion.div>

            <motion.div 
              {...scrollAnimation}
              transition={{ duration: 0.55, delay: 0.2 }}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-md)' }}
              style={{ background: '#fff', padding: '32px 26px', borderRadius: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Utensils size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px' }}>3. Maestría Culinaria</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                No colocamos impulsadores improvisados: contamos con chefs demostradores que preparan recetas en vivo con la sazón y técnica perfecta.
              </p>
            </motion.div>

            <motion.div 
              {...scrollAnimation}
              transition={{ duration: 0.55, delay: 0.3 }}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-md)' }}
              style={{ background: '#fff', padding: '32px 26px', borderRadius: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', transition: 'all 0.3s ease' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px' }}>4. Rigor Operativo</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                Supervisión permanente en campo que garantiza puntualidad, uniformes de alta gama y cumplimiento de metas de contacto.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          Kitchen Lab & Studio with Scroll Animations
          ===================================================================== */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '50px', alignItems: 'center' }}>
            <motion.div {...scrollAnimation}>
              <img 
                src="/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6334.jpg" 
                alt="Lovemark Kitchen Lab"
                style={{ borderRadius: '20px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)' }}
              />
            </motion.div>

            <motion.div {...scrollAnimation} transition={{ duration: 0.55, delay: 0.15 }}>
              <span className="section-badge">Cocina & Producción</span>
              <h2 className="section-title">
                Lovemark <span className="highlight">Kitchen Lab</span>
              </h2>
              <p className="section-desc" style={{ marginBottom: '18px' }}>
                Dentro de nuestras instalaciones contamos con un espacio dedicado a la experimentación gastronómica, pruebas de rendimiento de producto y grabación de contenido.
              </p>
              <p className="section-desc" style={{ marginBottom: '24px' }}>
                Aquí es donde nacen las recetas que nuestros chefs replican en ferias, los platos estilizados para sesiones de fotos publicitarias y los trends culinarios que compartimos en <strong>TikTok</strong>.
              </p>
              <Link to="/galeria">
                <motion.button 
                  whileHover={{ scale: 1.03, x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-secondary"
                >
                  <span>Ver Galería de Producción</span> <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
