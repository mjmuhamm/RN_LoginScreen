/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Image, TextInput, Pressable } from 'react-native'
import { loginStyles } from './src/styles/styles';
import React, { useState } from "react";
import LoginScreen1 from './src/screens/LoginScreen1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import type { RootStackParamList } from './src/types';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

type SocialButtonProps = {
  imageSource: any;
  buttonStyle: any;
};

function SocialButton(props: SocialButtonProps) {
  return (
    <Pressable style={props.buttonStyle}>
      <Image source={props.imageSource} style={loginStyles.buttonImage} />
    </Pressable>
  );
}

function RootStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="Login" component={LoginScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
   <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack/>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
}

export default App;
