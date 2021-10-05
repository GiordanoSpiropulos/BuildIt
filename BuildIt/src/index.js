import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LogBox, StatusBar } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { setCustomText } from 'react-native-global-props';
import { customTextStyle } from './styles';

const navTheme = DefaultTheme;

navTheme.colors.background = 'white';

setCustomText(customTextStyle);
export default function Index() {
  LogBox.ignoreAllLogs();
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <RootSiblingParent>
              <App />
            </RootSiblingParent>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
}
