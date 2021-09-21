import { all, takeLatest, put, call } from 'redux-saga/effects';
import { ACTION_TYPES } from './actionTypes';

export default all([
  takeLatest(ACTION_TYPES.CREATE_TRAINING_REQUEST, createTraining),
]);

function* createTraining({ payload }) {
  const { trainingList, trainingName } = payload;
}
