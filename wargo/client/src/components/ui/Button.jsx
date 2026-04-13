import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-wargo-primary hover:bg-wargo-primary/90 text-white shadow-glow',
    secondary: 'bg-white/5 hover:bg-white/10 border border-white/10 text-white',
    danger: 'bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400',
    light: 'bg-rose-pink hover:bg-rose-accent text-white dark:hidden',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <>
          <span className='inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin' />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
