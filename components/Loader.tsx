import React from 'react'
import { View, Text } from './Themed'
import { StyleSheet } from 'react-native'

const Loader = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Loader