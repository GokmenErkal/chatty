import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Alert } from 'react-native'

import ContactRow from '../../components/ContactRow/ContactRow'
import Serprator from '../../components/Serprator'
import app from '../../config/firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, getDocs, getFirestore, onSnapshot } from 'firebase/firestore'
import { Ionicons } from '@expo/vector-icons'
import styles from './Chats.style'

const auth = getAuth(app);
const db = getFirestore(app)

const Chats = ({ navigation }) => {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        const isLoggedIn = false;
        if (!isLoggedIn) {
            navigation.navigate('Login')
        }
    }, []);

    useEffect(() => {
        onSnapshot(collection(db, 'chats'), (snapshot) => {
            setChats(snapshot.docs)
        })
    }, [])

    const handleFab = () => {
        Alert.prompt('Email', 'Enter user email', (email) => {
            addDoc(collection(db, 'chats'), {
                users: [auth?.currentUser?.email, email],
                messages: []
            })
                .then((doc) => {
                    navigation.navigate('Chat', { id: doc.id })
                })
        })
    }

    const handleContact = (chat) => {
        navigation.navigate('Chat', { id: chat.id })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                chats.map(chat => (
                    <View key={chat.id}>
                        <ContactRow
                            name={chat.data().users.find(
                                (x) => x !== auth?.currentUser?.email
                            )}
                            subtitle={
                                chat.data().messages.length === 0 ?
                                    'Henüz Mesaj Yok' :
                                    chat.data().messages[0].text
                            }
                            onPress={() => handleContact(chat)}
                        />
                        <Serprator />
                    </View>
                ))
            }
            <TouchableOpacity style={styles.fabContainer} onPress={handleFab}>
                <Ionicons name='add' size={30} color='#fff' />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Chats