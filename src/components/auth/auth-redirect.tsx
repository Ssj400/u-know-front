'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const AuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token && token !== undefined) {
      router.push('/main/dashboard');
    }
  }, [router]);

  return null;
};

export default AuthRedirect;
