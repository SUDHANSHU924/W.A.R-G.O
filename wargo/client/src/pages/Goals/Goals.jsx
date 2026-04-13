import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Target, Zap } from 'lucide-react';
import { Card, Button, Badge } from '../../components/ui';

const Goals = () => {
  const [goals] = useState([
    {
      id: 1,
      title: 'Master React',
      category: 'Learning',
      deadline: '2024-06-30',
      progress: 65,
      tasks: 12,
      completed: 8,
      priority: 'high',
    },
    {
      id: 2,
      title: 'Run a Marathon',
      category: 'Fitness',
      deadline: '2024-05-15',
      progress: 45,
      tasks: 20,
      completed: 9,
      priority: 'high',
    },
    {
      id: 3,
      title: 'Read 12 Books',
      category: 'Personal',
      deadline: '2024-12-31',
      progress: 25,
      tasks: 12,
      completed: 3,
      priority: 'medium',
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='space-y-8'
    >
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-black'>Execution Goals</h1>
          <p className='text-wargo-muted mt-2'>Transform ambitions into measurable outcomes</p>
        </div>
        <Button className='flex items-center gap-2'>
          <Plus className='w-5 h-5' />
          New Goal
        </Button>
      </div>

      <div className='space-y-4'>
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            whileHover={{ y: -5 }}
            className='group'
          >
            <Card className='cursor-pointer group-hover:border-wargo-primary/50'>
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3'>
                    <Target className='w-5 h-5 text-wargo-primary' />
                    <h3 className='text-xl font-bold'>{goal.title}</h3>
                    <Badge label={goal.category} size='sm' variant='primary' />
                  </div>
                  
                  <div className='mt-4 space-y-2'>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-wargo-muted'>Progress</span>
                      <span className='font-bold'>{goal.progress}%</span>
                    </div>
                    <div className='w-full bg-white/5 rounded-full h-2'>
                      <motion.div
                        className='bg-gradient-to-r from-wargo-primary to-wargo-secondary h-full rounded-full'
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  <div className='mt-4 flex gap-6 text-sm'>
                    <div>
                      <p className='text-wargo-muted'>Tasks</p>
                      <p className='font-bold'>{goal.completed}/{goal.tasks}</p>
                    </div>
                    <div>
                      <p className='text-wargo-muted'>Deadline</p>
                      <p className='font-bold'>{new Date(goal.deadline).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <Button variant='secondary' size='sm'>View Details</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Goals;
