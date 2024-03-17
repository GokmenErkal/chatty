import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Button.style'

const Button = ({ title, color }) => {
    return (
        <TouchableOpacity style={[styles.btnContainer, {backgroundColor: color}]}>
            <Text style={styles.btnLabel} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Button