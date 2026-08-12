import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Clock, Droplets, MapPin, Sparkles, Send, ChevronRight, ChevronLeft } from 'lucide-react';
import { MASSAGE_SERVICES } from '../../data/services';
import { BOTANICAL_OILS } from '../../data/oils';
import { LOCATIONS } from '../../data/locations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>('dream-relax');
  const [selectedDuration, setSelectedDuration] = useState<'50 min' | '80 min'>('50 min');
  const [selectedOil, setSelectedOil] = useState<string>('almond');
  const [selectedLocation, setSelectedLocation] = useState<string>('surco-chacarilla');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const currentServiceObj = MASSAGE_SERVICES.find(s => s.id === selectedService) || MASSAGE_SERVICES[0];
  const currentOilObj = BOTANICAL_OILS.find(o => o.id === selectedOil) || BOTANICAL_OILS[0];
  const currentLocationObj = LOCATIONS.find(l => l.id === selectedLocation) || LOCATIONS[0];

  // Calculate current price based on duration
  const priceObj = currentServiceObj.options.find(o => o.duration === selectedDuration) || currentServiceObj.options[0];
  const currentPrice = priceObj ? priceObj.price : 120;

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConfirmWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Hola Relax by Qmedic! 👋 Deseo agendar una sesión de bienestar:\n\n` +
      `🌿 *Servicio:* ${currentServiceObj.title} (${currentServiceObj.categoryLabel})\n` +
      `⏱️ *Duración:* ${selectedDuration} (S/ ${currentPrice})\n` +
      `💧 *Aceite Botánico:* ${currentOilObj.name}\n` +
      `📍 *Sede Seleccionada:* ${currentLocationObj.name}\n\n` +
      `Por favor me confirman los horarios disponibles para esta semana. ¡Gracias!`
    );

    const waUrl = `https://wa.me/${currentLocationObj.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#EFECE6] max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#EFECE6]">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C5A3E]" />
                <h2 className="font-serif font-bold text-xl text-[#2A2826]">
                  Agendar Experiencia Relax
                </h2>
              </div>
              <p className="text-xs text-[#6B6763]">Paso {step} de 4 &bull; Confirmación directa por WhatsApp</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#6B6763] hover:text-[#2A2826] hover:bg-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#EFECE6] h-1.5">
            <motion.div
              className="bg-[#8C5A3E] h-full"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Step Contents */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="font-serif font-semibold text-lg text-[#2A2826] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#8C5A3E]" />
                  1. Selecciona tu Servicio o Masaje
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MASSAGE_SERVICES.map((serv) => {
                    const isSelected = selectedService === serv.id;
                    return (
                      <div
                        key={serv.id}
                        onClick={() => setSelectedService(serv.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-white border-[#8C5A3E] shadow-md ring-2 ring-[#8C5A3E]/20'
                            : 'bg-white/60 border-[#EFECE6] hover:bg-white hover:border-[#DCD6CD]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C5A3E]">
                              {serv.categoryLabel}
                            </span>
                            {isSelected && (
                              <span className="w-5 h-5 rounded-full bg-[#8C5A3E] text-white flex items-center justify-center">
                                <Check className="w-3.5 h-3.5" />
                              </span>
                            )}
                          </div>
                          <h4 className="font-serif font-semibold text-base text-[#2A2826]">
                            {serv.title}
                          </h4>
                          <p className="text-xs text-[#6B6763] line-clamp-2 mt-1">
                            {serv.subtitle}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#F5F2EC] flex items-center justify-between text-xs font-medium text-[#2A2826]">
                          <span>Desde S/ {serv.options[0].price}</span>
                          <span className="text-[#8C5A3E] font-semibold">{serv.options[0].duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: DURATION */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="font-serif font-semibold text-lg text-[#2A2826] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#8C5A3E]" />
                  2. Elige la Duración de la Sesión
                </h3>
                <p className="text-xs text-[#6B6763]">
                  Servicio seleccionado: <strong className="text-[#8C5A3E]">{currentServiceObj.title}</strong>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentServiceObj.options.map((opt) => {
                    const isSelected = selectedDuration === opt.duration;
                    return (
                      <div
                        key={opt.duration}
                        onClick={() => setSelectedDuration(opt.duration)}
                        className={`p-6 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#8C5A3E] shadow-md ring-2 ring-[#8C5A3E]/20'
                            : 'bg-white/60 border-[#EFECE6] hover:bg-white'
                        }`}
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F6F0EC] text-[#8C5A3E] mb-3">
                          <Clock className="w-6 h-6" />
                        </div>
                        <h4 className="font-serif font-bold text-2xl text-[#2A2826]">
                          {opt.duration}
                        </h4>
                        <div className="mt-2 text-3xl font-bold text-[#8C5A3E] font-serif">
                          S/ {opt.price}
                        </div>
                        <p className="text-xs text-[#6B6763] mt-2">
                          {opt.duration === '50 min' ? 'Ideal para enfoque localizado y descontracturante.' : 'Experiencia completa de cuerpo entero + relajación total.'}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: NATURAL OIL */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="font-serif font-semibold text-lg text-[#2A2826] flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-[#8C5A3E]" />
                  3. Selecciona tu Aceite Botánico 100% Natural
                </h3>
                <p className="text-xs text-[#6B6763]">
                  Aceites prensados en frío para elevar la experiencia aromática y nutrir la piel.
                </p>

                <div className="space-y-3">
                  {BOTANICAL_OILS.map((oil) => {
                    const isSelected = selectedOil === oil.id;
                    return (
                      <div
                        key={oil.id}
                        onClick={() => setSelectedOil(oil.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                          isSelected
                            ? 'bg-white border-[#8C5A3E] shadow-md ring-2 ring-[#8C5A3E]/20'
                            : 'bg-white/60 border-[#EFECE6] hover:bg-white'
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-white font-serif font-bold"
                          style={{ backgroundColor: oil.colorHex }}
                        >
                          💧
                        </div>
                        <div className="flex-1">
                          <h4 className="font-serif font-bold text-base text-[#2A2826]">
                            {oil.name}
                          </h4>
                          <p className="text-xs text-[#6B6763] mt-0.5">{oil.tagline}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {oil.properties.map((p, idx) => (
                              <span key={idx} className="text-[10px] bg-[#FAF8F5] text-[#2A2826] px-2 py-0.5 rounded-full border border-[#EFECE6]">
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                        {isSelected && (
                          <span className="w-6 h-6 rounded-full bg-[#8C5A3E] text-white flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 4: LOCATION & SUMMARY */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="font-serif font-semibold text-lg text-[#2A2826] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#8C5A3E]" />
                  4. Selecciona la Sede de Atencion
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {LOCATIONS.map((loc) => {
                    const isSelected = selectedLocation === loc.id;
                    return (
                      <div
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#8C5A3E] shadow-md ring-2 ring-[#8C5A3E]/20'
                            : 'bg-white/60 border-[#EFECE6] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-serif font-bold text-base text-[#2A2826]">
                            {loc.name}
                          </h4>
                          {isSelected && <Check className="w-4 h-4 text-[#8C5A3E]" />}
                        </div>
                        <p className="text-xs text-[#6B6763] mt-1">{loc.address}</p>
                        <p className="text-[11px] text-[#8C5A3E] mt-2 font-medium">WhatsApp: {loc.phoneDisplay}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Booking Summary Box */}
                <div className="p-5 rounded-2xl bg-[#2C3E35] text-white space-y-3">
                  <h4 className="font-serif font-semibold text-base text-[#EFECE6] border-b border-white/10 pb-2 flex items-center justify-between">
                    <span>Resumen de tu Reserva</span>
                    <span className="text-xl font-bold text-[#D4AF37] font-serif">S/ {currentPrice}</span>
                  </h4>
                  <div className="text-xs space-y-1.5 text-white/90">
                    <p><strong className="text-white">Tratamiento:</strong> {currentServiceObj.title} ({selectedDuration})</p>
                    <p><strong className="text-white">Aceite:</strong> {currentOilObj.name}</p>
                    <p><strong className="text-white">Sede:</strong> {currentLocationObj.name}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-[#EFECE6]">
            {step > 1 ? (
              <button
                onClick={handlePrevStep}
                className="flex items-center gap-1 text-xs font-semibold text-[#6B6763] hover:text-[#2A2826] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                onClick={handleNextStep}
                className="px-6 py-2.5 rounded-full bg-[#8C5A3E] text-white text-xs sm:text-sm font-semibold hover:bg-[#754930] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                Siguiente <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleConfirmWhatsApp}
                className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#1EBE5B] transition-all flex items-center gap-2 shadow-md cursor-pointer animate-pulse"
              >
                <Send className="w-4 h-4" />
                Agendar via WhatsApp
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
