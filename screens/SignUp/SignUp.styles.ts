import { StyleSheet } from "react-native";
import { Theme } from "@/styles/theme";

export const signUpStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.primary,
    gap: 32,
  },
  content: {
    gap: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: theme.colors.semantic.error,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium as any,
  },
});