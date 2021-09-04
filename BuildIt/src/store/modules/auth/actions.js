import { ACTION_TYPES } from './actionTypes';

export function loginRequest(email, password) {
  return {
    type: ACTION_TYPES.LOGIN_REQUEST,
    payload: { email, password },
  };
}
export function loginSuccess() {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
  };
}

export function signInRequest(email, password, username) {
  return {
    type: ACTION_TYPES.SIGN_IN_REQUEST,
    payload: { email, password, username },
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
