import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Flame, Target, Clock, CheckCircle2, AlertCircle, GripVertical } from 'lucide-react';
import Card from './Card';

export const Badge = ({ label, variant = 'primary', size = 'sm' }) => {
  const variants = {
    primary: 'bg-wargo-primary/20 text-wargo-primary border border-wargo-primary/30',
    success: 'bg-green-500/20 text-green-300 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    danger: 'bg-red-500/20 text-red-300 border border-red-500/30',
    streak: 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span className={`font-semibold rounded-lg ${variants[variant]} ${sizes[size]}`}>
      {label}
    </span>
  );
};

export const TaskCard = ({ task, onComplete, onSkip, isDark = true }) => {
  const priorityColor = {
    high: 'border-red-500/30 bg-red-500/5',
    medium: 'border-yellow-500/30 bg-yellow-500/5',
    low: 'border-green-500/30 bg-green-500/5',
  };

  const priorityIcon = {
    high: AlertCircle,
    medium: Clock,
    low: CheckCircle2,
  };

  const PriorityIcon = priorityIcon[task.priority] || Clock;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`p-4 rounded-xl border ${priorityColor[task.priority]} ${
        isDark ? 'bg-card-dark/50' : 'bg-white/50'
      } cursor-move`}
    >
      <div className='flex items-start gap-4'>
        <GripVertical className='w-4 h-4 text-wargo-muted mt-1 flex-shrink-0' />
        
        <div className='flex-1 min-w-0'>
          <h4 className='font-semibold text-white truncate'>{task.title}</h4>
          {task.description && (
            <p className='text-sm text-wargo-muted line-clamp-2 mt-1'>{task.description}</p>
          )}
          <div className='flex items-center gap-2 mt-3'>
            <PriorityIcon className='w-4 h-4 text-wargo-muted' />
            <span className='text-xs text-wargo-muted'>{task.duration || 30}min</span>
            <Badge label={task.status?.toUpperCase()} variant={task.status === 'completed' ? 'success' : 'primary'} size='sm' />
          </div>
        </div>

        {task.status !== 'completed' && (
          <div className='flex gap-2 flex-shrink-0'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={onComplete}
              className='p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 transition'
            >
              <CheckCircle2 className='w-4 h-4' />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={onSkip}
              className='p-2 rounded-lg bg-gray-500/20 hover:bg-gray-500/30 text-gray-400 transition'
            >
              <Clock className='w-4 h-4' />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const StatCard = ({ label, value, icon: Icon, trend, isDark = true }) => {
  return (
    <Card variant={isDark ? 'dark' : 'light'} className='flex items-center justify-between'>
      <div>
        <p className={`text-sm ${isDark ? 'text-wargo-muted' : 'text-text-muted-light'}`}>{label}</p>
        <p className={`mt-1 text-2xl font-bold ${isDark ? 'text-white' : 'text-text-light'}`}>{value}</p>
        {trend && (
          <p className={`text-xs mt-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last week
          </p>
        )}
      </div>
      {Icon && (
        <div className='p-4 rounded-xl bg-wargo-primary/10'>
          <Icon className='w-6 h-6 text-wargo-primary' />
        </div>
      )}
    </Card>
  );
};

export const StreakBadge = ({ count, isDark = true }) => {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${isDark ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-yellow-500/10'}`}>
      <Flame className='w-5 h-5 text-yellow-400' />
      <span className='font-bold text-yellow-300'>{count} day streak</span>
    </div>
  );
};

export const XPBadge = ({ xp, isDark = true }) => {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-500/10'}`}>
      <Zap className='w-5 h-5 text-green-400' />
      <span className='font-bold text-green-300'>+{xp} XP</span>
    </div>
  );
};

export default TaskCard;
