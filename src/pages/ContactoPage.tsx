import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Send, Phone, Mail, MessageSquare, User, ChevronDown } from 'lucide-react';
import { LOCATIONS } from '../data/locations';

interface ContactoPageProps {
  onOpenBooking: () => void;
}

const vp = { once: false, amount: 0.12 };
const ease = [0.215, 0.61, 0.355, 1.0] as const;

const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.614 1.832 6.52L4 29l7.697-1.817A11.946 11.946 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.818a9.832 9.832 0 01-5.006-1.367l-.358-.213-3.724.879.938-3.624-.234-.372A9.818 9.818 0 016.182 15C6.182 9.574 10.574 5.182 16 5.182S25.818 9.574 25.818 15 21.426 24.818 16 24.818zm5.386-7.346c-.295-.147-1.746-.861-2.017-.96-.27-.098-.467-.147-.664.148-.196.295-.763.96-.935 1.157-.172.196-.344.221-.639.073-.295-.147-1.245-.459-2.372-1.464-.877-.783-1.468-1.748-1.64-2.044-.172-.295-.018-.454.129-.601.133-.132.295-.344.442-.516.148-.172.197-.295.296-.492.098-.197.049-.37-.025-.517-.073-.148-.664-1.6-.91-2.19-.24-.575-.484-.497-.664-.506l-.566-.01c-.197 0-.517.073-.788.37-.27.295-1.033 1.01-1.033 2.462s1.057 2.857 1.205 3.054c.147.197 2.08 3.178 5.04 4.457.704.305 1.253.486 1.682.623.707.224 1.35.193 1.858.117.567-.085 1.746-.714 1.992-1.404.246-.689.246-1.28.172-1.404-.073-.123-.27-.197-.566-.344z"
      fill="currentColor" />
  </svg>
);

