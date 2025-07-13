
'use client';

import { useState, useEffect } from 'react';
import SignUpButton from './sign-up-button';
import ProfileButton from './profile-button';
import  Cookies  from 'js-cookie';

export default function InfoButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const access_token = Cookies.get('access_token');
    setIsLoggedIn(!!access_token && access_token !== undefined);

  }, []);

  return isLoggedIn ? <ProfileButton /> : <SignUpButton />;
}
