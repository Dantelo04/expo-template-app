  import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { authClient } from "@/lib/auth-client";
import * as SplashScreen from "expo-splash-screen";
import { router } from "expo-router";

SplashScreen.preventAutoHideAsync();

interface SessionContextType {
  session: any | null;
  user: any | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
  clearError: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<any | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initializeSession();
  }, []);
  

  const initializeSession = async () => {
    try {
      setIsLoading(true);
      const currentSession = await authClient.getSession();
      if (currentSession?.data) {
        setSession(currentSession.data.session);
        setUser(currentSession.data.user);
      }
    } catch (err) {
      setError("Failed to initialize session");
    } finally {
      setIsLoading(false);
      await SplashScreen.hideAsync();
    }
  };

  const refreshSession = async () => {
    try {
      setIsLoading(true);
  
      let attempts = 0;
      let currentSession = null;
  
      while (attempts < 5) {
        const result = await authClient.getSession();
        if (result?.data?.session) {
          currentSession = result;
          break;
        }
        attempts++;
        await new Promise((res) => setTimeout(res, 300)); 
      }
  
      if (currentSession?.data) {
        setSession(currentSession.data.session);
        setUser(currentSession.data.user);
      } else {
        setSession(null);
        setUser(null);
      }
    } catch (err) {
      setError("Failed to refresh session");
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await authClient.signIn.email(
        { email, password },
        {
          onSuccess: () => { 
            router.replace("/(tabs)/one");       
          },
          onError: (err) => {
            console.log("sign in error", err);
            setError(err?.error?.message || "Failed to sign in");
          },
        }
      );
    } catch (err) {
      setError("Unexpected error during sign-in");
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await authClient.signIn.social(
        { 
          provider: "google",
          callbackURL: "expotemplateapp://one"
        },
      );
    } catch (err) {
      setError("Unexpected error during sign-in with Google");
    } finally {
      setIsLoading(false);
      refreshSession();
    }
  };
  

  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await authClient.signUp.email(
        { email, password, name: "John Doe" },
        {
          onSuccess: () => {
            router.replace("/(tabs)/one");
          },
          onError: (err) => {
            setError(err?.error?.message || "Failed to sign up");
          },
        }
      );
    } catch (err) {
      setError("Unexpected error during sign-up");
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: async () => {
            await refreshSession(); 
            router.replace("/");
          },
        },
      });
    } catch (err) {
      setError("Unexpected error during sign-out");
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  const value: SessionContextType = {
    session,
    user,
    isLoading,
    isAuthenticated: !!session,
    error,
    signIn,
    signInWithGoogle,
    signUp,
    signOut,
    refreshSession,
    clearError,
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export const useUser = () => useSession().user;

export const useAuth = () => {
  const { isAuthenticated, isLoading } = useSession();
  return { isAuthenticated, isLoading };
};
