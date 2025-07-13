'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export function useAuthRedirect() {
    const router = useRouter();

    useEffect(() => {
        const access_token = Cookies.get('access_token');
        if (!access_token) {
            router.push('/auth/login');
        }
    }, [router]);
}