import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactScreen"
        component={Contact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
