import axios from 'axios';
import { store } from '../store/index';
import { loginRequest } from '../store/modules/auth/actions';

export const URL_API = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// if (interceptor) {
//   instance.interceptors.response.use(
//     (response) => {
//       if (Array.isArray(response.data)) {
//         var json = response.data[1];
//         if (json.codeResultHttp == 401) {
//           store.dispatch(
//             loginRequest(state.auth.user.username, state.auth.password)
//           );
//         }
//       } else {
//         var json = JSON.stringify(response.data);
//         if (json.codeResultHttp == 401) {
//           store.dispatch(
//             signInRequest(state.auth.user.username, state.auth.password)
//           );
//         }
//       }

//       return response;
//     },
//   );
// }

export default api;
