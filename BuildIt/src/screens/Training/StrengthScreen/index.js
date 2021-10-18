import { useNavigation, useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import {
  Container,
  Row,
  TypeCard,
  AddCard,
  Loading,
} from '../../../components';
import { trainType } from '../../../helpers/enum/trainType.enum';
import { colors } from '../../../styles';
import { Title, ListContainer } from './styles';
import { deleteTrainingById, getTraningsByUserId } from '../../../services';
import { useSelector } from 'react-redux';
import AlertModal from '../../../components/Modal/AlertModal';

export function StrengthScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const idUser = useSelector((state) => state.auth.id);

  const [idSelected, setIdSelected] = useState(0);
  const [trainTypeSelected, setTrainTypeSelected] = useState(0);
  const [backWorkout, setBackWorkout] = useState([]);
  const [chestWorkout, setChestWorkout] = useState([]);
  const [legWorkout, setLegWorkout] = useState([]);
  const [loading, setLoading] = useState(false);

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

  function _getTraningsByUser(id) {
    getTraningsByUserId(id)
      .then((res) => {
        let tempChest = [];
        let tempBack = [];
        let tempLeg = [];
        res.data.map((item) => {
          switch (item.tipoTreino) {
            case trainType.Peito:
              tempChest.push(item);
              break;
            case trainType.Costas:
              tempBack.push(item);
              break;
            case trainType.Perna:
              tempLeg.push(item);
              break;
          }
        });
        setChestWorkout(tempChest);
        setBackWorkout(tempBack);
        setLegWorkout(tempLeg);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, 'ERRO');
      });
  }

  function _deleteTraining() {
    setLoading(true);
    modalRef.current.closeModal();
    deleteTrainingById(idSelected).then((res) => {
      switch (trainTypeSelected) {
        case trainType.Peito:
          let newChestWorkout = chestWorkout.filter((x) => x.id != idSelected);
          setChestWorkout(newChestWorkout);
          break;
        case trainType.Costas:
          let newBackWorkout = backWorkout.filter((x) => x.id != idSelected);
          setBackWorkout(newBackWorkout);
          break;
        case trainType.Perna:
          let newLegWorkout = legWorkout.filter((x) => x.id != idSelected);
          setLegWorkout(newLegWorkout);
          break;
      }
      setLoading(false);
    });
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      _getTraningsByUser(idUser);
    }
  }, [isFocused]);

  function onPressTrain(id, trainingName) {
    navigation.navigate('ExerciseScreen', { id, trainingName });
  }

  function onLongPress(id, trainType) {
    setIdSelected(id);
    setTrainTypeSelected(trainType);
    modalRef.current.openModal();
  }

  function onModalExclude() {
    _deleteTraining();
  }

  function onModalEdit() {
    onEditTrain();
  }

  function onAddNewTrain(trainType, name) {
    navigation.navigate('CreateTrainingScreen', {
      id: idSelected,
      trainType,
      name,
      isEdit: false,
    });
  }

  function onEditTrain() {
    navigation.navigate('CreateTrainingScreen', {
      id: idSelected,
      trainType: trainTypeSelected,
      isEdit: true,
    });
  }

  function renderItem({ item }) {
    return (
      <TypeCard
        key={item.id}
        type={'workout'}
        title={item.nomeTreino}
        minDuration={item.tempoMinDuracao}
        onPress={() => onPressTrain(item.id, item.nomeTreino)}
        onLongPress={() => onLongPress(item.id, item.tipoTreino)}
      />
    );
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                data={chestWorkout}
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
                data={legWorkout}
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
                data={backWorkout}
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
      )}
    </>
  );
}
