import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Global Shell Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AmbientGlow from './components/AmbientGlow';
import IntroSplash from './components/IntroSplash';

// Lazy Loaded Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage'));
const MarcasPage = lazy(() => import('./pages/MarcasPage'));
const ServiciosPage = lazy(() => import('./pages/ServiciosPage'));
const GaleriaPage = lazy(() => import('./pages/GaleriaPage'));
const CotizadorPage = lazy(() => import('./pages/CotizadorPage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        border: '3px solid rgba(230,0,0,0.15)',
        borderTopColor: 'var(--color-primary)',
        animation: 'spin 0.7s linear infinite'
      }} />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app-root" style={{ position: 'relative', overflowX: 'hidden' }}>
      <ScrollToTop />
      
      {/* Cinematic Intro Splash Screen */}
      {showSplash && <IntroSplash onComplete={() => setShowSplash(false)} />}

      <AmbientGlow />
      <Header />

      <main style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/marcas" element={<MarcasPage />} />
                <Route path="/servicios" element={<ServiciosPage />} />
                <Route path="/galeria" element={<GaleriaPage />} />
                <Route path="/cotizador" element={<CotizadorPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
