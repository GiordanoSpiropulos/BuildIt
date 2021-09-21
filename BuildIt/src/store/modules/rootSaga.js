import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import createTraining from './training/sagas';

export default function* rootSaga() {
  return yield all([auth, createTraining]);
}
