import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Checkbox } from '../../components/ui';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', fullName: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setError('Please accept the terms and conditions');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError('Account creation failed. Please try again.');
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
          <h1 className='text-3xl font-bold'>Join WARGO</h1>
          <p className='text-wargo-muted mt-2'>Start executing your goals today</p>
        </div>

        {error && (
          <div className='mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input
            label='Full Name'
            type='text'
            placeholder='Commander'
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
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
          <Input
            label='Confirm Password'
            type='password'
            placeholder='••••••••'
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />

          <Checkbox
            label='I accept the terms and conditions'
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />

          <Button type='submit' size='lg' className='w-full' isLoading={isLoading}>
            Create Account
          </Button>
        </form>

        <p className='text-center text-wargo-muted mt-6'>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className='text-wargo-primary hover:underline font-semibold'
          >
            Sign in
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

export default Signup;
