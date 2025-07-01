import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Link, router } from "expo-router";
import { View, Text, TextInput } from "@/components/Themed";
import Loader from "@/components/Loader";

const SignIn = () => {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session) {
      router.replace("/one");
    }
  }, [session]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    await authClient.signIn.email({
      email,
      password,
    }, {
      onSuccess: () => {
        router.push("/one");
      },
      onError: (error) => {
        console.log(error);
        setError(error.error.message);
      },
    });
    setIsLoading(false);
  };

  if (isPending) return <Loader />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {error && <Text style={styles.error}>{error}</Text>}
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
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
        <Text>{isLoading ? "Loading..." : "Sign In"}</Text>
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
