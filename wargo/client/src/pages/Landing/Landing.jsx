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
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
      {/* Animated background */}
      <div className='fixed inset-0 -z-10'>
        <div className='absolute top-20 right-10 w-96 h-96 bg-wargo-primary/10 rounded-full blur-3xl animate-pulse-slow' />
        <div className='absolute bottom-20 left-10 w-96 h-96 bg-wargo-secondary/10 rounded-full blur-3xl animate-pulse-slow' style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className='sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-card-border'>
        <nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <ShieldCheck className='w-6 h-6 text-wargo-primary' />
            <span className='text-2xl font-black tracking-tighter'>WARGO</span>
          </div>
          <div className='flex gap-4'>
            <Button variant='secondary' onClick={() => navigate('/login')}>Sign In</Button>
            <Button onClick={() => navigate('/signup')}>Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className='max-w-7xl mx-auto px-6 py-20'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={item} className='text-center space-y-8'>
          <h1 className='text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight'>
            Plan. Execute. <span className='bg-gradient-to-r from-wargo-primary to-wargo-secondary bg-clip-text text-transparent'>Win.</span>
          </h1>
          
          <p className='text-xl text-wargo-muted max-w-2xl mx-auto'>
            WARGO is your personal AI command center that transforms ambitions into consistent daily wins. Set goals, get AI-powered plans, and track your progress with precision.
          </p>

          <div className='flex gap-4 justify-center flex-wrap'>
            <Button size='lg' onClick={() => navigate('/signup')}>
              Start Free Trial <ArrowRight className='w-5 h-5' />
            </Button>
            <Button variant='secondary' size='lg'>Watch Demo</Button>
          </div>

          {/* Hero Image */}
          <motion.div
            className='mt-12 relative'
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className='bg-gradient-to-b from-wargo-primary/10 to-transparent rounded-2xl p-1'>
              <div className='bg-card-dark rounded-xl p-8 text-left'>
                <p className='text-sm font-bold text-wargo-primary mb-6'>COMMAND CENTER PREVIEW</p>
                <div className='space-y-4'>
                  <div className='bg-white/5 rounded-lg p-4 border border-white/10'>
                    <p className='font-semibold'>Today's Mission Summary</p>
                    <p className='text-sm text-wargo-muted mt-2'>8 of 11 missions accomplished • 73% progress</p>
                  </div>
                  <div className='grid grid-cols-3 gap-4'>
                    {['Design', 'Development', 'Testing'].map((task) => (
                      <div key={task} className='bg-white/5 rounded-lg p-3 text-center border border-white/10'>
                        <p className='text-xs text-wargo-muted'>{task}</p>
                        <p className='text-lg font-bold mt-2'>2 tasks</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className='max-w-7xl mx-auto px-6 py-20'>
        <h2 className='text-4xl font-bold text-center mb-16'>Why Choose WARGO?</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className='bg-card-dark border border-card-border rounded-2xl p-8 hover:border-wargo-primary/50 transition-all'
            >
              <feature.icon className='w-12 h-12 text-wargo-primary mb-4' />
              <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
              <p className='text-wargo-muted'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='max-w-4xl mx-auto px-6 py-20 text-center'>
        <div className='bg-gradient-to-r from-wargo-primary/10 to-wargo-secondary/10 border border-wargo-primary/20 rounded-2xl p-12'>
          <h2 className='text-3xl font-bold mb-4'>Ready to Command Your Goals?</h2>
          <p className='text-wargo-muted mb-8'>Join thousands of disciplined achievers who use WARGO to execute daily.</p>
          <Button size='lg' onClick={() => navigate('/signup')}>Get Started Now</Button>
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
