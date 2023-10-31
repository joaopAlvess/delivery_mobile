import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cursos from './Cursos';
import CursosForm from './CursosForm';
import Entregadores from './Entregadores';
import EntregadorsForm from './EntregadoresForm';

const Stack = createNativeStackNavigator();

const CursoStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='cursos'>
                <Stack.Screen name="entregadores" component={Entregadores} options={{ title: 'Entregadores' }} />
                <Stack.Screen name="entregadores-form" component={EntregadorsForm} options={{ title: 'Entregadores' }} />
            </Stack.Navigator>
        </>
    )
}

export default CursoStack