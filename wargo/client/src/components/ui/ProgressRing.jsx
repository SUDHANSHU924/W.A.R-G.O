import React from 'react';
import { motion } from 'framer-motion';

export const ProgressRing = ({ percentage = 0, size = 120, strokeWidth = 8, label = '', animated = true }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='relative' style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className='absolute transform -rotate-90'
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill='none'
            stroke='#F0B8CE'
            strokeOpacity='0.2'
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill='none'
            stroke='url(#ringGradient)'
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap='round'
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id='ringGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#E05585' />
              <stop offset='100%' stopColor='#F4A0C0' />
            </linearGradient>
          </defs>
        </svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-3xl font-black text-text-primary tracking-tighter'>{percentage}%</p>
            {label && <p className='text-xs text-wargo-muted'>{label}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressRing;
