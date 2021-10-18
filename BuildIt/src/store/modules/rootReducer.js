import { combineReducers } from 'redux';
import auth from './auth/reducer';
import validator from './validator/reducer';

export default combineReducers({
  auth,
  validator,
});
