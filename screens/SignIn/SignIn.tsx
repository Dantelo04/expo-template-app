import { View } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { Text } from "@/components/Text/Text";
import { signInStyles } from "./SignIn.styles";
import { useState } from "react";
import { useSession } from "@/context/SessionProvider";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { Link } from "@/components/Link/Link";

export const SignIn = () => {
  const { theme } = useTheme();
  const styles = signInStyles(theme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    signIn,
    isLoading: isLoadingSession,
    refreshSession,
    error: sessionError,
  } = useSession();

  const handleLogin = async () => {
    await signIn(email, password);
    await refreshSession();
  };

  return (
    <View style={styles.container}>
      <Text variant="title">Sign In</Text>
      <View style={styles.content}>
        {sessionError ? (
          <Text variant="error">
            {sessionError}
          </Text>
        ) : null}
        <Input
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button onPress={handleLogin} disabled={isLoadingSession}>
          {isLoadingSession ? "Loading..." : "Sign In"}
        </Button>
      </View>
      <Link href="/sign-up">Don't have an account? Sign up</Link>
    </View>
  );
};
