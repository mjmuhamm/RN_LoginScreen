/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Image, TextInput, Pressable, Button } from 'react-native'
import { styles } from './src/components/styles';
import React, { useState } from "react";


type SocialButtonProps = {
  imageSource: any;
  buttonStyle: any;
};
function SocialButton(props: SocialButtonProps) {
  return (
    <Pressable style={props.buttonStyle}>
      <Image source={props.imageSource} style={styles.buttonImage} />
    </Pressable>
  );
}



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.firstViewStyle}>
      <Image source={require("./assets/leading_image.png")} style={styles.logo}></Image>
      <Text style= {styles.loginText}>Login to Your Account</Text>
      <View  style={styles.inputView}>
        <Image source={require("./assets/email.png")} style={styles.emailImage}/>
        <TextInput placeholder="Email" style={styles.emailText}/>
      </View>
      <View style={styles.inputView}>
        <Image source={require("./assets/password.png")} style={styles.passwordImage}/>
        <TextInput placeholder="Password" style={styles.passwordText}/>
        <Image source={require("./assets/password2.png")} style={styles.secondPasswordImage}/>
      </View>
      <View style={styles.checkBoxView}>
      <Pressable style={styles.checkBox}/>
      <Text style={styles.checkBoxText}>Remember me</Text>
      </View>
       <Pressable style={styles.signInButton}><Text style={styles.signInText}>Sign In</Text></Pressable>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <View style={styles.continueView}>
        <Text style={styles.continueLines}>_____________</Text>
        <Text style={styles.continueText}>            or continue with            </Text>
        <Text style={styles.continueLines}>_____________</Text>
      </View>
     <View style={styles.buttonView}>
      
      <SocialButton
      imageSource={require('./assets/facebook.png')}
      buttonStyle={styles.endButtonPressable}
      />
       <SocialButton
      imageSource={require('./assets/google.png')}
      buttonStyle={styles.middleButtonPressable}
      />
      <SocialButton
      imageSource={require('./assets/apple.png')}
      buttonStyle={styles.endButtonPressable}
      />
    
      </View>
      <View style={styles.signUpView}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text style={styles.accountButton}>Sign up</Text>
      </View>
      </View>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );

}




export default App;
