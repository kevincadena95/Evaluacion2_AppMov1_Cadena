import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StyleGlobal } from '../theme/AppThem'

interface Props {
    buttonText: string;
    onPress: () => void
}

export const ButtonComponent = ({buttonText, onPress}: Props) => {
    return (
    <TouchableOpacity 
    style={StyleGlobal.button}
    onPress={onPress}>
    <Text  style={StyleGlobal.buttonText} >{buttonText}</Text>
    </TouchableOpacity>
    )
}