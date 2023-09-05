// In App.js in a new project
// #988B39
import * as React from 'react';
import {View, Text,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import About from '../Screens/About/About';
import Settings from '../Screens/Settings/Settings';
import {ABOUT, HOME, PROFILE, SETTINGS} from '../Assets/icons';

import {Image, Header,SearchBar} from 'react-native-elements';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: 50,
          paddingHorizontal: 15,
          paddingTop: 0,
          backgroundColor: '#00008B',
          position: 'absolute',
          borderTopWidth: 0,
          bottom: 10,
          borderRadius: 25,
          marginHorizontal:20,
        },
        tabBarLabelStyle: {
          // color:'#fff'
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#FFF',
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
         
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="About"
        component={About}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-cog"
              color={color}
              size={size}
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
