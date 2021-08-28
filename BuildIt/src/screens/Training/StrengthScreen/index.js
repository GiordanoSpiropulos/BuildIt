import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Alert, FlatList, ScrollView } from 'react-native';
import { Container, Row, TypeCard, AddCard } from '../../../components';

import AlertModal from '../../../components/Modal/AlertModal';
import { trainType } from '../../../helpers/enum/trainType.enum';
import { colors } from '../../../styles';
import { Title, ListContainer } from './styles';
import { StrengthTrainingList } from './temporaryData';

export function StrengthScreen() {
  const [idSelected, setIdSelected] = useState(null);
  const navigation = useNavigation();
  const modalRef = useRef();
  const modalButtons = [
    {
      title: 'Excluir',
      onPress: () => onModalExclude(),
      color: colors.error,
    },
    {
      title: 'Editar',
      onPress: () => onModalEdit(),
      color: colors.success,
    },
  ];

  function onPressTrain(id, trainingName) {
    navigation.navigate('ExerciseScreen', { id, trainingName });
  }

  function onLongPress(id) {
    setIdSelected(id);
    modalRef.current.openModal();
  }

  function onModalExclude() {
    console.log(`o usuário quer excluir o id ${idSelected}`);
  }

  function onModalEdit() {
    console.log('O usuario quer editar');
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
        onLongPress={() => onLongPress(item.id)}
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
        <AlertModal
          ref={modalRef}
          type={'confirm'}
          title={'Selecionar'}
          text={'Escolha uma ação abaixo'}
          buttons={modalButtons}
        />
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
