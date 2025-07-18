import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { createTheme, Theme } from '@/styles/theme';

type ThemeContextType = {
  theme: Theme;
  colorScheme: 'light' | 'dark';
  toggleColorScheme: () => void;
  setColorScheme: (scheme: 'light' | 'dark') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorSchemeState] = useState<'light' | 'dark'>(
    systemColorScheme || 'light'
  );

  useEffect(() => {
    if (systemColorScheme) {
      setColorSchemeState(systemColorScheme);
    }
  }, [systemColorScheme]);

  const theme = createTheme(colorScheme);

  const toggleColorScheme = () => {
    setColorSchemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setColorScheme = (scheme: 'light' | 'dark') => {
    setColorSchemeState(scheme);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      colorScheme,
      toggleColorScheme,
      setColorScheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};