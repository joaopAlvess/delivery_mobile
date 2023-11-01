import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RestauranteStack from './screens/restaurantes/RestauranteStack';
import EntregadorStack from './screens/entregador/EntregadorStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Entregadores'>
          
            <Tab.Screen
              name="Restaurantes"
              component={RestauranteStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="google-classroom" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Entregadores"
              component={EntregadorStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="google-classroom" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}