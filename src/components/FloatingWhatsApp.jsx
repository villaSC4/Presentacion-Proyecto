import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/51999999999?text=Hola%20Lovemark%20Publicidad%2C%20quisiera%20cotizar%20una%20activaci%C3%B3n%20para%20las%20marcas%20de%20Ajinomoto"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Hablar por WhatsApp"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <MessageCircle size={30} />
    </motion.a>
  );
}
