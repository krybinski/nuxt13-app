'use client';

import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signOut } from 'next-auth/react';
import { toast } from '@/ui/toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: 'Signing out error',
        message: 'Please try again later',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
