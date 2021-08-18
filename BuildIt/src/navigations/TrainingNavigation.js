import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TrainingScreen } from '../screens/Training';

const Training = createNativeStackNavigator();

export default function TrainingNavigation() {
  return (
    <Training.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TrainingScreen"
    >
      <Training.Screen name={'TrainingScreen'} component={TrainingScreen} />
    </Training.Navigator>
  );
}
