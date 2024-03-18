import React, { useState } from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { showMessage } from 'react-native-flash-message'


import Button from '../../components/Button/Button'
import styles from './Login.style'

import app from '../../config/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const initialFormValues = {
    email: '',
    password: '',
    repassword: '',
}

const auth = getAuth(app)

const Login = ({navigation}) => {

    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (formValues) => {
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, formValues.email, formValues.password)
            navigation.navigate('Chats')
            setLoading(false)
        }
        catch (error) {
            showMessage({
                message: error.message,
                type: 'danger'
            })
            setLoading(false)
        }
    }

    const handleSignUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Giriş Yap</Text>
                    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                        {({ handleChange, handleSubmit, values }) =>
                            <>
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
                                    secureTextEntry
                                />
                                <View style={styles.btnsContainer}>
                                    <Button title='Giriş yap' color='green' onPress={handleSubmit} loading={loading} />
                                    <Button title='Kayıt ol' color='black' onPress={handleSignUp} />
                                </View>
                            </>
                        }
                    </Formik>
                </View>
            </SafeAreaView>
        </View >
    )
}

export default Login