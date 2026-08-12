import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BookingModal } from './components/booking/BookingModal';
import { FloatingCTA } from './components/ui/FloatingCTA';

import { Home } from './pages/Home';
import { CatalogPage } from './pages/CatalogPage';
import { QuiropracticaPage } from './pages/QuiropracticaPage';
import { IngredientesPage } from './pages/IngredientesPage';
import { ContactoPage } from './pages/ContactoPage';

// Scroll to top helper component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Transition Wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export const AppContent: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [initialServiceId, setInitialServiceId] = useState<string | undefined>(undefined);
  const location = useLocation();

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setInitialServiceId(serviceId);
    } else {
      setInitialServiceId(undefined);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#2A2826] font-sans antialiased selection:bg-[#8C5A3E] selection:text-white">
      <ScrollToTop />
      
      {/* Sticky Glass Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content with Animated Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home
                    onOpenBooking={() => handleOpenBooking()}
                    onSelectService={(id) => handleOpenBooking(id)}
                  />
                </PageTransition>
              }
            />
            <Route
              path="/servicios"
              element={
                <PageTransition>
                  <CatalogPage onSelectService={(id) => handleOpenBooking(id)} />
                </PageTransition>
              }
            />
            <Route
              path="/catalogo"
              element={
                <PageTransition>
                  <CatalogPage onSelectService={(id) => handleOpenBooking(id)} />
                </PageTransition>
              }
            />
            <Route
              path="/quiropractica"
              element={
                <PageTransition>
                  <QuiropracticaPage onOpenBooking={() => handleOpenBooking()} />
                </PageTransition>
              }
            />
            <Route
              path="/qmedic"
              element={
                <PageTransition>
                  <QuiropracticaPage onOpenBooking={() => handleOpenBooking()} />
                </PageTransition>
              }
            />
            <Route
              path="/ingredientes"
              element={
                <PageTransition>
                  <IngredientesPage onOpenBooking={() => handleOpenBooking()} />
                </PageTransition>
              }
            />
            <Route
              path="/contacto"
              element={
                <PageTransition>
                  <ContactoPage onOpenBooking={() => handleOpenBooking()} />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Rich Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Stepped Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={initialServiceId}
      />

      {/* Floating CTA & WhatsApp Pulsing Button */}
      <FloatingCTA onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
