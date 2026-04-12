import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Target, Calendar, BarChart3, Settings, Sparkles, Search, Plus, Bell, LogOut, ChevronRight, ShieldCheck, Zap, Flame, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const Sidebar = ({ activePage, setPage }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Command Center' },
    { id: 'goals', icon: Target, label: 'Execution Goals' },
    { id: 'calendar', icon: Calendar, label: 'Daily Schedule' },
    { id: 'analytics', icon: BarChart3, label: 'Intelligence' },
    { id: 'settings', icon: Settings, label: 'System Settings' },
  ];
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-card-border p-6 flex flex-col z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded-lg bg-wargo-primary flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-black tracking-tighter">WARGO</span>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button key={item.id} onClick={() => setPage(item.id)} className={'w-full nav-item ' + (activePage === item.id ? 'nav-item-active' : '')}>
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

const Dashboard = () => (
  <div className="p-8 text-white">
    <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4">Command Center</h1>
    <div className="glass-card p-8 bg-wargo-primary/5 border-wargo-primary/20">
      <p className="text-xl font-bold">System Status: Optimal</p>
    </div>
  </div>
);

export default function App() {
  const [p, s] = React.useState('dashboard');
  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar activePage={p} setPage={s} />
      <main className="pl-64">
       <Dashboard />
      </main>
    </div>
  );
}
