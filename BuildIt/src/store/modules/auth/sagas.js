import { all, takeLatest, put, call } from 'redux-saga/effects';
import { loginSuccess } from './actions';
import { ACTION_TYPES } from './actionTypes';

export default all([
  takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginRequest),
  takeLatest(ACTION_TYPES.SIGN_IN_REQUEST, signInRequest),
]);

function* loginRequest({ payload }) {
  try {
    const { email, password } = payload;
    //chamar api. . .

    yield put(loginSuccess());
  } catch (err) {}
}

function* signInRequest({ payload }) {
  const { email, password, username } = payload;
}
