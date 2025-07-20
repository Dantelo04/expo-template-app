import { StyleSheet } from "react-native";
import { Theme } from "@/styles/theme";

export const tabTwoStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.secondary,
    gap: 12,
  },
  logo: {
    fontSize: 46,
  },
});