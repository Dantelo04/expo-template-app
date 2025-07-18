import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Loader