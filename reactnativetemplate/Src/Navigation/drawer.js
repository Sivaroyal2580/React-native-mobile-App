
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from "./bottomtab";
import { ContactStackNavigator } from "./Stacknav";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;