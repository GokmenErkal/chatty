import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import app from '../../config/firebaseConfig'
import { getFirestore, doc, onSnapshot, setDoc } from 'firebase/firestore'

const firestore = getFirestore(app)

const Chat = ({ route }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        onSnapshot(doc(firestore, 'chats/' + route.params.id), (doc) => {
            setMessages(doc.data().messages.map(message => ({
                ...message,
                createdAt: message.createdAt.toDate()
            })));
        })
    }, [route.params.id])

    const onSend = useCallback((m = []) => {
        setDoc(doc(firestore, `chats/${route.params.id}`), {
            messages: GiftedChat.append(messages, m)
        },
            { merge: true }
        )
    }, [route.params.id, messages])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}

export default Chat