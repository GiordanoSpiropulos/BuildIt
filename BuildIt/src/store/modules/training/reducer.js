import produce from 'immer';
import { ACTION_TYPES } from './actionTypes';

const INITIAL_STATE = {};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (ACTION_TYPES) {
    }
  });
}
