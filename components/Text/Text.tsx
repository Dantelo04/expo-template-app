import { Text as RNText } from 'react-native'
import React from 'react'
import { TextProps as RNTextProps } from 'react-native'
import { useTheme } from '@/context/ThemeContext';
import textStyles from './Text.style';

interface TextProps extends RNTextProps {
  variant?: 'text' | 'title' | 'subtitle' | 'button' | 'error';
}

export const Text = ({ children, style, variant = 'text', ...props }: TextProps) => {
  const {theme} = useTheme();
  const styles = textStyles(theme);

  return (
    <RNText style={[styles[variant], style]} {...props}>
      {children}
    </RNText>
  )
}