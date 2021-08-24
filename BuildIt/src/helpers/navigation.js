const routeNames = ['CategoryScreen', 'ExerciseScreen', 'CreateTrainingScreen'];

export function hideNavigationTab(routeName) {
  if (routeNames.includes(routeName)) {
    return true;
  }
  return false;
}
