import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    await authClient.signUp.email({
      email,
      password,
      name: name,
    }, {
      onSuccess: () => {
        router.push("/one");
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUp;
