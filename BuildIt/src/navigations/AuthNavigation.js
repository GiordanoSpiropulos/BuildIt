import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen } from '../screens/index';

const Auth = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Auth.Navigator
      initialRouteName={'InitialScreen'}
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="InitialScreen" component={InitialScreen} />
    </Auth.Navigator>
  );
};

export default AuthNavigation;
