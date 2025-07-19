import { View } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { Text } from "@/components/Text/Text";
import { indexStyles } from "./index.styles";
import { Link } from "@/components/Link/Link";

export const Index = () => {
  const { theme } = useTheme();
  const styles = indexStyles(theme);

  return (
    <View style={styles.container}>
      <Text variant="title">Expo Template App</Text>
      <View style={styles.content}>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
      </View>
    </View>
  );
};
