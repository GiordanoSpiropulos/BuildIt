import api from '../../../services/api';
import { API_ROUTES } from '../../../services/apiRoutes';

export function getTraningsByUserId(id) {
  return api.get(`${API_ROUTES.TRAINING}${id}/`);
}

export function deleteTrainingById(userId, trainId) {
  return api.delete(`${API_ROUTES.TRAINING}${userId}/${trainId}/`);
}
