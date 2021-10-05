import api from '../../../services/api';
import { API_ROUTES } from '../../../services/apiRoutes';

export function getExerciseList() {
  return api.get(`${API_ROUTES.EXERCISE}`);
}

export function createTraining(dto) {
  return api.post(`${API_ROUTES.TRAINING}`, dto);
}

export function getTrainingById(userId, trainId) {
  return api.get(`${API_ROUTES.TRAINING}${userId}/${trainId}/`);
}

export function updateTrainingById(userId, trainId, dto) {
  return api.put(`${API_ROUTES.TRAINING}${userId}/${trainId}/`, dto);
}
