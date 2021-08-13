import { ACTION_TYPES } from './actionTypes';

export function loginRequest(email, password) {
  return {
    type: ACTION_TYPES.LOGIN_REQUEST,
    payload: { email, password },
  };
}

export function signInRequest(email, password, username) {
  return {
    type: ACTION_TYPES.SIGN_IN_REQUEST,
    payload: { email, password, username },
  };
}
