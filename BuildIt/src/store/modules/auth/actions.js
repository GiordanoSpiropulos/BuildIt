import { ACTION_TYPES } from './actionTypes';

export function loginRequest(email, password) {
  return {
    type: ACTION_TYPES.LOGIN_REQUEST,
    payload: { email, password },
  };
}
export function loginSuccess(token, refresh) {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: { token, refresh },
  };
}

export function loginFailed() {
  return {
    type: ACTION_TYPES.LOGIN_FAILED,
  };
}

export function signUpRequest(email, password, username) {
  return {
    type: ACTION_TYPES.SIGN_UP_REQUEST,
    payload: { email, password, username },
  };
}

export function signUpFailed() {
  return {
    type: ACTION_TYPES.SIGN_UP_FAILED,
  };
}

export function requestChangePassword(password) {
  return {
    type: ACTION_TYPES.CHANGE_PASSWORD_REQUEST,
    payload: { password },
  };
}

export function signOut() {
  return { type: ACTION_TYPES.SIGN_OUT };
}
