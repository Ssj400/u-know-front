'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';
import Cookies from 'js-cookie';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            if (res.status === 201) {
                Cookies.set('token', res.data.token);
                router.push('/posts');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2 p-4">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}