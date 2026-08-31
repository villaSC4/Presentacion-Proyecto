import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ badge, title, highlight, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badge && <span className="section-badge">{badge}</span>}
          <h1 className="page-hero-title">
            {title} {highlight && <span className="highlight">{highlight}</span>}
          </h1>
          {description && <p className="page-hero-desc">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
}
