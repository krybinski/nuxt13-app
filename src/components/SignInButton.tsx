'use client';

import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signIn } from 'next-auth/react';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      // toast({
      //   title: 'Signing in error',
      //   message: 'Please try again later',
      //   type: 'error',
      // });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
