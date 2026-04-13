import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Target, Brain, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: 'Smart Goal Execution',
      description: 'Break down your ambitions into achievable daily tasks',
    },
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Leverage Groq AI to create intelligent schedules',
    },
    {
      icon: Zap,
      title: 'Daily Reminders',
      description: 'Stay on track with intelligent notifications',
    },
    {
      icon: TrendingUp,
      title: 'Progress Analytics',
      description: 'Track your productivity and growth metrics',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-accent-rose/20 selection:text-accent-bold'>
      {/* Soft Premium Background Elements */}
      <div className='fixed inset-0 -z-10 bg-[#FAF7F5]'>
        <div className='absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#FDEEF4] rounded-full blur-[140px] opacity-60 animate-pulse-slow' />
        <div className='absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#EAF6E0] rounded-full blur-[120px] opacity-40 animate-pulse-slow' style={{ animationDelay: '3s' }} />
      </div>

      {/* Header */}
      <header className='sticky top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-card-border'>
        <nav className='max-w-7xl mx-auto px-8 py-5 flex items-center justify-between'>
          <div className='flex items-center gap-3 group cursor-pointer' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className='w-10 h-10 rounded-xl bg-accent-rose flex items-center justify-center shadow-glow-rose'>
              <ShieldCheck className='w-6 h-6 text-white' />
            </div>
            <span className='text-3xl font-black tracking-tighter text-text-primary uppercase sm:block hidden'>WARGO</span>
          </div>
          
          <div className='hidden lg:flex items-center gap-12'>
            <a href="#features" className='text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary hover:text-accent-rose transition-all'>Intelligence</a>
            <a href="#vision" className='text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary hover:text-accent-rose transition-all'>Vision</a>
            <a href="#protocol" className='text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary hover:text-accent-rose transition-all'>Protocol</a>
          </div>

          <div className='flex gap-4 items-center'>
            <button 
              onClick={() => navigate('/login')}
              className='px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest text-text-primary hover:bg-card/50 transition-all'
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className='px-8 py-3 rounded-full bg-accent-rose text-white text-[11px] font-black uppercase tracking-widest shadow-glow-rose hover:bg-accent-bold hover:scale-[1.05] transition-all transform active:scale-95'
            >
              Join Mission
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className='max-w-7xl mx-auto px-8 pt-32 pb-40 text-center space-y-12'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={item} className='space-y-4'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-rose/5 border border-accent-rose/10 mb-2'>
            <div className='w-1.5 h-1.5 rounded-full bg-accent-rose animate-pulse' />
            <p className='text-[9px] font-black uppercase tracking-[0.35em] text-accent-rose'>System Online • v1.0.4</p>
          </div>
          <h1 className='text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-text-primary'>
            Master Your <br />
            <span className='italic font-serif normal-case tracking-normal bg-gradient-to-r from-accent-rose via-accent-bold to-accent-rose bg-clip-text text-transparent pb-4'>Productive</span> Flow.
          </h1>
          <p className='text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed pt-4 px-4'>
            The elite AI-powered command center designed for absolute precision. Neutralize chaos, deploy focus, and dominate your daily missions.
          </p>
        </motion.div>

        <motion.div variants={item} className='flex gap-6 justify-center flex-wrap pt-6'>
          <button 
            onClick={() => navigate('/signup')}
            className='px-12 py-6 rounded-3xl bg-accent-bold text-white text-[14px] font-black uppercase tracking-[0.2em] shadow-medium hover:bg-accent-rose hover:scale-[1.02] transition-all transform active:scale-95 flex items-center gap-3'
          >
            Start Mission <ArrowRight className='w-5 h-5' />
          </button>
          <button 
            className='px-12 py-6 rounded-3xl bg-white border border-card-border text-text-primary text-[14px] font-black uppercase tracking-[0.2em] shadow-soft hover:bg-card-light transition-all'
          >
            System Overview
          </button>
        </motion.div>

        {/* Hero Preview Card */}
        <motion.div
          variants={item}
          className='max-w-5xl mx-auto mt-24 relative group'
        >
          <div className='absolute -inset-4 bg-gradient-to-b from-accent-rose/5 to-transparent rounded-[40px] blur-2xl group-hover:opacity-100 transition duration-1000' />
          <div className='relative bg-white/40 backdrop-blur-2xl rounded-[40px] border border-card-border p-2 shadow-2xl overflow-hidden'>
            <div className='bg-card-light rounded-[38px] p-6 sm:p-12 overflow-hidden flex flex-col sm:flex-row gap-12 items-center'>
              <div className='flex-1 text-left space-y-6'>
                <p className='text-[10px] font-black uppercase tracking-[0.3em] text-accent-rose'>Live Preview</p>
                <h3 className='text-4xl font-bold tracking-tight text-text-primary'>COMMAND CENTER</h3>
                <p className='text-text-secondary font-medium leading-relaxed'>
                  Your personal dashboard showing real-time mission progress, streak analytics, and AI-optimized schedule adjustments.
                </p>
                <div className='flex gap-4 pt-4'>
                  <div className='px-4 py-2 rounded-2xl bg-wargo-streak text-accent-rose text-xs font-bold'>47 DAY STREAK</div>
                  <div className='px-4 py-2 rounded-2xl bg-wargo-success text-text-primary text-xs font-bold'>+320 XP</div>
                </div>
              </div>
              <div className='w-full sm:w-auto flex justify-center'>
                 <div className='relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center bg-white rounded-full shadow-medium border border-card-border/50'>
                    <div className='absolute inset-4 rounded-full border-[12px] border-accent-rose/10 pointer-events-none' />
                    <div className='text-center'>
                      <span className='text-6xl font-black text-text-primary tracking-tighter'>73%</span>
                      <p className='text-[9px] font-black uppercase tracking-widest text-accent-rose mt-1'>Deployed</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <section id="features" className='max-w-7xl mx-auto px-8 py-32 space-y-20'>
        <div className='space-y-4 text-center'>
          <p className='text-[10px] font-black uppercase tracking-[0.3em] text-accent-rose'>Capabilities</p>
          <h2 className='text-4xl md:text-5xl font-bold text-text-primary tracking-tight'>ENGINEERED FOR EXCELLENCE</h2>
        </div>
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='group p-10 rounded-[32px] bg-white border border-card-border hover:border-accent-rose/30 hover:scale-[1.02] transition-all duration-500 shadow-soft hover:shadow-medium text-left'
            >
              <div className='w-14 h-14 rounded-2xl bg-card-light flex items-center justify-center text-accent-rose mb-8 group-hover:bg-accent-rose group-hover:text-white transition-colors duration-500'>
                <feature.icon className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-text-primary'>{feature.title}</h3>
              <p className='text-text-secondary text-sm font-medium leading-relaxed'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='max-w-5xl mx-auto px-8 py-40'>
        <div className='relative rounded-[48px] bg-accent-rose p-12 sm:p-24 overflow-hidden text-center shadow-2xl'>
          {/* Abstract blobs for CTA */}
          <div className='absolute top-[-20%] left-[-10%] w-64 h-64 bg-accent-bold rounded-full blur-[80px] opacity-40' />
          <div className='absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-white rounded-full blur-[100px] opacity-20' />
          
          <div className='relative z-10 space-y-10'>
             <h2 className='text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight'>
               Ready to Deploy <br /> Your Full Potential?
             </h2>
             <p className='text-white/80 text-lg font-medium max-w-xl mx-auto'>
               Join the elite tier of achievers who demand absolute precision from their tools. Initiate your trial today.
             </p>
             <button 
              onClick={() => navigate('/signup')}
              className='px-12 py-6 rounded-3xl bg-white text-accent-bold text-[14px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-card-light hover:scale-[1.05] transition-all transform active:scale-95'
             >
               Initialize Now
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-card-border py-8 mt-20'>
        <div className='max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-wargo-muted'>
          <p>&copy; 2024 WARGO. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-white transition'>Privacy</a>
            <a href='#' className='hover:text-white transition'>Terms</a>
            <a href='#' className='hover:text-white transition'>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
