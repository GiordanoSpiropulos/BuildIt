import api from '../api';
import { API_ROUTES } from '../apiRoutes';

//Get todos os exercicios
export function getExerciseList() {
  return api.get(`${API_ROUTES.EXERCISE}`);
}

//Get lista de exercicios com aquele tipo de treino
export function getExerciseListByType(trainType) {
  return api.get(`${API_ROUTES.EXERCISE}tipoExercicio/${trainType}/`);
}
