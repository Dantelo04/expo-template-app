import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Link, router } from "expo-router";
import { View, Text, TextInput } from "@/components/Themed";
import Loader from "@/components/Loader";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { data: session, isPending } = authClient.useSession();

  const handleSignUp = async () => {
    await authClient.signUp.email(
      {
        email,
        password,
        name: name,
      },
      {
        onSuccess: () => {
          router.push("/one");
        },
      }
    );
  };

  if (isPending) return <Loader />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text>Sign Up</Text>
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
});

export default SignUp;
