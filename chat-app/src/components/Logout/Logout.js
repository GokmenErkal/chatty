import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './Logout.style'

const Logout = ({title, icon, tintColor, onPress, style}) => {
    return (
        <TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
            <View style={[styles.iconContainer, {backgroundColor: tintColor}]}>
                <Ionicons
                    name={icon}
                    size={26}
                    color='white'
                />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name={'chevron-forward-outline'} size={25} />
        </TouchableOpacity>
    )
}

export default Logout