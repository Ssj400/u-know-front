'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const AuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const access_token = Cookies.get('access_token');
    if (access_token && access_token !== undefined) {
      router.push('/main/dashboard');
    }
  }, [router]);

  return null;
};

export default AuthRedirect;
