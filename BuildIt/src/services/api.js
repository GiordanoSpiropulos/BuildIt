import axios from 'axios';
import { Alert } from 'react-native';
import { store } from '../store';
import { setToken, signOut } from '../store/modules/auth/actions';
import { API_ROUTES } from './apiRoutes';

//export const URL_API = 'http://127.0.0.1:8000';
export const URL_API = 'https://buildit-giordano.herokuapp.com';

const api = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

const interceptor = api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status != 401) return Promise.reject(error);
    api.interceptors.request.eject(interceptor);
    const refreshToken = store.getState().auth.refreshToken;

    return api
      .post(`${API_ROUTES.REFRESH_TOKEN}`, { refresh: refreshToken })
      .then((res) => {
        store.dispatch(setToken(res.data));
        error.response.config.headers.Authorization = `Bearer ${res.data}`;
        return axios(error.response.config);
      })
      .catch((err) => {
        store.dispatch(signOut());
        Alert.alert('Deslogado', 'Sua sessão expirou!');
        return Promise.reject(error);
      });
  }
);

export default api;
