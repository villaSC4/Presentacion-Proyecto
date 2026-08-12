import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import type { CombinedTherapy } from '../../data/qmedic';

interface AccordionProps {
  items: CombinedTherapy[];
  onSelectBook?: (therapyTitle: string) => void;
}

export const Accordion: React.FC<AccordionProps> = ({ items, onSelectBook }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1.0] }}
            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
              isOpen
                ? 'bg-white border-[#8C5A3E] shadow-md ring-1 ring-[#8C5A3E]/20'
                : 'bg-white/70 border-[#EFECE6] hover:border-[#DCD6CD] hover:bg-white'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F6F0EC] text-[#8C5A3E] font-serif font-bold text-lg shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl text-[#2A2826]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6763] line-clamp-1 mt-0.5">
                    {item.shortDesc}
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#2A2826] shrink-0"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#F5F2EC] space-y-4">
                    <p className="text-sm text-[#2A2826]/80 leading-relaxed">
                      {item.fullDesc}
                    </p>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C5A3E] mb-2">
                        Beneficios Principales:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {item.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#6B6763] bg-[#FAF8F5] p-2.5 rounded-lg border border-[#EFECE6]">
                            <CheckCircle2 className="w-4 h-4 text-[#2C3E35] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {onSelectBook && (
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => onSelectBook(`Quiropráctica: ${item.title}`)}
                          className="text-xs font-semibold text-[#8C5A3E] hover:text-[#754930] underline underline-offset-4 cursor-pointer"
                        >
                          Agendar esta terapia en WhatsApp &rarr;
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
