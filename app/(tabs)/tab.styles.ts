import { Theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const tabStyles = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.primary,
    borderTopWidth: 0,
    height: 60,
    paddingTop: 5,
  },
});