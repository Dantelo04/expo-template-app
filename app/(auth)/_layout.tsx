import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
