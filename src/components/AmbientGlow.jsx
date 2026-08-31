import React from 'react';

export default function AmbientGlow() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        pointerEvents: 'none', 
        zIndex: 0, 
        overflow: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }} 
      aria-hidden="true"
    >
      {/* Top Right Orb */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 0, 0, 0.05) 0%, rgba(255, 43, 52, 0.02) 50%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Center Left Orb */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '-8%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 120, 0, 0.035) 0%, rgba(230, 0, 0, 0.02) 50%, transparent 70%)',
          filter: 'blur(45px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
}
