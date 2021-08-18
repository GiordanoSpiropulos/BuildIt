import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';

const App = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <App.Navigator
      initialRouteName={'Bottom'}
      screenOptions={{
        headerTransparent: true,
        headerShown: false,
      }}
    >
      <App.Screen name="Bottom" component={BottomNavigation} />
    </App.Navigator>
  );
}
