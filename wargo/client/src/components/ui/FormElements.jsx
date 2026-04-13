import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${sizes[size]} w-full mx-4`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className='bg-card-dark border border-card-border rounded-2xl p-6'>
              {title && <h2 className='text-xl font-bold mb-4'>{title}</h2>}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const Toast = ({ message, type = 'info', onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColors = {
    success: 'bg-green-500/20 border-green-500/30 text-green-300',
    error: 'bg-red-500/20 border-red-500/30 text-red-300',
    info: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    warning: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`border rounded-xl px-4 py-3 ${bgColors[type]}`}
    >
      {message}
    </motion.div>
  );
};

export const Input = ({ label, error, placeholder, type = 'text', ...props }) => {
  return (
    <div className='space-y-2'>
      {label && <label className='text-sm font-medium text-white'>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-wargo-muted focus:outline-none focus:border-wargo-primary transition ${
          error ? 'border-red-500' : ''
        }`}
        {...props}
      />
      {error && <p className='text-xs text-red-400'>{error}</p>}
    </div>
  );
};

export const Checkbox = ({ label, checked, onChange, ...props }) => {
  return (
    <label className='flex items-center gap-3 cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='w-5 h-5 rounded accent-wargo-primary'
        {...props}
      />
      {label && <span className='text-sm'>{label}</span>}
    </label>
  );
};

export const Toggle = ({ label, checked, onChange, ...props }) => {
  return (
    <label className='flex items-center gap-3 cursor-pointer'>
      <motion.div
        className={`relative w-12 h-6 rounded-full transition ${
          checked ? 'bg-wargo-primary' : 'bg-white/10'
        }`}
        onClick={() => onChange(!checked)}
      >
        <motion.div
          className='absolute w-5 h-5 bg-white rounded-full top-0.5'
          animate={{ left: checked ? '22px' : '2px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        />
      </motion.div>
      {label && <span className='text-sm'>{label}</span>}
    </label>
  );
};

export const Select = ({ label, options, value, onChange, error, ...props }) => {
  return (
    <div className='space-y-2'>
      {label && <label className='text-sm font-medium text-white'>{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-wargo-primary transition ${
          error ? 'border-red-500' : ''
        }`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className='text-xs text-red-400'>{error}</p>}
    </div>
  );
};

export default Modal;
