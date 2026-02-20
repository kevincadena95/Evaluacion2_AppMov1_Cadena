import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { StyleGlobal } from '../theme/AppThem';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export const Screen1 = () => {

const navigation = useNavigation();

    return (
    <View >
        <BodyComponent>
        <Text style={StyleGlobal.text}>
            ¡Bienvenido!</Text>
        <ButtonComponent buttonText='Imagen 1' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen2'}))}/>
        <ButtonComponent buttonText='Imagen 2' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen3'}))}/>
        <ButtonComponent buttonText='   >=   ' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen4'}))}/>
        <ButtonComponent buttonText='   <=   ' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen5'}))}/>
        
        </BodyComponent>
    </View>
    )
}
