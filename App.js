import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components import
import Home from './components/Home';
import Book from './components/Book';
import Profile from './components/Profile';


// Globals
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }} >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Book" component={Book} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator screenOptions={{ headerShown: true }}>
    //     <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
    //     <Tab.Screen name="Book" component={Book} />
    //     <Tab.Screen name="Profile" component={Profile} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <Home/>
  );
}

