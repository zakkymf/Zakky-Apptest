import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screens/Contact';
import AddContact from '../screens/Contact/AddContact';
import DetailContact from '../screens/Contact/DetailContact';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactScreen"
        component={Contact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddContactScreen"
        component={AddContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailContactScreen"
        component={DetailContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
