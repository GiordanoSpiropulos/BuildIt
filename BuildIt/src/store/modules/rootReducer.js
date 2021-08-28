import { combineReducers } from 'redux';
import auth from './auth/reducer';
import createTraining from './createTraining/reducer';

export default combineReducers({
  auth,
  createTraining,
});
