import api, { URL_API } from '../api';
import { API_ROUTES } from '../apiRoutes';
import RNFetchBlob from 'rn-fetch-blob';
import { PERMISSIONS } from 'react-native-permissions';
import DocumentPicker from 'react-native-document-picker';
import { requestPermissions } from '../../helpers/permission';
import { Platform } from 'react-native';

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

//Exporta os Treinos do Usuario
export async function exportTrainingById(id) {
  let grantedRead = true;
  let grantedWrite = true;
  if (Platform.OS == 'android') {
    grantedRead = await requestPermissions(
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
    );
    grantedWrite = await requestPermissions(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    );
  }

  if (grantedWrite && grantedRead) {
    return downloadFile(
      `${URL_API}${API_ROUTES.TRAINING}export/${id}`,
      'arquivo'
    );
  }
}

//Importa os Treinos do Usuario
export async function importTrainingById() {
  try {
    const document = await DocumentPicker.pick({
      type: [DocumentPicker.types.zip],
    });

    const formData = new FormData();

    formData.append('file', document[0]);

    return api.post(`${API_ROUTES.TRAINING}import/`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
    } else {
      throw err;
    }
  }
}

function downloadFile(url, fileName) {
  const { config, fs } = RNFetchBlob;
  const downloads = fs.dirs.DownloadDir;
  return config({
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path: downloads + '/' + fileName + '.zip',
    },
  }).fetch('GET', url);
}
