import produce from 'immer';
import { DRAFT_STATE } from 'immer/dist/internal';
import { ACTION_TYPES } from './actionTypes';

const INITIAL_STATE = {
  loading: false,
  isSigned: false,
  token: '',
  refreshToken: '',
};

export default function auth(state = INITIAL_STATE, action) {
  const payload = action.payload;
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_TYPES.LOGIN_REQUEST:
        draft.loading = true;
        break;
      case ACTION_TYPES.LOGIN_SUCCESS:
        draft.loading = false;
        draft.isSigned = true;
        draft.token = payload;
        break;
      case ACTION_TYPES.LOGIN_FAILED:
        draft.loading = false;
        break;
      case ACTION_TYPES.SIGN_UP_REQUEST:
        draft.loading = true;
        break;
      case ACTION_TYPES.SIGN_UP_FAILED:
        draft.loading = false;
        break;
      case ACTION_TYPES.SIGN_OUT:
        draft.isSigned = false;
        draft.token = '';
        draft.refreshToken = '';
        break;
    }
  });
}
