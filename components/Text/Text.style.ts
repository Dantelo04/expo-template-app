import { Theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const textStyles = (theme: Theme) => StyleSheet.create({
  text: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeight.regular as any,
  },
  title: {
    fontSize: theme.typography.fontSize['3xl'],
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeight.bold as any,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium as any,
  },
  button: {
    fontSize: theme.typography.fontSize.base,
    textAlign: 'center',
    color: theme.colors.text.inverse,
    fontWeight: theme.typography.fontWeight.medium as any,
  },
  error: {
    color: theme.colors.semantic.error,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium as any,
  },
});