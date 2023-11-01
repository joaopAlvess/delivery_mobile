import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cursos from './Cursos';
import CursosForm from './CursosForm';
import Clientes from './Clientes';
import ClientesForm from './ClientesForm';

const Stack = createNativeStackNavigator();

const ClienteStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='Clientes'>
                <Stack.Screen name="clientes" component={Clientes} options={{ title: 'Clientes' }} />
                <Stack.Screen name="clientes-form" component={ClientesForm} options={{ title: 'Clientes' }} />
            </Stack.Navigator>
        </>
    )
}

export default ClienteStack