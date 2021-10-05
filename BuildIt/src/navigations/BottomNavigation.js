import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrainingNavigation from './TrainingNavigation';
import FasIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, tabBarStyle } from '../styles';
import ConfigNavigation from './ConfigNavigation';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tertiary,
        tabBarInactiveTintColor: colors.inative,
        tabBarStyle: tabBarStyle,
      }}
      initialRouteName="Treino"
    >
      <Tab.Screen
        name="Treino"
        component={TrainingNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCIcon name="arm-flex" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="Opções"
        component={ConfigNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <FasIcon name="cog" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
