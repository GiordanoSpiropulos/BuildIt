import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  AvaliableExercise,
  Button,
  Container,
  CountDown,
  Header,
  Loading,
} from '../../../components';
import { getTrainingById } from '../../../services/Training/services';
import { Title } from './styles';

export function ExerciseScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const idUser = useSelector((state) => state.auth.id);
  const trainingId = route.params.id;
  const trainingName = route.params.trainingName;

  const [loading, setLoading] = useState(true);
  const [exerciseList, setExerciseList] = useState([]);
  const [setsNumber, setSetsNumber] = useState('');

  useEffect(() => {
    _getTrainingById();
  }, []);

  function _getTrainingById() {
    getTrainingById(trainingId).then((res) => {
      setExerciseList(res.data.exercicioJson);
      setSetsNumber(res.data.numeroSeries);
      setLoading(false);
    });
  }

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

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header
            title={trainingName}
            goBack={() => navigation.goBack()}
            color={'black'}
          />
          <Title>Exercicíos</Title>
          <Text>Total de séries: {setsNumber} </Text>
          <FlatList
            style={{ height: '70%', marginTop: 20 }}
            data={exerciseList}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />

          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Button
              title={'Começar'}
              onPress={() =>
                navigation.navigate('InProgressTrainingScreen', {
                  exerciseList,
                  setsNumber,
                  trainingId,
                  trainingName,
                })
              }
            />
          </View>
        </>
      )}
    </Container>
  );
}
