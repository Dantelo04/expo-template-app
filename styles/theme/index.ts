import { darkTheme } from '../tokens/dark';
import { typography } from './typography';
import { lightTheme } from '../tokens/light';

export const createTheme = (colorScheme: 'light' | 'dark') => {
  const colors = colorScheme === 'light' ? lightTheme.colors : darkTheme.colors;
  
  return {
    colors,
    typography,
    isDark: colorScheme === 'dark',
  };
};

export type Theme = ReturnType<typeof createTheme>;