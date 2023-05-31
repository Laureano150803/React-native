import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// screens
import HomeScreen from "../components/HomeScreen";
import Index from "../components/Index";
import { NavigationContainer } from '@react-navigation/native';

const HomeStackNavigator = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer
    independent={true}
    >
      <HomeStackNavigator.Navigator initialRouteName="Index">
        <HomeStackNavigator.Screen name="Home" component={HomeScreen}
        options={{
          headerTitle:'Mangas',
          headerTitleAlign:'center'
        }} />
        <HomeStackNavigator.Screen
         name="Index"
          component={Index}
          options={{
            headerShown:false
          }}
           />
      </HomeStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default myStack;




