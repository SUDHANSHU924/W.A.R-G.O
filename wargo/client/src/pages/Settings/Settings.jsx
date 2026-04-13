import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, Palette, LogOut } from 'lucide-react';
import { Card, Button, Input, Select, Checkbox, Toggle } from '../../components/ui';

const Settings = () => {
  const [settings, setSettings] = useState({
    fullName: 'Commander',
    email: 'commander@wargo.ai',
    workStart: '09:00',
    workEnd: '17:00',
    theme: 'dark',
    notifications: true,
    emailReminders: true,
    pushNotifications: true,
    weeklyReport: true,
  });

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='space-y-8'
    >
      <div>
        <h1 className='text-4xl font-black'>System Settings</h1>
        <p className='text-wargo-muted mt-2'>Customize your WARGO experience</p>
      </div>

      {/* Profile Settings */}
      <Card className='space-y-6'>
        <div>
          <h2 className='text-2xl font-bold mb-6'>Profile</h2>
          <div className='space-y-4'>
            <Input
              label='Full Name'
              type='text'
              value={settings.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
            <Input
              label='Email Address'
              type='email'
              value={settings.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* Working Hours */}
      <Card className='space-y-6'>
        <div>
          <h2 className='text-xl font-bold flex items-center gap-2 mb-6'>
            <Clock className='w-5 h-5 text-wargo-primary' />
            Working Hours
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Input
              label='Start Time'
              type='time'
              value={settings.workStart}
              onChange={(e) => handleChange('workStart', e.target.value)}
            />
            <Input
              label='End Time'
              type='time'
              value={settings.workEnd}
              onChange={(e) => handleChange('workEnd', e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className='space-y-6'>
        <div>
          <h2 className='text-xl font-bold flex items-center gap-2 mb-6'>
            <Bell className='w-5 h-5 text-wargo-primary' />
            Notifications
          </h2>
          <div className='space-y-4'>
            <Checkbox
              label='Enable all notifications'
              checked={settings.notifications}
              onChange={(e) => handleChange('notifications', e.target.checked)}
            />
            <Checkbox
              label='Email reminders for tasks'
              checked={settings.emailReminders}
              onChange={(e) => handleChange('emailReminders', e.target.checked)}
            />
            <Checkbox
              label='Push notifications'
              checked={settings.pushNotifications}
              onChange={(e) => handleChange('pushNotifications', e.target.checked)}
            />
            <Checkbox
              label='Weekly productivity report'
              checked={settings.weeklyReport}
              onChange={(e) => handleChange('weeklyReport', e.target.checked)}
            />
          </div>
        </div>
      </Card>

      {/* Theme Settings */}
      <Card className='space-y-6'>
        <div>
          <h2 className='text-xl font-bold flex items-center gap-2 mb-6'>
            <Palette className='w-5 h-5 text-wargo-primary' />
            Appearance
          </h2>
          <Select
            label='Theme'
            options={[
              { value: 'dark', label: 'Dark (Default)' },
              { value: 'light', label: 'Light' },
              { value: 'auto', label: 'System' },
            ]}
            value={settings.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
          />
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className='border-red-500/20 space-y-4'>
        <h2 className='text-xl font-bold text-red-400'>Danger Zone</h2>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Sign Out</p>
            <p className='text-sm text-wargo-muted'>Sign out from this device</p>
          </div>
          <Button
            variant='danger'
            className='flex items-center gap-2'
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}
          >
            <LogOut className='w-4 h-4' />
            Logout
          </Button>
        </div>
      </Card>

      {/* Save Button */}
      <Button size='lg' className='w-full md:w-auto'>Save Changes</Button>
    </motion.div>
  );
};

export default Settings;
