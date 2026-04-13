import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Card, Button, TaskCard } from '../../components/ui';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const days = [];
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysInMonth = getDaysInMonth(currentDate);

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  const dayTasks = [
    { id: 1, title: 'Morning standup', time: '09:00 AM', duration: 15 },
    { id: 2, title: 'Code review', time: '10:30 AM', duration: 45 },
    { id: 3, title: 'Lunch break', time: '12:00 PM', duration: 60 },
    { id: 4, title: 'Design session', time: '01:30 PM', duration: 120 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='space-y-8'
    >
      <h1 className='text-4xl font-black'>Daily Schedule</h1>

      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Calendar */}
        <Card className='lg:col-span-1'>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-bold text-lg'>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
              <div className='flex gap-2'>
                <Button
                  variant='secondary'
                  size='sm'
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                >
                  <ChevronLeft className='w-4 h-4' />
                </Button>
                <Button
                  variant='secondary'
                  size='sm'
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                >
                  <ChevronRight className='w-4 h-4' />
                </Button>
              </div>
            </div>

            <div className='grid grid-cols-7 gap-2'>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <p key={day} className='text-center text-xs font-bold text-wargo-muted'>{day}</p>
              ))}
              {days.map((day, i) => (
                <button
                  key={i}
                  onClick={() => day && setSelectedDate(day)}
                  className={`aspect-square rounded-lg text-sm font-semibold transition ${
                    !day
                      ? ''
                      : day.toDateString() === selectedDate.toDateString()
                      ? 'bg-wargo-primary text-white'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {day?.getDate()}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Time Blocks */}
        <div className='lg:col-span-2'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold'>
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </h2>
            <p className='text-wargo-muted mt-1'>{dayTasks.length} tasks scheduled</p>
          </div>

          <div className='space-y-4'>
            {dayTasks.map(task => (
              <Card key={task.id}>
                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <Clock className='w-5 h-5 text-wargo-primary' />
                    <span className='text-xs font-bold mt-2'>{task.time}</span>
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-bold'>{task.title}</h3>
                    <p className='text-xs text-wargo-muted mt-1'>{task.duration} minutes</p>
                  </div>
                  <Button variant='secondary' size='sm'>Reschedule</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Calendar;
