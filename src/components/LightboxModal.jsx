import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, image, title, category, description }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="lightbox-dialog"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>

          <div className="lightbox-image-area">
            <img src={image} alt={title || 'Detalle de imagen'} />
          </div>

          <div className="lightbox-details">
            {category && (
              <span className="section-badge" style={{ marginBottom: '8px', fontSize: '0.75rem', padding: '3px 10px' }}>
                {category}
              </span>
            )}
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>
              {title}
            </h3>
            {description && (
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                {description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
