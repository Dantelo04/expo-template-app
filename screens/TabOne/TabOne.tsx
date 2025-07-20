import { useSession } from "@/context/SessionProvider";
import { View } from "react-native";
import { Text } from "@/components/Text/Text";
import { tabOneStyles } from "./TabOne.styles";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/Button/Button";

export const TabOne = () => {
  const { signOut, error: sessionError, user, isLoading } = useSession();
  const { theme } = useTheme();
  const styles = tabOneStyles(theme);

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>👨🏻‍💻</Text>
      <Text variant="subtitle">Hello, {user?.name}!</Text>
      <Text variant="title">Tab One</Text>
      {sessionError ? <Text variant="error">{sessionError}</Text> : null}
      <Button onPress={handleSignOut} disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign Out"}
      </Button>
    </View>
  );
};
