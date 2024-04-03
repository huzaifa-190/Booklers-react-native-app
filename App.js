import React, { useState } from "react";
import {View,Text,FlatList,TouchableOpacity,TextInput,StyleSheet} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


// Components import
import Home from './components/Home';

const Stack = createStackNavigator();


export default function App() {
  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} options={{headerShown:true}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Home/>
  );
}

