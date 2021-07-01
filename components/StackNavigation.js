import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SinxayName from './SinxayName';
import papName from './papName';


export default  function StackNavigation(){

   const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="papName" component={papName}/>
                <Stack.Screen name="SinxayName" component={SinxayName}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}