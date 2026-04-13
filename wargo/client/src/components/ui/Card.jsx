import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', variant = 'dark', ...props }) => {
  const variants = {
    dark: 'bg-card-dark border border-card-border',
    light: 'bg-card-light border border-border-light shadow-card-light',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl backdrop-blur-xl p-6 transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className = '', glow = true, ...props }) => {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div className='absolute -inset-1 bg-gradient-to-r from-wargo-primary to-wargo-secondary rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
      )}
      <Card className={glow ? 'relative' : ''} {...props}>
        {children}
      </Card>
    </div>
  );
};

export default Card;
