import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Button, Container, Header } from '../../../../components';
import Input from '../../../../components/Input';
import { ImageContainer, TipText, Title } from './styles';

export function SelectExerciseScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const exercise = route.params.exercise;

  const [repNumber, setRepNumber] = useState('');
  const [repNumberError, setRepNumberError] = useState(null);

  function onChangeRep(value) {
    setRepNumber(value);
    setRepNumberError('');
  }

  function onBlurRep() {
    let varNumber = parseInt(repNumber);
    if (repNumber) {
      if (isNaN(varNumber) || varNumber <= 0) {
        setRepNumberError('*Número de repetições inválido!');
        return;
      } else setRepNumberError('');
    } else setRepNumberError('*O número de repetições não pode estar vazio!');
  }

  function onAddList() {
    if (repNumberError === '')
      navigation.navigate({
        name: 'CreateTrainingScreen',
        params: {
          exercise: {
            id: exercise.id,
            nomeExercicio: exercise.nomeExercicio,
            image: exercise.image,

            repeticoes: repNumber,
          },
        },
        merge: true,
      });
    else onBlurRep();
  }

  return (
    <Container>
      <Header
        title={exercise.nomeExercicio}
        goBack={() => navigation.goBack()}
        color={'black'}
      />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <ImageContainer>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: exercise.image }}
          />
        </ImageContainer>
        <Input
          customTheme={'primary'}
          label={'Número de repetições'}
          onChangeText={(value) => onChangeRep(value)}
          onBlur={() => onBlurRep()}
          error={repNumberError}
          value={repNumber}
          maxLength={3}
        />

        <Title>Dicas:</Title>
        <TipText>{exercise.descricao}</TipText>
      </ScrollView>
      <View style={{ justifyContent: 'flex-end' }}>
        <Button title={'Adicionar à Lista'} onPress={() => onAddList()} />
      </View>
    </Container>
  );
}
