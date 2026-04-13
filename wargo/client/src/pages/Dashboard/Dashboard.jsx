import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Sparkles, TrendingUp, Calendar, Clock } from 'lucide-react';
import { Card, Button, ProgressRing, TaskCard, Badge, StreakBadge, XPBadge } from '../../components/ui';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review quarterly goals', description: 'Assess progress and adjust priorities', duration: 20, priority: 'high', status: 'active' },
    { id: 2, title: 'Prepare presentation deck', description: 'Create slides for team meeting', duration: 45, priority: 'high', status: 'pending' },
    { id: 3, title: 'Code review session', description: 'Review 3 pull requests', duration: 30, priority: 'medium', status: 'pending' },
    { id: 4, title: 'Team standup meeting', description: 'Daily sync with the team', duration: 15, priority: 'medium', status: 'pending' },
    { id: 5, title: 'Exercise routine', description: '30 minutes workout', duration: 30, priority: 'low', status: 'completed' },
  ]);

  const stats = {
    todayProgress: 36,
    completedTasks: 5,
    totalTasks: 14,
    streak: 12,
    xp: 245,
    upcoming: 3,
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: 'completed' } : t));
  };

  const handleSkipTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: 'skipped' } : t));
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={container}
      className='space-y-8'
    >
      {/* Page Title */}
      <motion.div variants={item}>
        <h1 className='text-4xl font-black uppercase tracking-tight'>Command Center</h1>
        <p className='text-wargo-muted mt-2'>Execute your daily mission with precision</p>
      </motion.div>

      {/* Top Stats Grid */}
      <motion.div variants={item} className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card className='flex items-center justify-between'>
          <div>
            <p className='text-sm text-wargo-muted'>Completed Today</p>
            <p className='text-3xl font-bold mt-2'>{stats.completedTasks}/{stats.totalTasks}</p>
          </div>
          <div className='text-5xl font-black text-wargo-primary/20'>{stats.todayProgress}%</div>
        </Card>

        <Card className='flex items-center justify-between'>
          <StreakBadge count={stats.streak} />
        </Card>

        <Card className='flex items-center justify-between'>
          <XPBadge xp={stats.xp} />
        </Card>

        <Card className='flex items-center justify-between'>
          <div>
            <Clock className='w-5 h-5 text-wargo-primary mb-2' />
            <p className='text-sm text-wargo-muted'>Upcoming</p>
            <p className='text-2xl font-bold mt-1'>{stats.upcoming}</p>
          </div>
        </Card>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div variants={item} className='grid lg:grid-cols-3 gap-8'>
        {/* Progress Section */}
        <Card className='lg:col-span-1 flex flex-col items-center justify-center py-12'>
          <p className='text-sm text-wargo-muted uppercase tracking-wider mb-6'>Today's Progress</p>
          <ProgressRing percentage={stats.todayProgress} size={140} label='Complete' />
          <p className='text-xs text-wargo-muted mt-6 text-center'>
            Complete 2 more tasks to reach 50% today's goal
          </p>
        </Card>

        {/* Tasks Section */}
        <div className='lg:col-span-2 space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Today's Missions</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 px-4 py-2 rounded-xl bg-wargo-primary hover:bg-wargo-primary/90 text-white transition font-semibold'
            >
              <Plus className='w-5 h-5' />
              Add Task
            </motion.button>
          </div>

          <div className='space-y-3'>
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onComplete={() => handleCompleteTask(task.id)}
                onSkip={() => handleSkipTask(task.id)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div variants={item} className='space-y-4'>
        <div className='flex items-center gap-2'>
          <Sparkles className='w-5 h-5 text-wargo-secondary' />
          <h2 className='text-2xl font-bold'>AI Insights</h2>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          <Card className='border border-wargo-secondary/20 bg-wargo-secondary/5'>
            <div className='flex items-start justify-between'>
              <div>
                <h3 className='font-bold flex items-center gap-2'>
                  <TrendingUp className='w-4 h-4' />
                  Productivity Peak
                </h3>
                <p className='text-sm text-wargo-muted mt-2'>
                  Your productivity peaks between 9-11 AM. Schedule important tasks during this time.
                </p>
              </div>
              <Badge label='Insight' variant='primary' />
            </div>
          </Card>

          <Card className='border border-wargo-secondary/20 bg-wargo-secondary/5'>
            <div className='flex items-start justify-between'>
              <div>
                <h3 className='font-bold flex items-center gap-2'>
                  <Calendar className='w-4 h-4' />
                  Schedule Optimization
                </h3>
                <p className='text-sm text-wargo-muted mt-2'>
                  You have 3 upcoming conflicts. Reschedule to maintain your 12-day streak.
                </p>
              </div>
              <Badge label='Alert' variant='warning' />
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={item} className='grid md:grid-cols-3 gap-4'>
        <Button variant='secondary' className='w-full py-3'>
          View Weekly Schedule
        </Button>
        <Button variant='secondary' className='w-full py-3'>
          Check Analytics
        </Button>
        <Button variant='secondary' className='w-full py-3'>
          Create New Goal
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
