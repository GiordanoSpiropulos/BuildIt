import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function Index() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RootSiblingParent>
              <App />
            </RootSiblingParent>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
}
