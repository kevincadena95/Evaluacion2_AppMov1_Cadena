import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { StyleGlobal } from '../theme/AppThem';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export const Screen2 = () => {

const navigation = useNavigation();

    return (
    <View >
        <BodyComponent>
        <Image src='https://i.postimg.cc/vTZBX30m/raectnative.jpg' style={StyleGlobal.imagen}/>
        <ButtonComponent buttonText='Imagen 2' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen3'}))}/>
          <ButtonComponent buttonText='Home' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen1'}))}/>
        </BodyComponent>
    </View>
    )
}
