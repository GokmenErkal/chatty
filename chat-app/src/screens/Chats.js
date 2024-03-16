import React from 'react'
import { View, SafeAreaView } from 'react-native'
import ContactRow from '../components/ContactRow/ContactRow'

const Chats = () => {
    const handleContact = () => {
        alert('Hi, Gokmen Erkal Touched')
    }
    return (
        <SafeAreaView>
            <ContactRow
                name='Gokmen Erkal'
                subtitle='Merhaba, nasılsın'
                onPress={handleContact}
            />
            <ContactRow
                name='Stolass'
                subtitle='Hadii'
                onPress={handleContact()}
            />
        </SafeAreaView>
    )
}

export default Chats