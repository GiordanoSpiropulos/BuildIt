import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../screens/index';

const Auth = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Auth.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
      <Auth.Screen name="RegisterScreen" component={RegisterScreen} />
    </Auth.Navigator>
  );
};

export default AuthNavigation;
