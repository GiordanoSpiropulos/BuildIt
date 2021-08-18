import React from 'react';
import { ScrollView } from 'react-native';
import { CategoryCard, Container } from '../../components';
import { Title } from './styles';

export function TrainingScreen() {
  function onClickForca() {}

  function onClickCorrida() {}

  function onClickResistencia() {}
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Title>Escolha sua Categoria</Title>

        <CategoryCard title={'Força'} onPress={onClickForca} />
        <CategoryCard title={'Corrida'} onPress={onClickCorrida} />
        <CategoryCard title={'Resistência'} onPress={onClickResistencia} />
      </Container>
    </ScrollView>
  );
}
