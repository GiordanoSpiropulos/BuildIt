import produce from 'immer';
import { ACTION_TYPES } from './actionTypes';

const INITIAL_STATE = {
  message: '',
  messageArray: [],
};

export default function validator(state = INITIAL_STATE, action) {
  const payload = action.payload;
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_TYPES.SET_ERROR_MESSAGE:
        draft.message = payload;
        break;
      case ACTION_TYPES.SET_ARRAY_MESSAGE:
        draft.messageArray = payload;
        break;
    }
  });
}
