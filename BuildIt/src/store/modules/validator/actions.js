import { ACTION_TYPES } from './actionTypes';

export function setErrorMessage(message) {
  return {
    type: ACTION_TYPES.SET_ERROR_MESSAGE,
    payload: message,
  };
}

export function setArrayMessage(messages) {
  return {
    type: ACTION_TYPES.SET_ARRAY_MESSAGE,
    payload: messages,
  };
}
