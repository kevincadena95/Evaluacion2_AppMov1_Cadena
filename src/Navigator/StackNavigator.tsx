import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { useNavigation } from '@react-navigation/native';
import { Screen3 } from '../screens/Screen3';
import { Screen4 } from '../screens/Screen4';
import { Screen5 } from '../screens/Screen5';


const Stack = createStackNavigator();

export const StackNavigator =() => {
    
    return (
    <Stack.Navigator screenOptions={{

    headerShown: false
    
        }}>
            
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" options={{title: 'Imagen 1'}} component={Screen2} />
        <Stack.Screen name="Screen3" options={{title: 'Imagen 2'}} component={Screen3} />
        <Stack.Screen name="Screen4" options={{title: ''}} component={Screen4} />
        <Stack.Screen name="Screen5" options={{title: ''}} component={Screen5} />
    </Stack.Navigator>
    );
}