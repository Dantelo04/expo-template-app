import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/ThemeContext';
import { buttonStyles } from './Button.style';
import { Text } from '../Text/Text';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  const {theme} = useTheme();
  const styles = buttonStyles(theme);

  return (
    <TouchableOpacity style={[styles.button, styles[variant], props.style]} {...props}>
      <Text variant='button'>{children}</Text>
    </TouchableOpacity>
  )
}