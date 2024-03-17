import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Serprator = () => {
  return (
    <View style={styles.serprator} />
  )
}

const styles = StyleSheet.create({
    serprator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'gray',
        marginStart: 75,
    }
})

export default Serprator