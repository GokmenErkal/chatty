import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './ContactRow.style'

const ContactRow = ({ name, subtitle, onPress }) => {
    return (
        <>
            <TouchableOpacity
                style={styles.row}
                onPress={onPress}
            >
                <View style={styles.avatar}>
                    <Text style={styles.avatar_label}>
                        {
                            name.split(' ').reduce((prev, current) => `${prev}${current[0]}`, '')
                        }
                    </Text>
                </View>
                <View style={styles.text_contanier}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <Ionicons name='chevron-forward-outline' size={25} />
            </TouchableOpacity>
            <View style={styles.serprator} />
        </>
    )
}

export default ContactRow