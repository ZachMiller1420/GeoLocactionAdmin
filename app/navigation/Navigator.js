import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ViewScreen from "../screens/ViewScreen";
import CreateScreen from "../screens/CreateScreen";

const Tab = createBottomTabNavigator();

const Navigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Create" component={CreateScreen} />
    <Tab.Screen name="View" component={ViewScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
  </Tab.Navigator>
);

export default Navigator;
