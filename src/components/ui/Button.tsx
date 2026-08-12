import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'clay' | 'olive' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'clay',
  size = 'md',
  children,
  className,
  icon,
  iconPosition = 'left',
  pulse = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 shadow-md"
  };

  const variantStyles = {
    clay: "bg-[#B88A75] text-white hover:bg-[#A37763] focus:ring-[#B88A75] shadow-sm hover:shadow-md font-bold",
    olive: "bg-[#3D4A41] text-white hover:bg-[#2F3A33] focus:ring-[#3D4A41] shadow-sm hover:shadow-md font-bold",
    outline: "border border-[#B88A75] text-[#B88A75] hover:bg-[#B88A75] hover:text-white focus:ring-[#B88A75] font-bold",
    ghost: "text-[#4A3E3D] hover:bg-[#EFE7DD] focus:ring-[#B88A75]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE5B] focus:ring-[#25D366] shadow-md font-semibold"
  };

  const pulseStyles = pulse ? "animate-pulse" : "";

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], pulseStyles, className))}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
