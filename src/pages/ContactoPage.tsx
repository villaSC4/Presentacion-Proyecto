import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, Sparkles } from 'lucide-react';
import { LOCATIONS } from '../data/locations';
import { Button } from '../components/ui/Button';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface ContactoPageProps {
  onOpenBooking: () => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen space-y-16">
      
      {/* Header */}
      <AnimatedSection direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
            Agendamiento & Ubicación
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A2826]">
            Estamos para Atenderte
          </h1>
          <p className="text-base text-[#6B6763] leading-relaxed">
            Visítanos en nuestra sede de Surco Chacarilla o contáctanos directamente a través de WhatsApp para agendar tu horario preferido.
          </p>
        </div>
      </AnimatedSection>

      {/* LOCATIONS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS.map((loc) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
              className="bg-white rounded-3xl p-8 border border-[#EFECE6] shadow-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#F6F0EC] text-[#8C5A3E]">
                    Sede Oficial
                  </span>
                  <span className="text-xs font-medium text-[#2C3E35]">Surco / Lima</span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#2A2826]">
                  {loc.name}
                </h3>

                <div className="space-y-3 text-xs text-[#6B6763]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8C5A3E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#2A2826]">Dirección:</strong> {loc.address}
                      <p className="text-[11px] text-[#8C5A3E] mt-0.5">Ref: {loc.reference}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#8C5A3E] shrink-0" />
                    <div>
                      <strong className="text-[#2A2826]">Horario:</strong> {loc.hours}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                    <div>
                      <strong className="text-[#2A2826]">WhatsApp Directo:</strong> {loc.phoneDisplay}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F5F2EC] flex flex-col sm:flex-row gap-3">
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    window.open(`https://wa.me/${loc.whatsappNumber}`, '_blank');
                  }}
                  icon={<Send className="w-4 h-4" />}
                >
                  Escribir a {loc.phoneDisplay}
                </Button>

                <Button
                  variant="clay"
                  size="sm"
                  className="w-full"
                  onClick={onOpenBooking}
                >
                  Asistente de Reserva
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* QUICK RESERVATION HERO BANNER */}
      <AnimatedSection direction="scale" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#2C3E35] text-white text-center space-y-6 shadow-xl border border-white/10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-[#D4AF37] mx-auto">
            <Sparkles className="w-7 h-7" />
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            ¿Listo para regalarte una pausa de alivio?
          </h2>

          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Inicia nuestro proceso de reserva interactiva y personaliza la duración, el aceite aromático y tu horario preferido en menos de 1 minuto.
          </p>

          <div className="pt-2">
            <Button
              variant="clay"
              size="lg"
              onClick={onOpenBooking}
              icon={<Sparkles className="w-5 h-5" />}
            >
              Abrir Asistente de Agendamiento
            </Button>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};
