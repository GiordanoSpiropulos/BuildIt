import produce from 'immer';
import { ACTION_TYPES } from './actionTypes';

const INITIAL_STATE = {
  loading: false,
  isSigned: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_TYPES.LOGIN_REQUEST:
        draft.loading = true;
        break;
      case ACTION_TYPES.LOGIN_SUCCESS:
        draft.loading = false;
        draft.isSigned = true;
        break;
    }
  });
}
