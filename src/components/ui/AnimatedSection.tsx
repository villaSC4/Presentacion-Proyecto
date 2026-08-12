import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const getInitialState = () => {
    switch (direction) {
      case 'down':
        return { opacity: 0, y: -40, scale: 0.98 };
      case 'left':
        return { opacity: 0, x: -40, scale: 0.98 };
      case 'right':
        return { opacity: 0, x: 40, scale: 0.98 };
      case 'scale':
        return { opacity: 0, scale: 0.9, y: 20 };
      case 'up':
      default:
        return { opacity: 0, y: 40, scale: 0.98 };
    }
  };

  const getTargetState = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return { opacity: 1, x: 0, scale: 1 };
      case 'up':
      case 'down':
      case 'scale':
      default:
        return { opacity: 1, y: 0, scale: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getTargetState()}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
