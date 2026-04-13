import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Bell, ArrowRight } from 'lucide-react';
import { Card, ProgressRing, TaskCard, StreakBadge, XPBadge } from '../../components/ui';

const Dashboard = () => {
  const [tasks] = useState([
    { id: 1, title: 'Morning Tactical Run — 5km', status: 'completed' },
    { id: 2, title: 'Deep Work Block — Strategy Deck', status: 'active' },
    { id: 3, title: 'Read 30 Pages — Atomic Habits', status: 'pending' },
    { id: 4, title: 'Submit Proposal — Client X', status: 'urgent' },
  ]);

  const stats = {
    todayProgress: 73,
    completedTasks: 8,
    totalTasks: 11,
    streak: 47,
    xp: 320,
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = { 
    hidden: { opacity: 0, y: 15 }, 
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } } 
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={container}
      className='max-w-2xl mx-auto space-y-10 pb-20 mt-4'
    >
      {/* Top Section */}
      <motion.div variants={item} className='flex items-center justify-between'>
        <div className='space-y-1'>
          <p className='text-[10px] font-black uppercase tracking-[0.25em] text-accent-rose'>Command Center</p>
          <h1 className='text-5xl font-bold tracking-tighter text-text-primary'>WARGO</h1>
          <p className='text-[12px] font-medium text-text-secondary mt-1'>Monday, June 9 • Day 47 of your mission</p>
        </div>
        <div className='w-12 h-12 rounded-full bg-card hover:bg-card-hover flex items-center justify-center text-accent-rose shadow-soft transition-colors cursor-pointer border border-card-border/50'>
          <Bell className='w-5 h-5' />
        </div>
      </motion.div>

      {/* Progress Card */}
      <motion.div variants={item}>
        <Card className='p-8 bg-card border-card-border shadow-medium rounded-[32px] flex items-center gap-10'>
          <div className='flex-shrink-0'>
            <ProgressRing percentage={73} size={110} strokeWidth={10} />
          </div>
          <div className='flex-1 space-y-4'>
            <div className='space-y-1'>
              <p className='text-[10px] font-black uppercase tracking-[0.15em] text-accent-rose'>Today's Progress</p>
              <p className='text-lg font-bold text-text-primary mb-1'>8 of 11 missions accomplished</p>
            </div>
            <div className='flex gap-3'>
              <StreakBadge count={stats.streak} />
              <XPBadge xp={stats.xp} />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Missions List Header */}
      <motion.div variants={item} className='flex items-center justify-between px-1'>
        <h2 className='text-[11px] font-black uppercase tracking-[0.25em] text-text-primary'>Today's Missions</h2>
        <button className='text-[11px] font-bold text-accent-rose flex items-center gap-1 hover:gap-2 transition-all'>
          View All <ArrowRight className='w-3 h-3' />
        </button>
      </motion.div>

      {/* Task List */}
      <motion.div variants={item} className='space-y-4'>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </motion.div>

      {/* Add Task Button (Floating effect but inline) */}
      <motion.div variants={item} className='pt-2'>
        <button className='w-full py-5 rounded-[24px] bg-card border border-dashed border-accent-rose/30 text-accent-rose font-bold text-sm flex items-center justify-center gap-2 hover:bg-card-hover hover:border-accent-rose/50 transition-all shadow-soft'>
          <Plus className='w-5 h-5' />
          Initiate New Mission
        </button>
      </motion.div>
    </motion.div>
  );
};
export default Dashboard;
