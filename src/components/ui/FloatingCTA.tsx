import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../data/locations';

interface FloatingCTAProps {
  onOpenBooking: () => void;
}

// WhatsApp SVG icon (official brand icon)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.614 1.832 6.52L4 29l7.697-1.817A11.946 11.946 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.818a9.832 9.832 0 01-5.006-1.367l-.358-.213-3.724.879.938-3.624-.234-.372A9.818 9.818 0 016.182 15C6.182 9.574 10.574 5.182 16 5.182S25.818 9.574 25.818 15 21.426 24.818 16 24.818zm5.386-7.346c-.295-.147-1.746-.861-2.017-.96-.27-.098-.467-.147-.664.148-.196.295-.763.96-.935 1.157-.172.196-.344.221-.639.073-.295-.147-1.245-.459-2.372-1.464-.877-.783-1.468-1.748-1.64-2.044-.172-.295-.018-.454.129-.601.133-.132.295-.344.442-.516.148-.172.197-.295.296-.492.098-.197.049-.37-.025-.517-.073-.148-.664-1.6-.91-2.19-.24-.575-.484-.497-.664-.506l-.566-.01c-.197 0-.517.073-.788.37-.27.295-1.033 1.01-1.033 2.462s1.057 2.857 1.205 3.054c.147.197 2.08 3.178 5.04 4.457.704.305 1.253.486 1.682.623.707.224 1.35.193 1.858.117.567-.085 1.746-.714 1.992-1.404.246-.689.246-1.28.172-1.404-.073-.123-.27-.197-.566-.344z"
      fill="white"
    />
  </svg>
);

export const FloatingCTA: React.FC<FloatingCTAProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
      }}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      {/* Direct WhatsApp Floating Icon */}
      <motion.a
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        href={SOCIAL_LINKS.whatsappPrimary.waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#1EBE5B] transition-colors relative cursor-pointer group"
        title="Chat directo WhatsApp"
      >
        {/* Continuous WhatsApp Ripple Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-40 pointer-events-none" />

        <WhatsAppIcon />

        {/* Hover Tooltip */}
        <span className="absolute right-[72px] bg-[#2A2826] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Escríbenos a WhatsApp
        </span>
      </motion.a>
    </motion.div>
  );
};
