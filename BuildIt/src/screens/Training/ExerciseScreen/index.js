import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Container, Header } from '../../../components';

export function ExerciseScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const trainingId = route.params.id;
  const trainingName = route.params.trainingName;
  return (
    <Container>
      <Header
        title={trainingName}
        goBack={() => navigation.goBack()}
        color={'black'}
      />
    </Container>
  );
}
