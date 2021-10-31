import React from 'react';
import { ScrollView } from 'react-native';
import { CategoryCard, Container } from '../../../components';
import { Title } from './styles';
import {
  RunningCategory,
  StrengthCategory,
  ResistanceCategory,
} from '../../../assets';
import { useNavigation } from '@react-navigation/native';

export function CategoryScreen() {
  const navigation = useNavigation();
  function onClickForca() {
    navigation.navigate('StrengthScreen');
  }

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

        <CategoryCard
          title={'Força'}
          source={StrengthCategory}
          onPress={onClickForca}
        />
        {/* <CategoryCard
          title={'Corrida'}
          source={RunningCategory}
          onPress={onClickCorrida}
        />
        <CategoryCard
          title={'Resistência'}
          source={ResistanceCategory}
          onPress={onClickResistencia}
        /> */}
      </Container>
    </ScrollView>
  );
}
