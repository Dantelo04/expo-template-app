import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'
import { useSession } from '@/context/SessionProvider'

const Index = () => {
  const { session } = useSession();

  if (session) return <Redirect href="/one" />;

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