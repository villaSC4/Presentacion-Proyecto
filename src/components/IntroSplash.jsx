import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroSplash({ onComplete }) {
  const [stage, setStage] = useState('entering'); // entering -> loaded -> opening -> done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation from 0 to 100 over 1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 85);

    // Trigger opening animation at 2.1s
    const timerOpen = setTimeout(() => {
      setStage('opening');
    }, 2200);

    // Complete and unmount after opening finishes
    const timerDone = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 3100);

    return () => {
      clearInterval(interval);
      clearTimeout(timerOpen);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: stage === 'opening' ? 'none' : 'auto',
        overflow: 'hidden'
      }}
    >
      {/* Top Curtain / Shutter - Pure White Theme */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: stage === 'opening' ? '-100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9FAFC 100%)',
          zIndex: 1,
          borderBottom: stage !== 'opening' ? '1px solid rgba(230,0,0,0.12)' : 'none',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
        }}
      />

      {/* Bottom Curtain / Shutter - Pure White Theme */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: stage === 'opening' ? '100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, #FFFFFF 0%, #F9FAFC 100%)',
          zIndex: 1,
          borderTop: stage !== 'opening' ? '1px solid rgba(230,0,0,0.12)' : 'none',
          boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.05)'
        }}
      />

      {/* Center Content Hub */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <AnimatePresence>
          {stage !== 'opening' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              {/* Background Ambient Glow Behind Logo */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  width: '340px',
                  height: '340px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(230, 0, 0, 0.15) 0%, rgba(255, 43, 52, 0.05) 50%, transparent 70%)',
                  filter: 'blur(45px)',
                  zIndex: -1,
                }}
              />

              {/* Logo with Elastic Scale */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.15,
                }}
                style={{
                  position: 'relative',
                  marginBottom: '18px',
                }}
              >
                <img
                  src="/audiovisual/LOVE-MARK-ROJO.png"
                  alt="Lovemark Logo"
                  style={{
                    height: '120px',
                    width: 'auto',
                    filter: 'drop-shadow(0 12px 28px rgba(230, 0, 0, 0.28))',
                  }}
                />
              </motion.div>

              {/* Brand Typography in Dark Charcoal & Lovemark Red */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3.4rem',
                  fontWeight: 900,
                  color: 'var(--color-dark)',
                  letterSpacing: '-1px',
                  lineHeight: 1,
                  marginBottom: '26px',
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                }}
              >
                LOVE<span style={{ color: 'var(--color-primary)' }}>MARK</span>
              </motion.h1>

              {/* Progress Line */}
              <div
                style={{
                  width: '240px',
                  height: '4px',
                  background: 'rgba(0, 0, 0, 0.08)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <motion.div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #E60000 0%, #FF2B34 100%)',
                    boxShadow: '0 0 10px rgba(230, 0, 0, 0.45)',
                    borderRadius: '4px',
                    transition: 'width 0.1s linear',
                  }}
                />
              </div>

              {/* Skip button / prompt */}
              <motion.button
                onClick={() => setStage('opening')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, color: 'var(--color-primary)' }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginTop: '16px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
              >
                Saltar intro →
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
