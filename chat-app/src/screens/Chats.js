import React, { useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'

import ContactRow from '../components/ContactRow/ContactRow'
import Serprator from '../components/Serprator'

const chats = [
    {
        users: ['deneme@test.gmail.com', 'hasan12@gmail.com'],
        messages: [],
    },
    {
        users: ['deneme@test.gmail.com', 'hasan12@gmail.com'],
        messages: [],
    },
    {
        users: ['deneme@test.gmail.com', 'hasan12@gmail.com'],
        messages: [],
    },
    {
        users: ['deneme@test.gmail.com', 'hasan12@gmail.com'],
        messages: [],
    },
]

const Chats = ({ navigation }) => {

    useEffect(() => {
        const isLoggedIn = true;
        if (!isLoggedIn) {
            navigation.navigate('SignUp')
        }
    }, [])

    const handleContact = () => {
        navigation.navigate('Chat')
    }
    return (
        <SafeAreaView>
            {
                chats.map((chat, index) => (
                    <View key={index}>
                        <ContactRow
                            name={chat.users.find(
                                (x) => x !== firebase.auth().currentUser.email
                            )}
                            subtitle='Merhaba, nasılsın'
                            onPress={handleContact}
                        />
                        <Serprator />
                    </View>
                ))
            }


        </SafeAreaView>
    )
}

export default Chats