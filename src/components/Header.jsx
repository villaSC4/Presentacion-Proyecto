import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Calculator, 
  Send, 
  ChevronRight
} from 'lucide-react';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Marcas', path: '/marcas' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Nosotros', path: '/nosotros' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="header-wrapper">
      <div className={`header-inner ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          
          {/* Brand Logo - Clean Lovemark */}
          <Link to="/" className="brand-link">
            <motion.img 
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              src="/audiovisual/LOVE-MARK-ROJO.png" 
              alt="Lovemark Logo" 
              className="brand-logo" 
            />
            <span className="brand-name-single">
              LOVE<span>MARK</span>
            </span>
          </Link>

          {/* Desktop Navigation Bar */}
          <nav className="nav-links-list">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                >
                  <span className="nav-text">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <Link to="/cotizador">
              <motion.button 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-secondary btn-sm nav-action-btn"
              >
                <Calculator size={14} />
                <span>Cotizador</span>
              </motion.button>
            </Link>

            <Link to="/contacto">
              <motion.button 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-primary btn-sm nav-action-btn"
              >
                <Send size={14} />
                <span>Contacto</span>
              </motion.button>
            </Link>

            {/* Mobile Hamburger */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div 
              className="mobile-drawer-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-header">
                <div className="brand-link">
                  <img src="/audiovisual/LOVE-MARK-ROJO.png" alt="Lovemark" style={{ height: '34px' }} />
                  <span className="brand-name-single">LOVE<span>MARK</span></span>
                </div>
                <button onClick={() => setMobileOpen(false)} style={{ background: 'none', cursor: 'pointer', padding: '4px' }}>
                  <X size={22} />
                </button>
              </div>

              <div className="mobile-nav-links">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight size={16} color={isActive ? 'var(--color-primary)' : '#A1A1AA'} />
                    </NavLink>
                  );
                })}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <Link to="/cotizador">
                  <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                    <Calculator size={15} /> Cotizar Campaña BTL
                  </button>
                </Link>
                <Link to="/contacto">
                  <button className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                    <Send size={15} /> Contactar Lovemark
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
