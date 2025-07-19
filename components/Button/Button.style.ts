import { StyleSheet } from "react-native";
import { Theme } from "@/styles/theme";

export const buttonStyles = (theme: Theme) => StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  primary: {
    backgroundColor: theme.colors.primary[500],
  },
  secondary: {
    backgroundColor: theme.colors.background.secondary,
  },
  tertiary: {
    backgroundColor: theme.colors.background.tertiary,
  },
});