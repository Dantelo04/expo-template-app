import { StyleSheet } from "react-native";
import { Theme } from "@/styles/theme";

export const inputStyles = (theme: Theme) => StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border.primary,
    borderRadius: 8,
    padding: 12,
    fontSize: theme.typography.fontSize.base,
    width: '100%',
    maxWidth: 300,
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeight.regular as any,
  },
});