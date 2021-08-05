import createSagaMiddleware from '@redux-saga/core';
import { persistStore } from 'redux-persist';
import persistReducer from './persistReducer';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];
const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);
export { persistor, store };
