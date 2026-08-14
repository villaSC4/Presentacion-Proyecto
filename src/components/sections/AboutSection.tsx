import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Feather } from 'lucide-react';
import portadaImg from '../../assets/img/PORTADA.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-[#EFECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">


          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#EFECE6] aspect-[4/5] relative">
                <img
                  src={portadaImg}
                  alt="Filosofía Relax by Qmedic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37]">
                    Sede Surco Chacarilla
                  </span>
                  <h3 className="font-serif text-xl font-bold">
                    El Santuario del Alivio Espinal y Muscular
                  </h3>
                </div>
              </div>


              <div className="absolute -bottom-6 -right-4 bg-[#52331C] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-[#8C5A3E]/40">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/30">
                  <img src="/images/logo.png" alt="Qmedic Seal" className="w-full h-full object-cover" />
                </div>
                <div className="text-xs">
                  <p className="font-bold uppercase tracking-wider text-[#D4AF37]">27+ Años</p>
                  <p className="text-white/90">Respaldo Médico Qmedic</p>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5A3E]">
                Sobre Nosotros & Nuestra Filosofía
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2826] leading-tight">
                Un espacio para ti
              </h2>
            </div>

            <p className="text-base text-[#6B6763] leading-relaxed">
              En <strong className="text-[#2A2826]">Relax</strong> creemos que el bienestar es más que un lujo, es una necesidad. Cada sesión está pensada para que te desconectes del ruido de afuera, sueltes lo que cargas y te reencuentres contigo. Alivio y bienestar, en cada visita.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFECE6] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#F6F0EC] text-[#8C5A3E] flex items-center justify-center">
                  <Feather className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#2A2826]">
                  Desconexión Consciente
                </h4>
                <p className="text-xs text-[#6B6763]">
                  Ritos aromáticos, cabinas insonorizadas y aceites prensados en frío para reducir el cortisol.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFECE6] space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EBEFEF] text-[#2C3E35] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#2A2826]">
                  Tecnología V-Conic
                </h4>
                <p className="text-xs text-[#6B6763]">
                  Descontracturación profunda de fascias sin dolor violento ni traumatismos tisulares.
                </p>
              </div>
            </div>

            <blockquote className="p-4 border-l-4 border-[#8C5A3E] bg-[#FAF8F5] italic text-xs text-[#2A2826]/80 rounded-r-xl">
              "No solo tratamos la contractura o la desviación articular; cuidamos a la persona que habita en ese cuerpo cansado para que recupere su vitalidad."
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
