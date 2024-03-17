import React from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './SignUp.style'
import Button from '../../components/Button/Button'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Create New Account</Text>
          <TextInput style={styles.inputText} placeholder='Enter your name...' />
          <TextInput style={styles.inputText} placeholder='Enter your email...' />
          <TextInput style={styles.inputText} placeholder='Enter your password...' />
          <View style={styles.btnsContainer}>
            <Button title='Sign In' color='green'/>
            <Button title='Sign Up' color='black'/>
          </View>
        </View>
      </SafeAreaView>
    </View >
  )
}

export default SignUp