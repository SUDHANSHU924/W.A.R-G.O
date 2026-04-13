import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components/ui';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
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
          <h1 className='text-3xl font-bold'>Welcome Back</h1>
          <p className='text-wargo-muted mt-2'>Sign in to your WARGO command center</p>
        </div>

        {error && (
          <div className='mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input
            label='Email Address'
            type='email'
            placeholder='commander@wargo.ai'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            label='Password'
            type='password'
            placeholder='••••••••'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <div className='flex items-center justify-between text-sm'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='checkbox' className='w-4 h-4 accent-wargo-primary' />
              <span className='text-wargo-muted'>Remember me</span>
            </label>
            <button
              type='button'
              onClick={() => navigate('/forgot-password')}
              className='text-wargo-primary hover:underline'
            >
              Forgot password?
            </button>
          </div>

          <Button type='submit' size='lg' className='w-full' isLoading={isLoading}>
            Sign In
          </Button>
        </form>

        <p className='text-center text-wargo-muted mt-6'>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className='text-wargo-primary hover:underline font-semibold'
          >
            Create one
          </button>
        </p>

        <button
          onClick={() => navigate('/landing')}
          className='flex items-center gap-2 mt-8 text-wargo-muted hover:text-white transition'
        >
          <ArrowLeft className='w-4 h-4' />
          Back to home
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
