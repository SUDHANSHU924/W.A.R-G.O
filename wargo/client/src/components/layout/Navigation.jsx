import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Target,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({ activePage, setPage, isMobile = false, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Command Center', path: '/' },
    { id: 'goals', icon: Target, label: 'Execution Goals', path: '/goals' },
    { id: 'calendar', icon: Calendar, label: 'Daily Schedule', path: '/calendar' },
    { id: 'analytics', icon: BarChart3, label: 'Intelligence', path: '/analytics' },
    { id: 'settings', icon: Settings, label: 'System Settings', path: '/settings' },
  ];

  const handleNavClick = (item) => {
    setPage(item.id);
    navigate(item.path);
    if (isMobile) setIsOpen(false);
  };

  const sidebarContent = (
    <div className='flex flex-col h-full'>
      {/* Logo */}
      <div className='flex items-center gap-3 mb-10 px-2'>
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
          className='w-8 h-8 rounded-lg bg-wargo-primary flex items-center justify-center'
        >
          <ShieldCheck className='w-5 h-5 text-white' />
        </motion.div>
        <h1 className='text-xl font-black tracking-tighter'>WARGO</h1>
      </div>

      {/* Navigation */}
      <nav className='flex-1 space-y-2'>
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ x: 5 }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium ${
              activePage === item.id
                ? 'text-white bg-wargo-primary/10 border border-wargo-primary/20'
                : 'text-wargo-muted hover:text-white hover:bg-white/5'
            }`}
            onClick={() => handleNavClick(item)}
          >
            <item.icon className='w-5 h-5' />
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Logout */}
      <motion.button
        whileHover={{ x: 5 }}
        className='w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-wargo-muted hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 font-medium'
      >
        <LogOut className='w-5 h-5' />
        <span>Logout</span>
      </motion.button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Sidebar */}
        <motion.div
          initial={{ x: -320 }}
          animate={{ x: isOpen ? 0 : -320 }}
          transition={{ type: 'spring', damping: 20 }}
          className='fixed left-0 top-0 h-screen w-64 bg-background border-r border-card-border p-6 z-40 lg:hidden'
        >
          {sidebarContent}
        </motion.div>
        {isOpen && (
          <div
            className='fixed inset-0 bg-black/50 z-30 lg:hidden'
            onClick={() => setIsOpen(false)}
          />
        )}
      </>
    );
  }

  return (
    <aside className='hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-background border-r border-card-border p-6 flex-col z-50'>
      {sidebarContent}
    </aside>
  );
};

export const Header = ({ isMobile, setIsOpen }) => {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className='sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-card-border'>
      <div className='px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          {isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              className='p-2 hover:bg-white/5 rounded-lg transition'
            >
              <Menu className='w-5 h-5' />
            </button>
          )}
          <div>
            <p className='text-sm text-wargo-muted uppercase tracking-wider'>Today</p>
            <h2 className='text-lg font-bold'>{dateStr}</h2>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='p-2.5 rounded-xl bg-wargo-primary/10 hover:bg-wargo-primary/20 border border-wargo-primary/20 text-wargo-primary transition'
          >
            <Bell className='w-5 h-5' />
          </motion.button>
          <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-wargo-primary to-wargo-secondary flex items-center justify-center'>
            <span className='text-sm font-bold text-white'>U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
