const routeTrainingNavigation = [
  'ExerciseScreen',
  'CreateTrainingScreen',
  'SelectExerciseScreen',
  'InProgressTrainingScreen',
  'FinishExerciseScreen',
];

const routeConfigNavigation = [
  'MyProfileScreen',
  'ChangeRegisterScreen',
  'PasswordScreen',
  'AboutScreen',
];

let routeNames = [];

routeNames = routeNames.concat(routeTrainingNavigation, routeConfigNavigation);

export function hideNavigationTab(routeName) {
  if (routeNames.includes(routeName)) {
    return true;
  }
  return false;
}
