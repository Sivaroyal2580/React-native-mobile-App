// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './Src/Navigation/bottomtab';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: 'false',
        }}
        initialRouteName="tabs">
        <Stack.Screen
          options={{headerShown: false}}
          name="tabs"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
