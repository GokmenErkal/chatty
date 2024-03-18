import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View>
      <ActivityIndicator color='white' size={20} ></ActivityIndicator>
    </View>
  )
}

export default Loading