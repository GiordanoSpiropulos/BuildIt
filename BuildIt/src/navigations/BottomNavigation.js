import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrainingNavigation from './TrainingNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../styles';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tertiary,
        tabBarInactiveTintColor: colors.inative,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
      }}
      initialRouteName="Treino"
    >
      <Tab.Screen
        name="Treino"
        component={TrainingNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Dieta"
        component={TrainingNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={TrainingNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
