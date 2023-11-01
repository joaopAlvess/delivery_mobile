import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cursos from './Cursos';
import CursosForm from './CursosForm';
import Cards from './Cards';
import CardsForm from './CardsForm';

const Stack = createNativeStackNavigator();

const CardStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='cards'>
                <Stack.Screen name="cards" component={Cards} options={{ title: 'Cards' }} />
                <Stack.Screen name="cards-form" component={CardsForm} options={{ title: 'Cards' }} />
            </Stack.Navigator>
        </>
    )
}

export default CardStack