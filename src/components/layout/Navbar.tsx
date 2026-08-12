import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Calendar, PhoneCall } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import logoImg from '../../assets/img/logo.jpeg';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Masajes & Catálogo', path: '/servicios' },
    { label: 'Quiropráctica Qmedic', path: '/quiropractica' },
    { label: 'Aceites Naturales', path: '/ingredientes' },
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


            <nav className={`hidden lg:flex items-center gap-1 px-4 py-2 rounded-full border backdrop-blur-md transition-all ${
              isScrolled
                ? 'bg-[#EFE7DD]/80 border-[#CBB5A1]'
                : 'bg-black/30 border-white/20 text-white'
            }`}>
              {navLinks.map((link) => (
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
              ))}
            </nav>


            <div className="hidden lg:flex items-center gap-4">

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-[#B88A75] text-white text-xs font-bold hover:bg-[#A37763] transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:shadow-md active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                Agendar WhatsApp
              </button>
            </div>


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
