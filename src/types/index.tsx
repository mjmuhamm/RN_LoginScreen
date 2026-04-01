import React from 'react';
import { Pressable, Image } from 'react-native';
import { loginStyles } from '../styles/styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type SocialButtonProps = {
  imageSource: any;
  buttonStyle: any;
};

export type ApiInfo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function SocialButton(props: SocialButtonProps) {
  return (
    <Pressable style={props.buttonStyle}>
      <Image source={props.imageSource} style={loginStyles.buttonImage} />
    </Pressable>
  );
}

export type RootStackParamList = {
  Login: undefined;
  Home: { email: String };
  SignUp: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;



export default SocialButton;
