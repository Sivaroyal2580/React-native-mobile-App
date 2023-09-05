// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './Src/Navigation/bottomtab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboard from './Src/Screens/onboarding/onboarding';
import SideBar from './Src/Screens/Sidebar/Sidebar';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  const [firstLaunch, setFirstLaunch] = useState(null);
  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem('appLaunched');
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem('appLaunched', 'false');
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);
  console.log(firstLaunch);
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: 'false',
        }}
        initialRouteName="Onboarding">
        {/* {firstLaunch && (
         
          )} */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={Onboard}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="tabs"
          component={TabNavigator}
        />
           <Stack.Screen
          options={{headerShown: false}}
          name="Sidebar"
          component={SideBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
