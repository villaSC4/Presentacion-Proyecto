import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-cols-grid">
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img 
                src="/audiovisual/LOVE-MARK-BLANCO.png" 
                alt="Lovemark Blanco" 
                style={{ height: '44px', width: 'auto' }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.5px' }}>
                LOVE<span style={{ color: 'var(--color-primary)' }}>MARK</span>
              </span>
            </div>
            <p className="footer-desc-text">
              Agencia líder en Trade Marketing, Activaciones BTL, Producción Gastronómica y Cobertura Nacional para todas las marcas de Ajinomoto del Perú.
            </p>
            <div className="footer-social-row">
              <a 
                href="https://www.tiktok.com/@lovemarkpublicidad?_r=1&_t=ZS-99GgOCVgIdj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="TikTok @lovemarkpublicidad"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.18 1.19 2.12 2.37 2.34.62.13 1.27.09 1.87-.1 1.05-.33 1.86-1.19 2.16-2.23.19-.62.24-1.27.24-1.91V.02h-3.23z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/lovemarkpublicidad?igsi=MTNoOTFpNWdqNjZqYQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="Instagram @lovemarkpublicidad"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/51999999999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="WhatsApp Directo"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Universe Ajinomoto Links */}
          <div>
            <h4 className="footer-title-heading">Marcas Ajinomoto</h4>
            <div className="footer-nav-list">
              <Link to="/marcas" className="footer-nav-item">AJI-NO-MOTO® Umami</Link>
              <Link to="/marcas" className="footer-nav-item">Aji-no-men® Ramen</Link>
              <Link to="/marcas" className="footer-nav-item">Doña Gusta® Caldos</Link>
              <Link to="/marcas" className="footer-nav-item">Deli Arroz® Sazonador</Link>
              <Link to="/marcas" className="footer-nav-item">AJI-NO-SILLAO® Premium</Link>
              <Link to="/marcas" className="footer-nav-item">Miski Simi® Sampling</Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="footer-title-heading">Servicios 360°</h4>
            <div className="footer-nav-list">
              <Link to="/servicios" className="footer-nav-item">Activaciones BTL en Mercados</Link>
              <Link to="/servicios" className="footer-nav-item">Chefs e Impulsación</Link>
              <Link to="/servicios" className="footer-nav-item">Food Styling & Foto HD</Link>
              <Link to="/servicios" className="footer-nav-item">TikTok & Contenido Viral</Link>
              <Link to="/servicios" className="footer-nav-item">Material POP y Módulos</Link>
              <Link to="/cotizador" className="footer-nav-item">Cotizador de Campañas</Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="footer-title-heading">Navegación</h4>
            <div className="footer-nav-list">
              <Link to="/" className="footer-nav-item">Inicio</Link>
              <Link to="/marcas" className="footer-nav-item">Marcas Ajinomoto</Link>
              <Link to="/servicios" className="footer-nav-item">Servicios 360</Link>
              <Link to="/galeria" className="footer-nav-item">Galería BTL</Link>
              <Link to="/nosotros" className="footer-nav-item">Concepto Lovemark</Link>
              <Link to="/contacto" className="footer-nav-item">Contacto & FAQ</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} <strong>LOVEMARK</strong>. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Especialistas en el Universo de</span>
            <strong style={{ color: 'var(--color-primary-light)' }}>Ajinomoto del Perú</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
