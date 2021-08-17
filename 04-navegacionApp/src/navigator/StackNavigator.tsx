import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina3Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'página 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'página 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'página 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'persona screen'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
