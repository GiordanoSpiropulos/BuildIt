import api from '../api';
import { API_ROUTES } from '../apiRoutes';

//Cria o Treino
export function createTraining(dto) {
  return api.post(`${API_ROUTES.TRAINING}`, dto);
}

//Get todos os treinos do pelo Id do Usuário
export function getTraningsByUserId(userId) {
  return api.get(`${API_ROUTES.TRAINING}trainByUser/${userId}/`);
}

//Get no treino por Id
export function getTrainingById(id) {
  return api.get(`${API_ROUTES.TRAINING}${id}/`);
}

//Update o Treino do Usuario
export function updateTrainingById(id, dto) {
  return api.put(`${API_ROUTES.TRAINING}${id}/`, dto);
}

//Single delete do treino
export function deleteTrainingById(id) {
  return api.delete(`${API_ROUTES.TRAINING}${id}/`);
}

//Mass delete do treino
export function massDeleteTrainingByUserId(userId) {
  return api.delete(`${API_ROUTES.TRAINING}trainByUser/${userId}/`);
}

//Patch no Treino do Usuario
export function patchTrainingById(id, dto) {
  return api.patch(`${API_ROUTES.TRAINING}${id}/`, dto);
}
