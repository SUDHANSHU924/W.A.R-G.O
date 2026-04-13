import React from 'react';
import { motion } from 'framer-motion';

export const ProgressRing = ({ percentage = 0, size = 120, strokeWidth = 8, label = '', animated = true }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='relative' style={{ width: size, height: size }}>
        <motion.svg
          width={size}
          height={size}
          className='absolute'
          animate={animated ? { rotate: 360 } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill='none'
            stroke='rgba(255,255,255,0.1)'
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill='none'
            stroke='url(#gradient)'
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap='round'
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#0066FF' />
              <stop offset='100%' stopColor='#A855F7' />
            </linearGradient>
          </defs>
        </motion.svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-2xl font-black'>{percentage}%</p>
            {label && <p className='text-xs text-wargo-muted'>{label}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressRing;
