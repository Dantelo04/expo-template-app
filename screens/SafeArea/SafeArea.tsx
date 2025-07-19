import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/context/ThemeContext';

export default function SafeArea({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return <SafeAreaView style={{ height: '100%', backgroundColor: theme.theme.colors.background.primary }}>{children}</SafeAreaView>;
}