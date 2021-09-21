import { combineReducers } from 'redux';
import auth from './auth/reducer';
import createTraining from './training/reducer';
import validator from './validator/reducer';

export default combineReducers({
  auth,
  createTraining,
  validator,
});
