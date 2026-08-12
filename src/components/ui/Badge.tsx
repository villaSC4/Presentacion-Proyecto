import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'clay' | 'olive' | 'gold' | 'sand';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'clay',
  className = ''
}) => {
  const variantStyles = {
    clay: 'bg-[#EFE7DD] text-[#B88A75] border border-[#CBB5A1] font-bold',
    olive: 'bg-[#C2C8B8]/40 text-[#3D4A41] border border-[#C2C8B8] font-bold',
    gold: 'bg-[#EFE7DD] text-[#B88A75] border border-[#CBB5A1] font-bold shadow-xs',
    sand: 'bg-[#F7F3ED] text-[#4A3E3D] border border-[#CBB5A1]'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs tracking-wider uppercase rounded-full font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
