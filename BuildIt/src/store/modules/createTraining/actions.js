import { ACTION_TYPES } from './actionTypes';

export function createTrainingRequest(trainingList, trainingName) {
  return {
    type: ACTION_TYPES.REQUEST_CREATE,
    payload: { trainingList, trainingName },
  };
}
