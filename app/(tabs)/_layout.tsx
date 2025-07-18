import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useTheme } from "@/context/ThemeContext";
import SafeArea from "@/screens/SafeArea/SafeArea";
import { tabStyles } from "./tab.styles";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme } = useTheme();
  const styles = tabStyles(theme);

  return (
    <SafeArea>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary[500],
          tabBarStyle: styles.container,
          headerShown: false,
          
        }}
      >
        <Tabs.Screen
          name="one"
          options={{
            title: "Tab One",
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: "Tab Two",
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
      </Tabs>
    </SafeArea>
  );
}
