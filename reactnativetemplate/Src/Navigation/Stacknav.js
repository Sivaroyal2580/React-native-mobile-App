import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home/Home";
import Settings from "../Screens/Settings/Settings";
import About from "../Screens/About/About";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Settings} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };