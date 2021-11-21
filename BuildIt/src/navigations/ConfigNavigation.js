import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { hideNavigationTab } from '../helpers/navigation';
import {
  ConfigScreen,
  MyProfileScreen,
  ChangeRegisterScreen,
  PasswordScreen,
} from '../screens';
import { AboutScreen } from '../screens/Config/AboutScreen';

import { tabBarStyle } from '../styles';

const Config = createNativeStackNavigator();

export default function ConfigNavigation({ navigation, route }) {
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
    <Config.Navigator
      initialRouteName={'ConfigScreen'}
      screenOptions={{ headerShown: false }}
    >
      <Config.Screen component={ConfigScreen} name="ConfigScreen" />
      <Config.Screen component={MyProfileScreen} name="MyProfileScreen" />
      <Config.Screen
        component={ChangeRegisterScreen}
        name={'ChangeRegisterScreen'}
      />
      <Config.Screen component={PasswordScreen} name={'PasswordScreen'} />
      <Config.Screen component={AboutScreen} name={'AboutScreen'} />
    </Config.Navigator>
  );
}
