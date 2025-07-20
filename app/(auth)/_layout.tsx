import React from "react";
import { Stack } from "expo-router";
import SafeArea from "@/screens/SafeArea/SafeArea";

const AuthLayout = () => {
  return (
    <SafeArea>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
    </SafeArea>
  );
};

export default AuthLayout;
