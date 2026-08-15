import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { X, MapPin, Phone, Sparkles, ChevronDown } from 'lucide-react';
import { SOCIAL_LINKS, LOCATIONS } from '../../data/locations';
import logoImg from '../../assets/img/logo.jpeg';
import { SERVICE_SUBCATEGORIES } from './Navbar';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [isServicesExpanded, setIsServicesExpanded] = useState<boolean>(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 lg:hidden">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />


        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#EFECE6]"
        >
          <div>

            <div className="flex items-center justify-between pb-6 border-b border-[#EFECE6]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl shadow-sm border border-[#8C5A3E]/30 overflow-hidden shrink-0">
                  <img
                    src={logoImg}
                    alt="Qmedic Logo Oficial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-serif font-bold text-2xl text-[#8C5A3E] tracking-tight block leading-none">
                    RELAX
                  </span>
                  <span className="block text-[10px] uppercase tracking-widest text-[#2C3E35] font-semibold mt-0.5">
                    BY QMEDIC
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#6B6763] hover:text-[#2A2826] hover:bg-[#EFECE6]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>


            <nav className="py-6 space-y-1">
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#8C5A3E] text-white shadow-sm font-semibold'
                      : 'text-[#2A2826] hover:bg-[#EFECE6]'
                  }`
                }
              >
                Inicio
              </NavLink>

              <NavLink
                to="/nosotros"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#8C5A3E] text-white shadow-sm font-semibold'
                      : 'text-[#2A2826] hover:bg-[#EFECE6]'
                  }`
                }
              >
                Nosotros
              </NavLink>


              <div className="space-y-1">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl text-[#2A2826] hover:bg-[#EFECE6]">
                  <NavLink
                    to="/servicios"
                    onClick={onClose}
                    className="text-base font-medium text-[#2A2826] hover:text-[#8C5A3E] flex-1"
                  >
                    Servicios
                  </NavLink>
                  <button
                    onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                    className="p-1 text-[#8C5A3E] cursor-pointer"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <AnimatePresence>
                  {isServicesExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1 overflow-hidden"
                    >
                      {SERVICE_SUBCATEGORIES.map((sub) => (
                        <NavLink
                          key={sub.id}
                          to={sub.path}
                          onClick={onClose}
                          className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:text-[#8C5A3E] hover:bg-white transition-colors"
                        >
                          • {sub.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/ingredientes"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#8C5A3E] text-white shadow-sm font-semibold'
                      : 'text-[#2A2826] hover:bg-[#EFECE6]'
                  }`
                }
              >
                Aceites Naturales
              </NavLink>

              <NavLink
                to="/experiencia"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#8C5A3E] text-white shadow-sm font-semibold'
                      : 'text-[#2A2826] hover:bg-[#EFECE6]'
                  }`
                }
              >
                Experiencia
              </NavLink>

              <NavLink
                to="/contacto"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#8C5A3E] text-white shadow-sm font-semibold'
                      : 'text-[#2A2826] hover:bg-[#EFECE6]'
                  }`
                }
              >
                Contacto
              </NavLink>
            </nav>
          </div>


          <div className="pt-6 border-t border-[#EFECE6] space-y-4">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#8C5A3E] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer hover:bg-[#754930] transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Agendar Cita en WhatsApp
            </button>

            <div className="text-xs text-[#6B6763] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8C5A3E]" />
                <span>{LOCATIONS[0].name} - Surco</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8C5A3E]" />
                <span>WhatsApp: {SOCIAL_LINKS.whatsappPrimary.number}</span>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#8C5A3E]" />
                <span>{SOCIAL_LINKS.instagramRelax.handle}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
