import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components/ui';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-background text-foreground flex items-center justify-center px-6'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 right-10 w-96 h-96 bg-wargo-primary/10 rounded-full blur-3xl' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md'
      >
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <ShieldCheck className='w-8 h-8 text-wargo-primary' />
            <span className='text-2xl font-black'>WARGO</span>
          </div>
          <h1 className='text-3xl font-bold'>Reset Password</h1>
          <p className='text-wargo-muted mt-2'>Enter your email to receive reset instructions</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center'
          >
            <h2 className='text-lg font-bold mb-2'>Check your email</h2>
            <p className='text-wargo-muted mb-6'>We've sent password reset instructions to {email}</p>
            <Button onClick={() => navigate('/login')} className='w-full'>
              Back to Login
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <Input
              label='Email Address'
              type='email'
              placeholder='commander@wargo.ai'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type='submit' size='lg' className='w-full' isLoading={isLoading}>
              Send Reset Link
            </Button>
          </form>
        )}

        <button
          onClick={() => navigate('/login')}
          className='flex items-center gap-2 mt-8 text-wargo-muted hover:text-white transition'
        >
          <ArrowLeft className='w-4 h-4' />
          Back to login
        </button>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
