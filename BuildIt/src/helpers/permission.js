import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export async function checkPermissions(permissionName) {
  check(permissionName).then((result) => {
    switch (result) {
      case RESULTS.GRANTED:
        return true;
      default:
        return false;
    }
  });
}

export async function requestPermissions(permissionName, rationale) {
  request(permissionName, rationale).then((result) => {
    switch (result) {
      case RESULTS.GRANTED:
        return true;
      default:
        return false;
    }
  });
}
