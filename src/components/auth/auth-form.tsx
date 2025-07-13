'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';
import Cookies from 'js-cookie';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AuthFormProps {
  isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = isLogin ? '/auth/login' : '/auth/register';
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const data = isLogin ? { email, password } : { nickname, email, password };

    try {
      const res = await api.post(url, data);
      if (res.status === 201 || res.status === 200) {

        Cookies.set('access_token', res.data.access_token);
        router.back();
        
      }
    } catch (error) {

      if (typeof error === 'object' && error !== null && 'response' in error) {
        const err = error as { response: { status: number; data: { message: string } } };
        const errorMessage = String(err.response.data.message);

        setError((errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1)));
      } else {
        console.error('Request failed:', error);
        setError('An unexpected error occurred');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-4xl font-bold text-center mb-[10%]">{isLogin ? 'Login' : 'Register'}</h1>
      <p className="text-center"> {isLogin ? 'Welcome back! Please enter your credentials.' : 'Create a new account by filling in the details below.'}</p>
      <p className='text-center text-red-500'>{error}</p>
      {!isLogin && (
        <Input value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Name" />
      )}
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      {!isLogin && (
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />  
      )}

      <Button type="submit">{'Send'}</Button>
      <p className="text-center text-sm">
        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => {
            setError(null);
            setEmail('');
            setPassword('');
            setNickname('');
            router.push(isLogin ? '/auth/register' : '/auth/login');
          }}
        >
          {isLogin ? ' Register' : ' Login'}
        </span>
      </p>
    </form>
  );
}