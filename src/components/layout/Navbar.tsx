import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, Calendar, PhoneCall, ChevronDown, Sparkles, Feather, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileMenu } from './MobileMenu';
import logoImg from '../../assets/img/logo.jpeg';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const SERVICE_SUBCATEGORIES = [
  {
    id: 'todos',
    label: 'Todos los Masajes',
    desc: 'Ver nuestro catálogo completo de 9 experiencias',
    icon: Sparkles,
    path: '/servicios?cat=todos'
  },
  {
    id: 'relajantes',
    label: 'Masajes Relajantes',
    desc: 'Dream Relax, Relax Reset y Total Reset',
    icon: Feather,
    path: '/servicios?cat=relajantes'
  },
  {
    id: 'detox',
    label: 'V-Conic Detox (Sin Dolor)',
    desc: 'Tecnología miofascial para descontracturar sin trauma',
    icon: Zap,
    path: '/servicios?cat=detox'
  },
  {
    id: 'descontracturantes',
    label: 'Descontracturantes Especiales',
    desc: 'Masajes de alta intensidad y herramientas terapéuticas',
    icon: ShieldCheck,
    path: '/servicios?cat=descontracturantes'
  }
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesHovered, setIsServicesHovered] = useState<boolean>(false);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 150);
  };

  const handleSubCategoryClick = (path: string) => {
    setIsServicesHovered(false);
    navigate(path);
  };

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Servicios', path: '/servicios', isDropdown: true },
    { label: 'Aceites Naturales', path: '/ingredientes' },
    { label: 'Experiencia', path: '/experiencia' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F3ED]/95 backdrop-blur-md shadow-sm border-b border-[#CBB5A1]/40 py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <NavLink to="/" className="group flex items-center gap-3 cursor-pointer">
              <div className="w-11 h-11 rounded-2xl group-hover:scale-105 transition-transform overflow-hidden shadow-sm border border-[#B88A75]/40">
                <img
                  src={logoImg}
                  alt="Qmedic Logo Oficial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-2xl tracking-tight leading-none transition-colors ${
                  isScrolled ? 'text-[#4A3E3D]' : 'text-white drop-shadow-md'
                }`}>
                  RELAX
                </span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 flex items-center gap-1 transition-colors ${
                  isScrolled ? 'text-[#B88A75]' : 'text-[#D4AF37]'
                }`}>
                  <span>BY QMEDIC</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A75]" />
                </span>
              </div>
            </NavLink>

            {/* Navigation Links */}
            <nav className={`hidden lg:flex items-center gap-1 px-4 py-2 rounded-full border backdrop-blur-md transition-all ${
              isScrolled
                ? 'bg-[#EFE7DD]/80 border-[#CBB5A1]'
                : 'bg-black/30 border-white/20 text-white'
            }`}>
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 inline-flex items-center gap-1.5 ${
                            isActive || isServicesHovered
                              ? isScrolled
                                ? 'bg-white text-[#B88A75] shadow-xs font-bold'
                                : 'bg-[#B88A75] text-white font-bold shadow-md'
                              : isScrolled
                                ? 'text-[#4A3E3D]/80 hover:text-[#4A3E3D] hover:bg-white/60'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                          }`
                        }
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
                      </NavLink>

                      {/* Dropdown Menu de Servicios */}
                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-3xl p-3 border-2 border-[#EFECE6] shadow-2xl z-50 overflow-hidden"
                          >
                            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#8C5A3E] px-3 py-1.5 border-b border-gray-100">
                              Nuestros Servicios & Terapias
                            </div>
                            <div className="space-y-1 pt-1.5">
                              {SERVICE_SUBCATEGORIES.map((sub) => {
                                const IconComp = sub.icon;
                                return (
                                  <button
                                    key={sub.id}
                                    onClick={() => handleSubCategoryClick(sub.path)}
                                    className="w-full text-left p-3 rounded-2xl hover:bg-[#FAF7F2] transition-colors flex items-start gap-3 group cursor-pointer"
                                  >
                                    <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#EFECE6] text-[#8C5A3E] flex items-center justify-center shrink-0 group-hover:bg-[#3C2A1E] group-hover:text-[#E5B869] group-hover:border-[#3C2A1E] transition-colors">
                                      <IconComp className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs font-bold text-[#2C1E18] group-hover:text-[#8C5A3E] transition-colors">
                                        {sub.label}
                                      </p>
                                      <p className="text-[11px] text-gray-500 truncate mt-0.5 font-normal">
                                        {sub.desc}
                                      </p>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? isScrolled
                            ? 'bg-white text-[#B88A75] shadow-xs font-bold'
                            : 'bg-[#B88A75] text-white font-bold shadow-md'
                          : isScrolled
                            ? 'text-[#4A3E3D]/80 hover:text-[#4A3E3D] hover:bg-white/60'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-[#B88A75] text-white text-xs font-bold hover:bg-[#A37763] transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:shadow-md active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                Agendar WhatsApp
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="p-2 rounded-full bg-[#8C5A3E] text-white shadow-xs"
                title="Agendar Cita"
              >
                <PhoneCall className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 rounded-full border transition-colors cursor-pointer ${
                  isScrolled
                    ? 'bg-[#EFECE6] text-[#2A2826] border-[#E5E0D8]'
                    : 'bg-black/40 text-white border-white/20 backdrop-blur-md'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};