export const ContactoPage: React.FC<ContactoPageProps> = ({ onOpenBooking }) => {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">

      <div className="pt-32 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
            Agendamiento & Contacto
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A2826]">
            Estamos para Atenderte
          </h1>
          <p className="text-base text-[#6B6763] leading-relaxed">
            Escríbenos, llámanos o visítanos. Nuestro equipo está listo para acompañarte en tu bienestar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-serif font-bold text-2xl text-[#2A2826]">Escríbenos a</h2>

            {LOCATIONS.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.55, ease, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-[#EFECE6] shadow-sm space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B88A75]" />
                  <h3 className="font-display font-bold text-base text-[#2A2826]">{loc.name}</h3>
                </div>

                <div className="space-y-3 text-sm text-[#6B6763]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#F6F0EC] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#8C5A3E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A2826] text-xs">Dirección</p>
                      <p className="text-xs leading-relaxed">{loc.address}</p>
                      <p className="text-[11px] text-[#B88A75] mt-0.5">Ref: {loc.reference}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#F6F0EC] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#8C5A3E]" />
                    </div>
                    <div className="w-full">
                      <p className="font-semibold text-[#2A2826] text-xs mb-2">Horario de Atención</p>
                      <div className="space-y-2">
                        <div className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl p-2.5 text-[11px]">
                          <div className="flex justify-between font-bold text-[#2A2826] mb-1">
                            <span>Lunes a Sábado</span>
                            <span>9:00 am - 6:00 pm</span>
                          </div>
                          <p className="text-[#6B6763]">Último turno: 5:00 pm</p>
                        </div>
                        <div className="bg-[#F6F0EC] border border-[#EFECE6] rounded-xl p-2.5 text-[11px] relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8C5A3E]"></div>
                          <div className="flex justify-between font-bold text-[#2A2826] mb-1">
                            <span>Jueves (Especial)</span>
                            <span>9:00 am - 2:00 pm</span>
                          </div>
                          <p className="text-[#6B6763]">Último turno: 1:00 pm</p>
                        </div>
                        <div className="text-[11px] text-[#8C5A3E] font-semibold pt-1">
                          Domingos: Cerrado / Previa reserva
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4 text-[#16a34a]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A2826] text-xs">WhatsApp</p>
                      <a
                        href={`https://wa.me/${loc.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#16a34a] font-semibold hover:underline"
                      >
                        {loc.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${loc.whatsappNumber}?text=Hola, quisiera agendar una cita en ${loc.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1db954] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Escribir a {loc.phoneDisplay}
                </a>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, ease, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border border-[#EFECE6] shadow-sm space-y-3"
            >
              <h3 className="font-display font-bold text-base text-[#2A2826]">Redes Sociales</h3>
              <div className="space-y-2">
                {[
                  { label: '@relax.alivioybienestar', url: 'https://instagram.com/relax.alivioybienestar', icon: 'IG' },
                  { label: 'Relax - Alivio y Bienestar', url: 'https://facebook.com/relax.alivioybienestar', icon: 'FB' },
                  { label: '@relax.alivioybienestar', url: 'https://tiktok.com/@relax.alivioybienestar', icon: 'TK' },
                ].map((social) => (
                  <a
                    key={social.label + social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFECE6] hover:border-[#B88A75] hover:bg-[#F6F0EC] transition-all text-xs font-semibold text-[#4A3E3D]"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-[8px] font-bold ${
                      social.icon === 'IG' ? 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'
                      : social.icon === 'FB' ? 'bg-[#1877F2]'
                      : 'bg-[#010101]'
                    }`}>
                      {social.icon}
                    </div>
                    {social.label}
                  </a>
                ))}
                <a
                  href="mailto:relax.alivioybienestar@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFECE6] hover:border-[#B88A75] transition-all text-xs font-semibold text-[#4A3E3D] break-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F6F0EC] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#8C5A3E]" />
                  </div>
                  relax.alivioybienestar@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EFECE6] shadow-sm space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif font-bold text-2xl text-[#2A2826]">Déjanos tus datos</h2>
                <p className="text-sm text-[#6B6763]">Nos comunicaremos contigo a la brevedad.</p>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-[#DCFCE7] border border-[#86efac] text-sm text-[#16a34a] font-semibold flex items-center gap-2"
                >
                  <span>✓</span> ¡Mensaje enviado! Te contactaremos pronto.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CBB5A1]" />
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Nombres y apellidos"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#EFECE6] bg-[#FAF8F5] text-sm text-[#2A2826] placeholder-[#CBB5A1] focus:outline-none focus:border-[#B88A75] focus:ring-2 focus:ring-[#B88A75]/20 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CBB5A1]" />
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Correo electrónico"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#EFECE6] bg-[#FAF8F5] text-sm text-[#2A2826] placeholder-[#CBB5A1] focus:outline-none focus:border-[#B88A75] focus:ring-2 focus:ring-[#B88A75]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CBB5A1]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Teléfono / Celular"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#EFECE6] bg-[#FAF8F5] text-sm text-[#2A2826] placeholder-[#CBB5A1] focus:outline-none focus:border-[#B88A75] focus:ring-2 focus:ring-[#B88A75]/20 transition-all"
                  />
                </div>

                <div className="relative">
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CBB5A1] pointer-events-none" />
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-10 py-3 rounded-2xl border border-[#EFECE6] bg-[#FAF8F5] text-sm text-[#2A2826] placeholder-[#CBB5A1] focus:outline-none focus:border-[#B88A75] focus:ring-2 focus:ring-[#B88A75]/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>¿Qué problema quieres tratar?</option>
                    <option value="masaje-relajante">Masaje Relajante</option>
                    <option value="masaje-detox">Masaje Detox V-Conic</option>
                    <option value="quiropractica">Quiropráctica & Terapias</option>
                    <option value="aceites">Aceites Botánicos</option>
                    <option value="otro">Otra consulta</option>
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#CBB5A1]" />
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Mensaje / Consulta"
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#EFECE6] bg-[#FAF8F5] text-sm text-[#2A2826] placeholder-[#CBB5A1] focus:outline-none focus:border-[#B88A75] focus:ring-2 focus:ring-[#B88A75]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#4A3020] text-white text-sm font-bold hover:bg-[#3A2318] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar datos
                </button>

                <p className="text-center text-xs text-[#CBB5A1]">
                  O si prefieres, también puedes{' '}
                  <button type="button" onClick={onOpenBooking} className="text-[#8C5A3E] font-semibold underline underline-offset-2 cursor-pointer">
                    abrir el asistente de reserva
                  </button>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7, ease }}
        className="mt-20 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#8C5A3E]" />
            <h2 className="font-serif font-bold text-xl text-[#2A2826]">Cómo Llegar — Sede Surco Chacarilla</h2>
          </div>
        </div>
        <div className="w-full h-96 overflow-hidden shadow-lg border-t border-[#EFECE6]">
          <iframe
            title="Mapa Relax by Qmedic - Surco Chacarilla"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2!2d-76.9991!3d-12.1228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bfd2a3e7f5b9%3A0x0!2sAv.%20Primavera%20120%2C%20Chacarilla%2C%20Surco%2C%20Lima!5e0!3m2!1ses!2spe!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'saturate(0.8) hue-rotate(10deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>

    </div>
  );
};
