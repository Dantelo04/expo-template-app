import { Text as RNText } from 'react-native'
import React from 'react'
import { TextProps } from 'react-native'
import { useTheme } from '@/context/ThemeContext';
import { textStyles } from './Text.style';

export const Text = ({ children, style, ...props }: TextProps) => {
  const {theme} = useTheme();
  const styles = textStyles(theme);

  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  )
}

export const Title = ({ children, style, ...props }: TextProps) => {
  const {theme} = useTheme();
  const styles = textStyles(theme);

  return (
    <RNText style={[styles.title, style]} {...props}>
      {children}
    </RNText>
  )
}

export const Subtitle = ({ children, style, ...props }: TextProps) => {
  const {theme} = useTheme();
  const styles = textStyles(theme);

  return (
    <RNText style={[styles.subtitle, style]} {...props}>
      {children}
    </RNText>
  )
}