import { all, takeLatest, put, call } from 'redux-saga/effects';
import { ACTION_TYPES } from './actionTypes';

export default all([
  takeLatest(ACTION_TYPES.REQUEST_CREATE, createTrainingRequest),
]);

function createTrainingRequest({ payload }) {
  const { trainingList, trainingName } = payload;
}
