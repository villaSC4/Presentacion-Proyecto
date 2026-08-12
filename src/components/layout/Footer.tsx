import React from 'react';
import { MapPin, Clock, Mail, ShieldCheck } from 'lucide-react';
import { LOCATIONS, SOCIAL_LINKS } from '../../data/locations';


const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.614 1.832 6.52L4 29l7.697-1.817A11.946 11.946 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.818a9.832 9.832 0 01-5.006-1.367l-.358-.213-3.724.879.938-3.624-.234-.372A9.818 9.818 0 016.182 15C6.182 9.574 10.574 5.182 16 5.182S25.818 9.574 25.818 15 21.426 24.818 16 24.818zm5.386-7.346c-.295-.147-1.746-.861-2.017-.96-.27-.098-.467-.147-.664.148-.196.295-.763.96-.935 1.157-.172.196-.344.221-.639.073-.295-.147-1.245-.459-2.372-1.464-.877-.783-1.468-1.748-1.64-2.044-.172-.295-.018-.454.129-.601.133-.132.295-.344.442-.516.148-.172.197-.295.296-.492.098-.197.049-.37-.025-.517-.073-.148-.664-1.6-.91-2.19-.24-.575-.484-.497-.664-.506l-.566-.01c-.197 0-.517.073-.788.37-.27.295-1.033 1.01-1.033 2.462s1.057 2.857 1.205 3.054c.147.197 2.08 3.178 5.04 4.457.704.305 1.253.486 1.682.623.707.224 1.35.193 1.858.117.567-.085 1.746-.714 1.992-1.404.246-.689.246-1.28.172-1.404-.073-.123-.27-.197-.566-.344z"
      fill="currentColor"/>
  </svg>
);

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const SERVICES_LIST = [
  'Masaje Descontracturante',
  'Masaje Detox V-Conic',
  'Quiropráctica Avanzada',
  'Fisioterapia & Alineamiento',
  'Acupuntura Terapéutica',
  'Aceites Botánicos 100% Puros',
  'Evaluación Postural Qmedic',
  'Masaje de Relajación Profunda',
  'Tratamiento de Columna',
];

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#3C2A1E] text-[#F7F3ED] relative overflow-hidden">


      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B88A75]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


          <div className="flex flex-col items-start gap-6">

            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-28 h-28 rounded-full border-4 border-[#B88A75]/50 shadow-xl overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Relax by Qmedic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-3xl tracking-tight text-white leading-none">RELAX</h3>
                <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#CBB5A1] mt-1">BY QMEDIC</p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed text-center lg:text-left">
              Un espacio de alivio, desconexión y bienestar holístico respaldado por más de 27 años de excelencia médica y quiropráctica de Qmedic en Lima.
            </p>


            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Garantía & Respaldo Médico Qmedic</span>
            </div>


            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-3">Síguenos en:</p>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.instagramRelax.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-[#B88A75] hover:border-[#B88A75] flex items-center justify-center transition-all text-white"
                  title={SOCIAL_LINKS.instagramRelax.handle}
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagramQmedic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-[#B88A75] hover:border-[#B88A75] flex items-center justify-center transition-all text-white"
                  title={SOCIAL_LINKS.instagramQmedic.handle}
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsappPrimary.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-all text-white"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>


          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.18em] text-[#CBB5A1] mb-6 pb-3 border-b border-white/10">
              Contáctanos
            </h4>

            <div className="space-y-5 text-sm">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="space-y-1.5">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B88A75] shrink-0" />
                    {loc.name}
                  </p>
                  <p className="text-white/65 pl-6 text-xs leading-relaxed">{loc.address}</p>
                  <a
                    href={`https://wa.me/${loc.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-6 text-[#25D366] font-medium flex items-center gap-1.5 text-xs hover:text-[#4adb82] transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    WhatsApp: {loc.phoneDisplay}
                  </a>
                </div>
              ))}

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-white/65">
                  <Clock className="w-4 h-4 text-[#B88A75] shrink-0" />
                  <div>
                    <p className="font-semibold text-white/85">Horario de Atención</p>
                    <p>Lun – Sáb · 9:00 am – 7:30 pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/65">
                  <Mail className="w-4 h-4 text-[#B88A75] shrink-0" />
                  <span>relax@qmedic.pe</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 rounded-full bg-[#B88A75] text-white text-xs font-bold hover:bg-[#A37763] transition-colors shadow-md cursor-pointer mt-2"
              >
                Reservar una Cita Ahora
              </button>
            </div>
          </div>


          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.18em] text-[#CBB5A1] mb-6 pb-3 border-b border-white/10">
              Nuestros Servicios
            </h4>
            <ul className="space-y-0">
              {SERVICES_LIST.map((service, idx) => (
                <li key={idx} className={`flex items-center gap-2.5 py-2.5 text-xs text-white/75 hover:text-white transition-colors cursor-default ${idx < SERVICES_LIST.length - 1 ? 'border-b border-white/8' : ''}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A75] shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>


      <div className="border-t border-white/10 bg-[#2E1E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Relax by Qmedic. Todos los derechos reservados. Diseñado para tu alivio y bienestar.</p>
          <p className="max-w-sm text-center md:text-right text-white/40">
            * Los masajes complementan el cuidado de la salud. Para diagnósticos de columna o dolor crónico, consulte con nuestro equipo Qmedic.
          </p>
        </div>
      </div>

    </footer>
  );
};
