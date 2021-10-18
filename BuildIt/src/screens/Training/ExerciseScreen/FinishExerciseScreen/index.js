import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import {
  AvaliableExercise,
  Button,
  Container,
  Header,
} from '../../../../components';
import { getTrainingById, patchTrainingById } from '../../../../services';
import { Title } from './style';

export function FinishExerciseScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const idUser = useSelector((state) => state.auth.id);

  const [loading, setLoading] = useState(false);

  const trainingId = route.params.trainingId;
  const trainingTime = route.params.time;
  const trainingName = route.params.trainingName;
  const sets = route.params.sets;
  const exercises = route.params.exercises;

  function renderItem({ item, index }) {
    return (
      <AvaliableExercise
        exerciseName={item.nomeExercicio}
        repNumber={item.repeticoes}
        image={item.image}
        key={`${item.id} - ${index}`}
      />
    );
  }

  function _patchTraining() {
    setLoading(true);
    getTrainingById(trainingId).then((res) => {
      const dto = {
        tempoMinDuracao: trainingTime,
      };
      patchTrainingById(trainingId, dto).then((res) => {
        setLoading(false);
        navigation.navigate('StrengthScreen');
      });
    });
  }

  function onFinishPress() {
    _patchTraining();
  }

  return (
    <Container>
      <Header title={'Fim do Treino'} color={'black'} />
      <Title>{`Você finalizou seu treino ${trainingName}!`}</Title>
      <Text>
        {`O treino foi finalizado em um tempo de ${trainingTime}, sendo realizado em ${sets} ${
          sets > 1 ? 'séries' : 'série'
        } de ${exercises.length} ${
          exercises.length > 1 ? 'exercícios' : 'exercício'
        }`}
        :{' '}
      </Text>

      <FlatList
        style={{ height: '70%', marginTop: 20 }}
        data={exercises}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ justifyContent: 'flex-end' }}>
        <Button
          title={'Finalizar'}
          loading={loading}
          onPress={() => onFinishPress()}
        />
      </View>
    </Container>
  );
}
