import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Link, router } from "expo-router";
import { useSession } from "@/context/SessionProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { refreshSession } = useSession();

  const handleSignUp = async () => {
    setIsLoading(true);
    setError("");
    try {
      await authClient.signUp.email(
        {
          email,
          password,
          name: name,
        },
        {
          onSuccess: async () => {
            await refreshSession();
            router.push("/(tabs)/one");
          },
          onError: (error) => {
            console.log("error", error);
            setError(error.error.message);
          },
        }
      );
    } catch (error) {
      console.error("Sign up error:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={isLoading}>
        <Text>{isLoading ? "Loading..." : "Sign Up"}</Text>
      </TouchableOpacity>
      <Link href="/sign-in">
        <Text style={styles.link}>Already have an account? Sign in</Text>
      </Link>
    </View>
  );
};

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

export default SignUp;
