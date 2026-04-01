import React from 'react';
import { Image, Pressable, StatusBar, Text, TextInput, useColorScheme, View, ToastAndroid } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loginStyles } from '../styles/styles';
import SocialButton, { LoginScreenProps } from '../types';
import { useState } from 'react'
import {useNavigation, NavigationContainer } from '@react-navigation/native';



function LoginScreen1({ navigation } : LoginScreenProps) {
  const isDarkMode = useColorScheme() === 'dark';

const [ email, setEmail ] = useState("")
const [ password, setPassword ] = useState("")
  

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={loginStyles.firstViewStyle}>
        <Image
          source={require('../../assets/image.png')}
          style={loginStyles.logo}
        />
        <Text style={loginStyles.loginText}>Login to Your Account</Text>
        <View style={loginStyles.inputView}>
          <Image
            source={require('../../assets/email.png')}
            style={loginStyles.emailImage}
          />
          <TextInput placeholder="Email" style={loginStyles.emailText} onChangeText={setEmail} />
        </View>
        <View style={loginStyles.inputView}>
          <Image
            source={require('../../assets/password.png')}
            style={loginStyles.passwordImage}
          />
          <TextInput placeholder="Password" style={loginStyles.passwordText} secureTextEntry={true} onChangeText={setPassword}/>
          <Image
            source={require('../../assets/password2.png')}
            style={loginStyles.secondPasswordImage}
          />
        </View>
        <View style={loginStyles.checkBoxView}>
          <Pressable style={loginStyles.checkBox} />
          <Text style={loginStyles.checkBoxText}>Remember me</Text>
        </View>
        <Pressable style={loginStyles.signInButton} onPress={
            () => { if (loginLogic(email, password)) {
            navigation.navigate('Home', { email: email });
            }}}>
          <Text style={loginStyles.signInText}>Sign In</Text>
        </Pressable>
        <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
        <View style={loginStyles.continueView}>
          <Text style={loginStyles.continueLines}>_____________</Text>
          <Text style={loginStyles.continueText}>            or continue with            </Text>
          <Text style={loginStyles.continueLines}>_____________</Text>
        </View>
        <View style={loginStyles.buttonView}>
          <SocialButton
            imageSource={require('../../assets/facebook.png')}
            buttonStyle={loginStyles.endButtonPressable}
          />
          <SocialButton
            imageSource={require('../../assets/google.png')}
            buttonStyle={loginStyles.middleButtonPressable}
          />
          <SocialButton
            imageSource={require('../../assets/apple.png')}
            buttonStyle={loginStyles.endButtonPressable}
          />
        </View>
        <View style={loginStyles.signUpView}>
          <Text style={loginStyles.accountText}>Don't have an account?</Text>
          <Text style={loginStyles.accountButton}>Sign up</Text>
        </View>
      </View>
    </SafeAreaProvider>
    
  );

  
}

function loginLogic(email: String, password: String) : boolean {
    let message = ""
    

    const showToast = () => {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }
    if (!email.includes("@")) {
        message = "Please enter a valid email"
        showToast()
        return false
    } else if (password.length < 6) {
        message = "Please enter a password that is greater than six characters."
        showToast()
        return false
    } else {
        message = "Login Successful"
        showToast()
        return true
    }
}

export default LoginScreen1;
