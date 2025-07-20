import { StyleSheet } from "react-native";
import { Theme } from "@/styles/theme";

export const tabOneStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background.secondary,
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    fontSize: 46,
  },
});