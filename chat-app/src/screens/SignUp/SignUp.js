import React, { useState } from 'react'
import { Text, SafeAreaView, View, TextInput } from 'react-native'
import { Formik } from 'formik'

import { showMessage } from 'react-native-flash-message'

import styles from './SignUp.style'
import Button from '../../components/Button/Button'

import app from '../../config/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
}

const auth = getAuth(app)

const SignUp = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Login')
  }
  const handleFormSubmit = async (formValues) => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Parolalar uyuşmuyor',
        type: 'danger',
      })
      return
    }
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success'
      });
      navigation.navigate('Login');
      setLoading(false)
    }
    catch (error) {
      showMessage({
        message: error.code,
        type: 'danger'
      })
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Yeni Kullanıcı Oluştur</Text>
          <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({ handleChange, handleSubmit, values }) =>
              <>
                {/* <TextInput
                    style={styles.inputText}
                    placeholder='Enter your name...'
                  /> */}
                <TextInput
                  style={styles.inputText}
                  placeholder='Email giriniz...'
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder='Parola giriniz...'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  textContentType="oneTimeCode"
                />
                <TextInput
                  style={styles.inputText}
                  placeholder='Tekrar parola giriniz...'
                  value={values.repassword}
                  onChangeText={handleChange('repassword')}
                  secureTextEntry={true}
                  textContentType="oneTimeCode"
                />
                <View style={styles.btnsContainer}>
                  <Button title='Kayıt ol' color='green' onPress={handleSubmit} loading={loading} />
                  <Button title='Geri' color='black' onPress={handleLogin} />
                </View>
              </>
            }
          </Formik>
        </View>
      </SafeAreaView>
    </View >
  )
}

export default SignUp