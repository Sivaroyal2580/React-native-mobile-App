// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import About from '../Screens/About/About';
import Settings from '../Screens/Settings/Settings';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          showIcon: true 
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="About"
        component={About}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
