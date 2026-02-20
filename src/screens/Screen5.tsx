import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { BodyComponent } from '../components/BodyComponent';
import { StyleGlobal } from '../theme/AppThem';
import { InputComponent } from '../Navigator/InputComponet';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';


interface FormLogin {
    num1: number
    num2: number
}

export const Screen5 = () => {
const navigation = useNavigation();

      //hook UseState:m permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        num1: 0,
        num2: 0
    });

    //funcion para capturar los valores de mi formulario y cambiarlos de string a number
    const handleChangeValue = (name: string, value: string) => {
      setFormLogin({...formLogin, [name]: Number(value)});
    }
  
    //hook para actualizar el texto del resultado 
    const [resultado, setResultado] = useState<string>('');

    //funcion para realizar el calculo de la division
    const handleMenor = () => {
    const { num1, num2 } = formLogin;

  
      if (num1 <= num2) {
        setResultado(`El numero ${num1} es menor o igual que numero ${num2}`);
      } else {
        setResultado(`El numero ${num1} es mayor que  el numero ${num2}`);
      }  
      return;

  }

  return (
    <View> 
      <BodyComponent>
        <Text style={StyleGlobal.text}> Formulario:</Text> 
        <View>
                <InputComponent placeholder='Numero 1' keyboardType='numeric' 
                handleChangeValue={handleChangeValue}
                name='num1'/>
                <InputComponent placeholder='Numero 2' keyboardType='numeric'
                handleChangeValue={handleChangeValue}
                name='num2'/>

        <ButtonComponent buttonText='   <=   ' onPress={handleMenor} />

        </View>

        <Text style={StyleGlobal.textResult}>Resultado: {resultado}</Text>

        <ButtonComponent buttonText='Home' onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Screen1'}))}/>
      </BodyComponent>
    </View>
  )
}

