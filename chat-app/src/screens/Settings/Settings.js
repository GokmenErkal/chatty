import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

import ContactRow from '../../components/ContactRow/ContactRow'
import Serprator from '../../components/Serprator'
import styles from './Settings.style'
import Logout from '../../components/Logout/Logout'
import { colors } from '../../config/constants'

import app from '../../config/firebaseConfig'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(app)

const Settings = ({ navigation }) => {

    return (
        <View>
            <ContactRow
                name='Gokmen Erkal'
                subtitle='erkal7129@gmail.com'
                style={styles.contactRow}
            />
            <Serprator />
            <Logout
                title='Çıkış yap'
                icon='log-out-outline'
                tintColor={colors.red}
                onPress={() => {
                    signOut(auth)
                    navigation.navigate('Login')
                }}
                style={{ marginVertical: 10 }}
            />
            <Logout
                title='Yardım'
                icon='information-outline'
                tintColor={colors.green}
                onPress={() => console.log('Çıkış yapıldı')}
            />
            <Logout
                title='Tel a Friend'
                icon='heart-outline'
                tintColor={colors.pink}
                onPress={() => console.log('Çıkış yapıldı')}
            />
        </View>
    )
}

export default Settings