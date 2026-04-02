import { StatusBar, useColorScheme, Pressable, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import LoginScreen1 from './src/screens/LoginScreen1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import type { RootStackParamList } from './src/types';
import SignUpScreen from './src/screens/SignUpScreen';
import TodoContextProvider from './src/store/context/TodoContext';
import { loginStyles } from './src/styles/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const TopTab = createMaterialTopTabNavigator()

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

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Login" component={LoginScreen1} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SignUp" component={SignUpScreen} />
    </Tab.Navigator>
  );
}

function TopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Login" component={LoginScreen1} />
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="SignUp" component={SignUpScreen} />
    </TopTab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <TodoContextProvider>
        <Drawer.Navigator>
          <Drawer.Screen name="MainTabs" component={TopTabs} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="SignUp" component={SignUpScreen} />
          <Drawer.Screen name="Login" component={BottomTabs} />
          
        </Drawer.Navigator>
      </TodoContextProvider>
    </NavigationContainer>
  );
}

function RootStack() {
  return (
    <NavigationContainer>
      <TodoContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </TodoContextProvider>
    </NavigationContainer>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
   <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator/>
    </SafeAreaProvider>
  );
}

export default App;
