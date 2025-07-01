import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router } from 'expo-router'
import { View, Text } from '@/components/Themed'
import { authClient } from '@/lib/auth-client'
import Loader from '@/components/Loader'

const Index = () => {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session) {
      router.push("/one");
    }
  }, [session]);

  if (isPending) return <Loader />;

  if (session) return <Loader />;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Initial Screen</Text>
      <Link href="/sign-in">
        <Text style={styles.button}>Go to Sign In</Text>
      </Link>
      <Link href="/sign-up">
        <Text style={styles.button}>Go to Sign Up</Text>
      </Link>
    </View>
  )
}

export default Index;

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
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 16,
    }
})