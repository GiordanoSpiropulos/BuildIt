import { all, takeLatest, put, call } from 'redux-saga/effects';
import { capitalize } from '../../../helpers/helper';
import api from '../../../services/api';
import { API_ROUTES } from '../../../services/apiRoutes';
import { setArrayMessage, setErrorMessage } from '../validator/actions';
import { loginFailed, loginSuccess, signUpFailed } from './actions';
import jwt_decode from 'jwt-decode';
import { ACTION_TYPES } from './actionTypes';

export default all([
  takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginRequest),
  takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signUpRequest),
  takeLatest(ACTION_TYPES.CHANGE_PASSWORD_REQUEST, changePasswordRequest),
  takeLatest('persist/REHYDRATE', setToken),
]);

function* loginRequest({ payload }) {
  try {
    api.defaults.headers.Authorization = null;
    const { email, password } = payload;

    const response = yield call(api.post, API_ROUTES.LOGIN_REQUEST_API, {
      email,
      password,
    });

    const { refresh, access } = response.data;
    const { user_id } = jwt_decode(access);

    yield put(loginSuccess(access, refresh, user_id));
    api.defaults.headers.Authorization = `Bearer ${access}`;
  } catch (err) {
    const errorMessage = err?.response?.data?.detail
      ? err?.response?.data?.detail
      : 'Erro na Autenticação';
    console.log('Erro na Autenticação:', err);
    yield put(loginFailed());
    yield put(setErrorMessage(errorMessage));
  }
}

function* signUpRequest({ payload }) {
  const { email, password, username } = payload;

  api.defaults.headers.Authorization = null;

  try {
    yield call(api.post, API_ROUTES.REGISTER_REQUEST_API, {
      email,
      password,
      username,
    });

    const response = yield call(api.post, API_ROUTES.LOGIN_REQUEST_API, {
      email,
      password,
    });

    const { refresh, access } = response.data;
    const { user_id } = jwt_decode(access);

    api.defaults.headers.Authorization = `Bearer ${access}`;

    yield put(loginSuccess(access, refresh, user_id));
  } catch (err) {
    let errorEmail = [];
    if (err.response?.data?.email)
      errorEmail = err.response?.data?.email.map((item) => {
        return '*' + capitalize(item);
      });

    let errorUsername = [];
    if (err.response?.data?.username)
      errorUsername = err.response?.data?.username.map((item) => {
        return '*' + capitalize(item);
      });

    let errorList = errorEmail.concat(errorUsername);

    yield put(setArrayMessage(errorList));
    yield put(signUpFailed());
  }
}

function* changePasswordRequest({ payload }) {
  const { password } = payload;
}

function* setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
  else api.defaults.headers.Authorization = null;
}
