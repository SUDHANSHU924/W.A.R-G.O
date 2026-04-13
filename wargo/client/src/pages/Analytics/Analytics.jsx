import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Target, Calendar } from 'lucide-react';
import { Card, StatCard } from '../../components/ui';

const Analytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='space-y-8'
    >
      <div>
        <h1 className='text-4xl font-black'>Intelligence Dashboard</h1>
        <p className='text-wargo-muted mt-2'>Track your progress and productivity metrics</p>
      </div>

      {/* Stats Grid */}
      <div className='grid md:grid-cols-2 gap-4'>
        <StatCard
          label='Completion Rate'
          value='87%'
          icon={TrendingUp}
          trend={12}
        />
        <StatCard
          label='Weekly Streak'
          value='12 days'
          icon={Zap}
          trend={8}
        />
        <StatCard
          label='Goals On Track'
          value='6 of 8'
          icon={Target}
          trend={-5}
        />
        <StatCard
          label='Hours Productive'
          value='41.5'
          icon={Calendar}
          trend={15}
        />
      </div>

      {/* Charts */}
      <div className='grid lg:grid-cols-2 gap-8'>
        <Card>
          <h2 className='text-xl font-bold mb-6'>Weekly Productivity</h2>
          <div className='space-y-4'>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day}>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-medium'>{day}</span>
                  <span className='text-xs text-wargo-muted'>{Math.random() * 100 | 0}%</span>
                </div>
                <div className='w-full bg-white/5 rounded-full h-2'>
                  <motion.div
                    className='bg-gradient-to-r from-wargo-primary to-wargo-secondary h-full rounded-full'
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className='text-xl font-bold mb-6'>Goal Progress</h2>
          <div className='space-y-4'>
            {['Master React', 'Run Marathon', 'Read Books'].map((goal) => (
              <div key={goal}>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-medium'>{goal}</span>
                  <span className='text-xs text-wargo-muted'>{Math.random() * 100 | 0}%</span>
                </div>
                <div className='w-full bg-white/5 rounded-full h-2'>
                  <motion.div
                    className='bg-gradient-to-r from-wargo-secondary to-wargo-accent h-full rounded-full'
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 100}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Analytics;
