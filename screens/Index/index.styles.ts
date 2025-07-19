import { StyleSheet } from "react-native";
import { Theme } from "@/styles/theme";

export const indexStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.primary,
    gap: 32,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});