import React, { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CategoryScreen,
  CreateTrainingScreen,
  ExerciseScreen,
  SelectExerciseScreen,
  StrengthScreen,
} from '../screens';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { hideNavigationTab } from '../helpers/navigation';
import { tabBarStyle } from '../styles';

const Training = createNativeStackNavigator();

export default function TrainingNavigation({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideTabBar = hideNavigationTab(routeName);

  useLayoutEffect(() => {
    if (hideTabBar) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: tabBarStyle });
    }
  }, [navigation, route]);
  return (
    <Training.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="CategoryScreen"
    >
      <Training.Screen name={'CategoryScreen'} component={CategoryScreen} />
      <Training.Screen name={'StrengthScreen'} component={StrengthScreen} />
      <Training.Screen name={'ExerciseScreen'} component={ExerciseScreen} />
      <Training.Screen
        name={'CreateTrainingScreen'}
        component={CreateTrainingScreen}
      />
      <Training.Screen
        name="SelectExerciseScreen"
        component={SelectExerciseScreen}
      />
    </Training.Navigator>
  );
}
