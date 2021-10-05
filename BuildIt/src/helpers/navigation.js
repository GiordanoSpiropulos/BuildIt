const routeTrainingNavigation = [
  'ExerciseScreen',
  'CreateTrainingScreen',
  'SelectExerciseScreen',
  'InProgressTrainingScreen',
];

const routeConfigNavigation = [
  'MyProfileScreen',
  'ChangeRegisterScreen',
  'PasswordScreen',
];

let routeNames = [];

routeNames = routeNames.concat(routeTrainingNavigation, routeConfigNavigation);

export function hideNavigationTab(routeName) {
  if (routeNames.includes(routeName)) {
    return true;
  }
  return false;
}
