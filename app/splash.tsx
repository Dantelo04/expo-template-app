import { SplashScreen } from 'expo-router';
import { useSession } from '@/context/SessionProvider';

export default function SplashScreenController() {
  const { session, isLoading } = useSession();

  if (!isLoading && session) {
    SplashScreen.hideAsync();
  }

  return null;
}
