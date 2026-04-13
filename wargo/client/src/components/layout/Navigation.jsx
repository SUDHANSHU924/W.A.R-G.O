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
      <div className='flex items-center gap-3 mb-10 px-2 group cursor-pointer' onClick={() => navigate('/')}>
        <motion.div
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='w-10 h-10 rounded-xl bg-accent-rose flex items-center justify-center shadow-glow-rose'
        >
          <ShieldCheck className='w-6 h-6 text-white' />
        </motion.div>
        <h1 className='text-2xl font-bold tracking-tighter text-text-primary'>WARGO</h1>
      </div>

      {/* Navigation */}
      <nav className='flex-1 space-y-3'>
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 font-bold text-[13px] uppercase tracking-wider ${
              activePage === item.id
                ? 'text-accent-rose bg-card border border-card-border shadow-soft'
                : 'text-text-secondary hover:text-accent-rose hover:bg-card/50'
            }`}
            onClick={() => handleNavClick(item)}
          >
            <item.icon className={`w-5 h-5 transition-colors ${activePage === item.id ? 'text-accent-rose' : 'text-text-secondary/60'}`} />
            <span>{item.label}</span>
            {activePage === item.id && (
              <motion.div 
                layoutId='activeNav'
                className='ml-auto w-1.5 h-1.5 rounded-full bg-accent-rose'
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Profile / Logout Section */}
      <div className='mt-auto pt-6 border-t border-card-border/50'>
        <motion.button
          whileHover={{ x: 4 }}
          className='w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-text-secondary hover:text-accent-rose hover:bg-card/50 transition-all duration-300 font-bold text-[13px] uppercase tracking-wider'
        >
          <div className='w-8 h-8 rounded-full bg-accent-rose/10 flex items-center justify-center'>
            <LogOut className='w-4 h-4 text-accent-rose' />
          </div>
          <span>Logout</span>
        </motion.button>
      </div>
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
    <aside className='hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-white/50 backdrop-blur-3xl border-r border-card-border p-8 flex-col z-50'>
      {sidebarContent}
    </aside>
  );
};

export const Header = ({ isMobile, setIsOpen }) => {
  return (
    <header className='sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-card-border lg:hidden'>
      <div className='px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => setIsOpen(true)}
            className='p-2 bg-card border border-card-border rounded-xl transition shadow-soft'
          >
            <Menu className='w-6 h-6 text-accent-rose' />
          </button>
          <h2 className='text-3xl font-black tracking-tighter text-text-primary'>WARGO</h2>
        </div>

        <div className='flex items-center gap-4'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='p-3 rounded-full bg-card border border-card-border text-accent-rose shadow-soft transition'
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
