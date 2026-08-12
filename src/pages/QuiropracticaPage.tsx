import React from 'react';
import { motion } from 'framer-motion';
import { Award, HeartPulse, Activity } from 'lucide-react';
import { COMBINED_THERAPIES } from '../data/qmedic';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface QuiropracticaPageProps {
  onOpenBooking: () => void;
}

export const QuiropracticaPage: React.FC<QuiropracticaPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen space-y-16">
      
      {/* HERO BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#52331C] p-2 shrink-0 border border-[#8C5A3E]/30 shadow-sm flex items-center justify-center overflow-hidden">
                <img src="/images/qmedic_logo.png" alt="Qmedic Logo" className="w-full h-full object-contain filter brightness-110" />
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBEFEF] text-[#2C3E35] text-xs font-bold border border-[#2C3E35]/20">
                <Award className="w-4 h-4 text-[#2C3E35]" />
                Respaldo Médico con más de 27 Años de Experiencia
              </div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A2826] leading-tight">
              Centro Médico Quiropráctico <span className="italic text-[#8C5A3E]">Qmedic</span>
            </h1>

            <p className="text-base text-[#6B6763] leading-relaxed">
              Tratamiento integral y especializado para hernia discal, dolor lumbar, rigidez cervical y desalineamiento vertebral. Recupera la libertad de movimiento de tu columna sin cirugía ni medicamentos agresivos.
            </p>

            {/* Special offer callout */}
            <div className="p-6 rounded-2xl bg-white border border-[#EFECE6] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-[#8C5A3E] tracking-wider">
                  Promoción Especial 1ra Cita
                </span>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#D4AF37] text-[#2C3E35]">
                  50% OFF
                </span>
              </div>
              <p className="font-serif font-bold text-xl text-[#2A2826]">
                Evaluación + Sesión de Terapias Combinadas a <span className="text-[#8C5A3E]">S/ 120</span>
              </p>
              <p className="text-xs text-[#6B6763]">
                (Precio regular S/ 180). Incluye evaluación clínica, diagnóstico computarizado y las 5 terapias en tu primera visita.
              </p>

              <div className="pt-2">
                <Button variant="clay" size="md" onClick={onOpenBooking}>
                  Agendar Evaluación Quiropráctica
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 35 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1.0] }}
            className="lg:col-span-5"
          >
            <div className="arch-top overflow-hidden bg-white border-4 border-white shadow-2xl aspect-[3/4] relative">
              <img
                src="/images/quiropractica.png"
                alt="Sesión de Quiropráctica Qmedic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Tratamiento Médico Especializado
                </span>
                <p className="font-serif text-lg font-bold">
                  Alineación Vertebral y Liberación Neuro-Espinal
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* COMBINED THERAPIES ACCORDION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
            Protocolo Médico Integrado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826]">
            Las 5 Terapias Combinadas
          </h2>
          <p className="text-sm text-[#6B6763]">
            Nuestro tratamiento no se limita a un ajuste aislado; integramos 5 disciplinas complementarias en cada visita para garantizar resultados duraderos.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Accordion items={COMBINED_THERAPIES} onSelectBook={onOpenBooking} />
        </div>
      </div>

      {/* WHY CHOOSE QMEDIC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="scale" className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EFECE6] shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2826]">
              ¿Por qué confiar en Qmedic Centro Médico?
            </h3>
            <p className="text-xs text-[#6B6763]">
              Compromiso médico, honestidad en el diagnóstico y la más avanzada tecnología descompresiva en Lima.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFECE6] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F6F0EC] text-[#8C5A3E] flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2A2826]">27+ Años de Experiencia</h4>
              <p className="text-xs text-[#6B6763]">Miles de pacientes atendidos con éxito en patologías complejas de columna.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFECE6] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBEFEF] text-[#2C3E35] flex items-center justify-center mx-auto">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2A2826]">Tracción Cervical & Lumbar</h4>
              <p className="text-xs text-[#6B6763]">Equipos mecánicos de descompresión discal para alivio inmediato de la ciática.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFECE6] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] text-[#D4AF37] flex items-center justify-center mx-auto">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2A2826]">Atención Personalizada</h4>
              <p className="text-xs text-[#6B6763]">Evaluación postural completa antes de cada procedimiento terapéutico.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
};
