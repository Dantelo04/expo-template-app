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
  titleSection: {
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  description: {
    textAlign: 'center',
    maxWidth: 350,
  },
  logo: {
    fontSize: 46,
  }
});