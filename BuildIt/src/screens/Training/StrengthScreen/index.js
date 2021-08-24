import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Container, Row, TypeCard, AddCard } from '../../../components';
import { trainType } from '../../../helpers/enum/trainType.enum';
import { Title, ListContainer } from './styles';
import { StrengthTrainingList } from './temporaryData';

export function StrengthScreen() {
  const navigation = useNavigation();

  function onPressTrain(id, trainingName) {
    navigation.navigate('ExerciseScreen', { id, trainingName });
  }

  function onAddNewTrain(id, name) {
    navigation.navigate('CreateTrainingScreen', { id, name });
  }

  function renderItem({ item }) {
    return (
      <TypeCard
        type={'workout'}
        title={item.trainingName}
        minDuration={item.minDuration}
        maxDuration={item.maxDuration}
        onPress={() => onPressTrain(item.id, item.trainingName)}
      />
    );
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Container>
        <ListContainer>
          <Row>
            <Title>Peito</Title>
          </Row>
          <FlatList
            data={StrengthTrainingList}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={
              <AddCard
                onPress={() => onAddNewTrain(trainType.Peito, 'Peito')}
              />
            }
          />
        </ListContainer>
        <ListContainer>
          <Title>Perna</Title>
          <FlatList
            data={StrengthTrainingList}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={
              <AddCard
                onPress={() => onAddNewTrain(trainType.Perna, 'Perna')}
              />
            }
          ></FlatList>
        </ListContainer>
        <ListContainer>
          <Title>Costas</Title>
          <FlatList
            data={StrengthTrainingList}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={
              <AddCard
                onPress={() => onAddNewTrain(trainType.Costas, 'Costas')}
              />
            }
          />
        </ListContainer>
      </Container>
    </ScrollView>
  );
}
