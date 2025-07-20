import { View } from "react-native";
import { Text } from "@/components/Text/Text";
import { tabTwoStyles } from "./TabTwo.styles";
import { useTheme } from "@/context/ThemeContext";

export const TabTwo = () => {
  const { theme } = useTheme();
  const styles = tabTwoStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚀</Text>
      <Text variant="title">Tab Two</Text>
    </View>
  );
};
