import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Button.style'
import Loading from '../Loading/Loading'

const Button = ({ title, color, onPress, loading }) => {
    return (
        <View>
            <TouchableOpacity
                style={[styles.btnContainer, { backgroundColor: color }]}
                onPress={onPress}
            >
                {
                    loading ?
                        <Loading /> :
                        <Text style={styles.btnLabel} >{title}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Button