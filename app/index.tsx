import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Go to Sign In</Text>
      <Link href="/sign-in">
        <Text style={styles.button}>Sign In</Text>
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
    },
    button: {
        color: 'blue',
        textDecorationLine: 'underline',
    }
})