import { StatusBar } from 'expo-status-bar';
import React from 'react';
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import Main from "./components/Main";
import Start from "./components/Start";
import Dish from "./components/Dish";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="START">
          <Stack.Screen name="START" component={Start}/>
          <Stack.Screen name="MENU" component={Main}/>
          <Stack.Screen name="DISH" component={Dish}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
