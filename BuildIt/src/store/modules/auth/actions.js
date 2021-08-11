import { ACTION_TYPES } from './actionTypes';

export function loginRequest(email, password) {
  return {
    type: ACTION_TYPES.LOGIN_REQUEST,
    payload: { email, password },
  };
}
