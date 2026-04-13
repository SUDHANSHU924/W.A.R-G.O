import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Flame, Target, Clock, CheckCircle2, AlertCircle, GripVertical } from 'lucide-react';
import Card from './Card';

export const Badge = ({ label, variant = 'primary', size = 'sm' }) => {
  const variants = {
    primary: 'bg-accent-rose/10 text-accent-rose border border-accent-rose/20',
    success: 'bg-wargo-success text-text-primary px-3 py-1', // Mint success tone
    warning: 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/20',
    danger: 'bg-wargo-urgent-bg text-wargo-urgent-text border border-wargo-urgent-text/20',
    streak: 'bg-wargo-streak text-accent-rose border border-accent-rose/10',
    active: 'bg-accent-bold text-white shadow-glow-rose',
    pending: 'bg-black/5 text-text-secondary border border-black/5',
    urgent: 'bg-wargo-urgent-bg text-wargo-urgent-text border border-wargo-urgent-text/20 uppercase tracking-widest text-[10px]',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-[11px] uppercase tracking-wider',
    md: 'px-3 py-1.5 text-xs font-bold uppercase tracking-widest',
  };

  return (
    <span className={`font-bold rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]}`}>
      {label}
    </span>
  );
};

export const TaskCard = ({ task, onComplete, onSkip }) => {
  const statusStyles = {
    completed: 'opacity-60 bg-card/40 grayscale-[0.2]',
    active: 'border-accent-bold shadow-medium ring-1 ring-accent-bold/20',
    pending: 'bg-card border-card-border shadow-soft',
    urgent: 'bg-wargo-urgent-bg border-wargo-urgent-text/20 shadow-soft',
  };

  const statusBadge = {
    completed: 'success',
    active: 'active',
    pending: 'pending',
    urgent: 'urgent',
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(192, 87, 122, 0.12)' }}
      whileTap={{ scale: 0.99 }}
      className={`p-5 rounded-3xl border transition-all duration-300 ${statusStyles[task.status] || statusStyles.pending} cursor-pointer group`}
    >
      <div className='flex items-center gap-4'>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          task.status === 'completed' ? 'bg-accent-rose/20 text-accent-rose' : 'bg-white/50 text-text-secondary border border-card-border group-hover:border-accent-rose/30'
        }`}>
          {task.status === 'completed' ? <CheckCircle2 className='w-5 h-5' /> : <div className='w-5 h-5 rounded-full border-2 border-current opacity-30' />}
        </div>
        
        <div className='flex-1 min-w-0'>
          <h4 className={`text-lg font-bold tracking-tight ${task.status === 'completed' ? 'text-text-secondary line-through' : 'text-text-primary'}`}>
            {task.title}
          </h4>
          <div className='flex items-center gap-2 mt-1'>
            <span className='text-xs text-text-secondary font-medium'>
              {task.status === 'completed' ? 'Completed • 08:30 AM' : `${task.duration || 30} mins remaining`}
            </span>
            {task.status === 'active' && (
              <span className='w-1.5 h-1.5 rounded-full bg-accent-bold animate-pulse ml-1' />
            )}
          </div>
        </div>

        <div className='flex-shrink-0'>
          <Badge label={task.status?.toUpperCase()} variant={statusBadge[task.status] || 'pending'} size='sm' />
        </div>
      </div>
    </motion.div>
  );
};

export const StatCard = ({ label, value, icon: Icon, trend }) => {
  return (
    <Card className='flex items-center justify-between p-6 bg-card border-card-border shadow-soft hover:shadow-medium transition-shadow duration-500'>
      <div className='space-y-1'>
        <p className='text-[10px] font-black uppercase tracking-[0.2em] text-accent-rose'>{label}</p>
        <p className='text-3xl font-bold text-text-primary tracking-tight'>{value}</p>
      </div>
      {Icon && (
        <div className='p-3 rounded-2xl bg-accent-rose/5 text-accent-rose'>
          <Icon className='w-6 h-6' />
        </div>
      )}
    </Card>
  );
};

export const StreakBadge = ({ count }) => {
  return (
    <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-wargo-streak text-accent-rose shadow-soft'>
      <Flame className='w-4 h-4 text-accent-rose fill-accent-rose/20' />
      <span className='text-[11px] font-bold uppercase tracking-wider text-accent-rose'>{count} Day Streak</span>
    </div>
  );
};

export const XPBadge = ({ xp }) => {
  return (
    <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-wargo-success text-text-primary shadow-soft'>
      <Zap className='w-4 h-4 text-accent-rose' />
      <span className='text-[11px] font-bold uppercase tracking-wider'>+{xp} XP</span>
    </div>
  );
};

export default TaskCard;
