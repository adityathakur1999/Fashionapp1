import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native';
import HomeScreen from '../HomeScreen/HomeScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const Stack=createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SignUpScreen' >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerTitle:"", headerBackTitleVisible: false , headerBackTitleStyle:"red" }} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerTitle:"", headerBackTitleVisible: false , headerBackTitleStyle:"red" }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitle:"", headerBackTitleVisible: false , headerBackTitleStyle:"red" }} />
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})