import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-wargo-bg flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white overflow-hidden rounded-[40px] shadow-2xl border-8 border-[#3D3B3A]">
        {/* Status Bar Placeholder */}
        <div className="pt-2 px-8 flex justify-between items-center text-[10px] font-bold">
          <span>9:41</span>
        </div>

        {/* Dashboard Screen Content */}
        <div className="p-6">
          <header className="flex justify-between items-center mb-6">
            <div>
              <p className="wargo-label mb-1">Command Center</p>
              <h1 className="text-4xl font-black tracking-tight text-wargo-primary">WARGO</h1>
              <p className="text-[10px] text-wargo-secondary mt-1">Monday, June 9 • Day 47 of your mission</p>
            </div>
            <button className="h-10 w-10 bg-wargo-card rounded-full flex items-center justify-center border border-wargo-border">
              <span className="sr-only">Notifications</span>
              <div className="h-4 w-4 rounded-full border border-wargo-rose relative">
                <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-wargo-rose rounded-full border border-white"></div>
              </div>
            </button>
          </header>

          {/* Today's Progress Card */}
          <section className="wargo-card relative mb-8 flex items-center gap-6 overflow-hidden">
            <div className="relative h-24 w-24 flex-shrink-0">
              <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FDEEF4" strokeWidth="12"></circle>
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E05585" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="67.8" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(224,85,133,0.3)]"></circle>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">73%</span>
            </div>
            <div>
              <p className="wargo-label text-[8px] mb-1">Today's Progress</p>
              <h2 className="text-sm font-bold mb-2">8 of 11 missions accomplished</h2>
              <div className="flex gap-2">
                <div className="bg-wargo-badge-streak text-wargo-accent font-bold text-[8px] px-2 py-1 rounded-full flex items-center gap-1">
                  🔥 47 Day Streak
                </div>
                <div className="bg-wargo-badge-xp text-emerald-800 font-bold text-[8px] px-2 py-1 rounded-full flex items-center gap-1">
                  ⚡ +320 XP
                </div>
              </div>
            </div>
          </section>

          {/* Missions List */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-xs uppercase tracking-widest">Today's Missions</h3>
              <a href="#" className="text-wargo-accent text-xs font-bold">View All →</a>
            </div>

            <div className="space-y-3">
              {/* Completed */}
              <div className="wargo-card flex items-center gap-4 opacity-60">
                <div className="h-10 w-10 flex-shrink-0 bg-wargo-accent rounded-full flex items-center justify-center text-white">✓</div>
                <div>
                  <p className="text-sm font-bold leading-tight">Morning Tactical Run — 5km</p>
                  <p className="text-[10px] text-wargo-secondary italic">Completed · 06:30 AM</p>
                </div>
              </div>

              {/* Active */}
              <div className="wargo-card border-wargo-rose border-2 active-glow flex items-center gap-4">
                <div className="h-10 w-10 flex-shrink-0 bg-wargo-badge-streak text-wargo-accent rounded-full flex items-center justify-center">◌</div>
                <div className="flex-1">
                  <p className="text-sm font-bold leading-tight">Deep Work Block — Strategy Deck</p>
                  <p className="text-[10px] text-wargo-secondary">In Progress · 2h 15m remaining</p>
                </div>
                <span className="text-wargo-accent bg-wargo-badge-streak text-[8px] font-black px-2 py-1 rounded uppercase">Active</span>
              </div>

              {/* Pending */}
              <div className="wargo-card flex items-center gap-4">
                <div className="h-10 w-10 flex-shrink-0 border border-wargo-border rounded-full flex items-center justify-center">▤</div>
                <div className="flex-1">
                  <p className="text-sm font-bold leading-tight">Read 30 Pages — Atomic Habits</p>
                  <p className="text-[10px] text-wargo-secondary">Pending · Scheduled 8:00 PM</p>
                </div>
                <span className="text-gray-400 bg-gray-100 text-[8px] font-black px-2 py-1 rounded uppercase">Pending</span>
              </div>
            </div>
          </section>

          {/* Pagination Placeholder */}
          <div className="mt-8 flex justify-center items-center gap-3">
            <div className="h-6 w-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center text-[10px]">
              &lt; 1/2 &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
