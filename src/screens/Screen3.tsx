import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { StyleGlobal } from '../theme/AppThem';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export const Screen3 = () => {

const navigation = useNavigation();

    return (
    <View >
        <BodyComponent>
        <Image src='https://i.postimg.cc/JnxSGbHF/icon-Drewer.webp' style={StyleGlobal.imagen}/>
        <ButtonComponent buttonText='   >=   ' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen4'}))}/>
            <ButtonComponent buttonText='Home' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen1'}))}/>
        </BodyComponent>
    </View>
    )
}
