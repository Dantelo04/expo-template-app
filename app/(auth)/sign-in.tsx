import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { View, Text, TextInput } from "@/components/Themed";
import { useSession } from "@/components/SessionProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, isLoading: isLoadingSession, refreshSession } = useSession();

  const handleLogin = async () => {
    await signIn(email, password);
    await refreshSession();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoadingSession}>
        <Text>{isLoadingSession ? "Loading..." : "Sign In"}</Text>
      </TouchableOpacity>
      <Link href="/sign-up">
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </Link>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
