import { View } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { Text } from "@/components/Text/Text";
import { indexStyles } from "./index.styles";

import { Link } from "@/components/Link/Link";
import { Button } from "@/components/Button/Button";
import { useSession } from "@/context/SessionProvider";
import { useEffect } from "react";

export const Index = () => {
  const { theme } = useTheme();
  const { signInWithGoogle, isLoading, refreshSession } = useSession();
  const styles = indexStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.logo}>⚛️</Text>
        <Text variant="title">Expo Template App</Text>
        <Text style={styles.description}>
          This is a template app for Expo. It is a simple app that allows you to
          sign in and sign up.
        </Text>
      </View>
      <Button onPress={signInWithGoogle} disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign In with Google"}
      </Button>
      <View style={styles.content}>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
      </View>
    </View>
  );
};
