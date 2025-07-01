import Loader from '@/components/Loader';
import { View, Text } from '@/components/Themed'
import { authClient } from '@/lib/auth-client';
import { router } from 'expo-router';
import React, { useEffect } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';

const SignOut = () => {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!session) {
      router.push("/one");
    }
  }, [session]);

  if (isPending) return <Loader />;
  if (!session) return <Loader />;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignOut</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
});

export default SignOut