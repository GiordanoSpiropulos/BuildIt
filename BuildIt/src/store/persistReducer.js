import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import auth from './modules/auth/reducer';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'BuildIt',
      storage: AsyncStorage,
      whitelist: [auth],
    },
    reducers
  );
  return persistedReducer;
};
