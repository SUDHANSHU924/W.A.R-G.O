import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-3xl bg-card border border-card-border shadow-soft backdrop-blur-sm p-6 transition-all duration-300 ${className}`}
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
