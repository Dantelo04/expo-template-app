import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { useSession } from '@/context/SessionProvider';

export default function SplashScreenController() {
  const { session, isLoading } = useSession();

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return null;
}