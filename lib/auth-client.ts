import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";
 
export const authClient = createAuthClient({
    baseURL: process.env.EXPO_PUBLIC_BETTER_AUTH_URL || "http://192.168.100.53:8081",
    plugins: [
        expoClient({
            scheme: "expotemplateapp",
            storagePrefix: "expotemplateapp",
            storage: SecureStore,
        })
    ],
});