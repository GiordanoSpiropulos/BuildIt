import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import createTraining from './createTraining/sagas';

export default function* rootSaga() {
  return yield all([auth, createTraining]);
}
