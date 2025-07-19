import { StyleSheet } from "react-native";
import { Theme } from "@/styles/theme";

export const linkStyles = (theme: Theme) => StyleSheet.create({
  link: {
    color: theme.colors.primary[500],
    textDecorationLine: 'underline',
    fontSize: theme.typography.fontSize.base,
  },
});