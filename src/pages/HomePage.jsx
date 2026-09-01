import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Flame, 
  ArrowRight, 
  Users, 
  Sparkles, 
  Camera, 
  Calculator,
  Utensils,
  Layers,
  Store,
  CheckCircle2
} from 'lucide-react';
import BrandMarquee from '../components/BrandMarquee';
import NovelCarousel from '../components/NovelCarousel';
import InteractiveKitchenExperience from '../components/InteractiveKitchenExperience';
import TikTokFeedShowcase from '../components/TikTokFeedShowcase';

const scrollAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

export default function HomePage() {
  return (
    <div className="home-page">
      
      {/* =====================================================================
          Hero Section
          ===================================================================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            
            {/* Hero Left Content */}
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >

              <h1 className="hero-heading">
                Convertimos Marcas en <span className="gradient-text">Lovemarks</span> Inolvidables
              </h1>

              <p className="hero-subtext">
                Llevamos las marcas de <strong>Ajinomoto</strong> al corazón del consumidor peruano. Diseñamos activaciones BTL masivas en mercados populares, producción gastronómica de alto impacto y experiencias culinarias en vivo.
              </p>

              <div className="hero-btn-group">
                <Link to="/marcas">
                  <motion.button 
                    whileHover={{ scale: 1.04, y: -2 }} 
                    whileTap={{ scale: 0.96 }} 
                    className="btn btn-primary btn-lg"
                  >
                    <Flame size={18} /> Explorar Marcas Ajinomoto
                  </motion.button>
                </Link>

                <Link to="/servicios">
                  <motion.button 
                    whileHover={{ scale: 1.04, y: -2 }} 
                    whileTap={{ scale: 0.96 }} 
                    className="btn btn-secondary btn-lg"
                  >
                    <Layers size={18} /> Servicios 360°
                  </motion.button>
                </Link>
              </div>

              {/* Stats Row */}
              <div className="hero-stats-row">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">100<span>%</span></div>
                  <div className="hero-stat-label">Marcas Ajinomoto Gestionadas</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">+500<span>K</span></div>
                  <div className="hero-stat-label">Degustaciones en Mercados</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">+98<span>%</span></div>
                  <div className="hero-stat-label">Efectividad y Aceptación en PDV</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Visual */}
            <motion.div 
              className="hero-visual-box"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Floating Badge 1 */}
              <motion.div 
                className="floating-pill floating-pill-1"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="pill-icon pill-icon-red">
                  <Heart size={20} />
                </div>
                <div>
                  <div className="pill-title">Efecto Lovemark</div>
                  <div className="pill-sub">Fidelidad y amor de marca</div>
                </div>
              </motion.div>

              {/* Main Card */}
              <div className="hero-card-featured">
                <div className="hero-img-box">
                  <img 
                    src="/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg" 
                    alt="Activación AJI-NO-SILLAO Lovemark" 
                    loading="eager"
                  />
                  <div className="hero-overlay-info">
                    <span className="hero-overlay-tag">Campaña Activa en Mercados</span>
                    <h3 className="hero-overlay-title">Degustación AJI-NO-SILLAO & Deli Arroz</h3>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <motion.div 
                className="floating-pill floating-pill-2"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="pill-icon pill-icon-green">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="pill-title">Chefs Profesionales</div>
                  <div className="pill-sub">Demostraciones en vivo</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <BrandMarquee />

      {/* =====================================================================
          Novel 3D Carousel Section
          ===================================================================== */}
      <NovelCarousel />

      {/* =====================================================================
          Concept Preview Section with Scroll Animations
          ===================================================================== */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            
            <motion.div {...scrollAnimation}>
              <span className="section-badge">Nuestra Filosofía</span>
              <h2 className="section-title">
                No solo vendemos productos, creamos <span className="highlight">lealtad más allá de la razón</span>
              </h2>
              <p className="section-desc" style={{ marginBottom: '18px' }}>
                En <strong>Lovemark</strong> entendemos que el consumidor peruano elige las marcas que tocan sus emociones familiares y su amor por la cocina.
              </p>
              <p className="section-desc" style={{ marginBottom: '28px' }}>
                Conectamos los mercados tradicionales de abasto con la cultura viral de <strong>TikTok e Instagram</strong> para que productos como <em>AJI-NO-MOTO®, Aji-no-men® o Doña Gusta®</em> sigan siendo los reyes indiscutibles de la mesa.
              </p>
              <Link to="/nosotros">
                <motion.button 
                  whileHover={{ scale: 1.03, x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary"
                >
                  <span>Conocer el Concepto Lovemark</span> <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              {...scrollAnimation}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
            >
              <motion.div 
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)', transition: 'all 0.3s ease' }}
              >
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Heart size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>Amor y Conexión</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Vínculos emocionales que convierten clientes en fanáticos devotos.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)', transition: 'all 0.3s ease' }}
              >
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Utensils size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>Chefs en Vivo</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Demostraciones culinarias directas que antojan y convencen al instante.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)', transition: 'all 0.3s ease' }}
              >
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Camera size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>Food Styling HD</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Producción fotográfica profesional donde cada fideo luce apetitoso.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)', transition: 'all 0.3s ease' }}
              >
                <div style={{ width: '44px', height: '44px', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Store size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>Dominio de Mercados</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Despliegue estratégico en mercados mayoristas y paradas de abastos.</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          Interactive Kitchen Experience Section
          ===================================================================== */}
      <InteractiveKitchenExperience />

      {/* =====================================================================
          Ajinomoto Universe Teaser with Scroll Animations
          ===================================================================== */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" {...scrollAnimation}>
            <span className="section-badge">Portafolio Gestionado</span>
            <h2 className="section-title">El Ecosistema Oficial de <span className="highlight">Ajinomoto</span></h2>
            <p className="section-desc">
              Campañas de Trade Marketing y BTL a la medida de cada marca líder en Perú.
            </p>
          </motion.div>

          <div className="brands-grid">
            {/* Card 1 */}
            <motion.div 
              className="brand-card-item"
              {...scrollAnimation}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="brand-img-wrap">
                <img src="/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6016.jpg" alt="AJI-NO-MOTO" loading="lazy" />
                <span className="brand-tag-badge">El Sazón Umami</span>
              </div>
              <div className="brand-info-body">
                <span className="brand-category-label">Sazonador Universal</span>
                <h3 className="brand-title-text">AJI-NO-MOTO®</h3>
                <p className="brand-desc-text">Activaciones en puestos de verduras, abarrotes y mercados mayoristas con chefs demostradores.</p>
                <Link to="/marcas" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Ver detalles de activación <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="brand-card-item"
              {...scrollAnimation}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="brand-img-wrap">
                <img src="/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6262.jpg" alt="Aji-no-men" loading="lazy" />
                <span className="brand-tag-badge">Food Styling & Sabor</span>
              </div>
              <div className="brand-info-body">
                <span className="brand-category-label">Sopas Instantáneas</span>
                <h3 className="brand-title-text">Aji-no-men®</h3>
                <p className="brand-desc-text">Food styling cinematográfico, recetas rápidas para TikTok y degustaciones humeantes en galerías.</p>
                <Link to="/marcas" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Ver detalles de activación <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="brand-card-item"
              {...scrollAnimation}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="brand-img-wrap">
                <img src="/audiovisual/wetransfer_img_0797-jpg_2026-08-27_2147/IMG_6087.jpg" alt="AJI-NO-SILLAO" loading="lazy" />
                <span className="brand-tag-badge">Calidad Premium</span>
              </div>
              <div className="brand-info-body">
                <span className="brand-category-label">Sillao & Deli Arroz</span>
                <h3 className="brand-title-text">AJI-NO-SILLAO® & Deli Arroz</h3>
                <p className="brand-desc-text">Impulsación con chefs uniformados, entrega de recetarios de arroces criollos y degustación directa.</p>
                <Link to="/marcas" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Ver detalles de activación <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div style={{ textAlign: 'center', marginTop: '40px' }} {...scrollAnimation}>
            <Link to="/marcas">
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-secondary btn-lg"
              >
                <Sparkles size={18} /> Ver Todas las Marcas Ajinomoto
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          TikTok & Instagram Social Creator Hub
          ===================================================================== */}
      <TikTokFeedShowcase />

      {/* =====================================================================
          CTA Quote Box with Scroll Animation
          ===================================================================== */}
      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(230,0,0,0.06) 0%, rgba(255,255,255,1) 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <motion.div {...scrollAnimation}>
            <span className="section-badge">Comienza Ahora</span>
            <h2 className="section-title">¿Listo para activar tu próxima campaña con Lovemark?</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Calcula los costos de promotores, degustaciones y cobertura en nuestro cotizador interactivo o coordina directamente con nuestro equipo.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/cotizador">
                <motion.button 
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-primary btn-lg"
                >
                  <Calculator size={18} /> Ir al Cotizador BTL
                </motion.button>
              </Link>
              <Link to="/contacto">
                <motion.button 
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-secondary btn-lg"
                >
                  <Users size={18} /> Contactar a Lovemark
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
