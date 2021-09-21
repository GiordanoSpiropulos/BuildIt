import React, { useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Column,
  Container,
  Header,
  RoundButton,
  Row,
  ExerciseItem,
  Loading,
} from '../../../components';
import Input from '../../../components/Input';
import { Picker } from '@react-native-picker/picker';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { createTraining, getExerciseList, getTrainingById } from './services';
import AlertModal from '../../../components/Modal/AlertModal';

export function CreateTrainingScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const idTraining = route.params.id;
  const trainTypeId = route.params.trainType;
  const trainTypeName = route.params.name;
  const isEdit = route.params.isEdit;

  const idUser = useSelector((state) => state.auth.id);

  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [avaliabeExercise, setAvaliableExercise] = useState([]);
  const [setNumberSets, setSetNumberSets] = useState(1);
  const [trainName, setTrainName] = useState('');
  const [trainNameError, setTrainNameError] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);
  const [repNumber, setRepNumber] = useState(1);
  const [exerciseList, setExerciseList] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [modalError, setModalError] = useState('');

  const modalSuccessref = useRef();
  const modalFailRef = useRef();

  useEffect(() => {
    _getExerciseList();
    if (isEdit) _getTrainInfo();
  }, []);

  function _getExerciseList() {
    getExerciseList().then((res) => {
      setAvaliableExercise(res.data);
      setSelectedItem(res.data[0]);
      setLoading(false);
    });
  }

  function _getTrainInfo() {
    getTrainingById(idUser, idTraining).then((res) => {
      console.log(res.data, 'Info dos treinos');
    });
  }

  function _createTraining(dto) {
    setButtonLoading(true);
    createTraining(dto)
      .then((res) => {
        modalSuccessref.current.openModal();
        setButtonLoading(false);
      })
      .catch((err) => {
        if (err?.response.data?.nomeTreino)
          setModalError('Um treino com este nome já existe!');
        else
          setModalError(
            'Ocorreu um erro ao tentar criar o seu treino, tente novamente mais tarde!'
          );
        modalFailRef.current.openModal();
        setButtonLoading(false);
      });
  }

  function onCloseModal() {
    navigation.navigate('StrengthScreen');
  }

  function onChangeName(value) {
    setTrainNameError('');
    setTrainName(value);
  }

  function onBlurName() {
    if (trainName) {
      setTrainNameError('');
      return;
    }
    setTrainNameError('*O nome do treino não pode estar vazio!');
  }

  function onAddPress() {
    const exercise = {
      numeroRepeticoes: repNumber,
      nomeExercicio: selectedItem.nomeExercicio
        ? selectedItem.nomeExercicio
        : selectedItem,
    };

    setExerciseList([...exerciseList, exercise]);
    setRepNumber(1);
  }

  function onNext() {
    if (trainNameError === '') {
      setIsNext(true);
    } else {
      onBlurName();
    }
  }
  function onFinishCreating() {
    const exercicio = {
      exerciseList,
    };

    const dto = {
      nomeTreino: trainName,
      numeroSeries: setNumberSets,
      tipoTreino: trainTypeId,
      usuarioId: idUser,
      exercicioJson: exercicio,
    };

    _createTraining(dto);
  }

  function onRemoveItem(index) {
    var temporaryList = exerciseList;
    temporaryList = temporaryList.filter((item, pos) => {
      return pos !== index;
    });
    setExerciseList(temporaryList);
  }

  function renderItem({ item, index }) {
    return (
      <ExerciseItem
        exerciseName={item.nomeExercicio}
        exerciseRep={item.numeroRepeticoes}
        onRemoveItem={() => onRemoveItem(index)}
      />
    );
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <AlertModal
            ref={modalSuccessref}
            type={'success'}
            title={'Sucesso!'}
            text={'Treino criado com sucesso!'}
            onCustomClose={onCloseModal}
          />
          <AlertModal
            ref={modalFailRef}
            type={'error'}
            title={'Erro!'}
            text={modalError}
          />
          <Header
            title={
              isEdit ? `Editar Treino` : `Criar novo treino de ${trainTypeName}`
            }
            goBack={() => (!isNext ? navigation.goBack() : setIsNext(false))}
            color={'black'}
          />
          <View style={{ marginTop: 40 }}>
            {!isNext ? (
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Input
                    customTheme={'primary'}
                    label={'Nome do treino'}
                    onChangeText={(value) => onChangeName(value)}
                    onBlur={() => onBlurName()}
                    error={trainNameError}
                    value={trainName}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Picker
                    selectedValue={setNumberSets}
                    onValueChange={(itemValue) => setSetNumberSets(itemValue)}
                  >
                    {[...Array(3)].map((item, index) => {
                      var number = index + 1;
                      return (
                        <Picker.Item
                          style={{ flex: 1 }}
                          label={number.toString()}
                          value={index}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>
            ) : (
              <>
                <Row>
                  <Column>
                    <Picker
                      selectedValue={
                        selectedItem.length == 0
                          ? avaliabeExercise[0].nomeExercicio
                          : selectedItem
                      }
                      onValueChange={(itemValue) => setSelectedItem(itemValue)}
                    >
                      {avaliabeExercise.map((item, index) => (
                        <Picker.Item
                          label={item.nomeExercicio}
                          value={item.nomeExercicio}
                          key={index}
                        />
                      ))}
                    </Picker>
                  </Column>
                  <Column>
                    <Picker
                      selectedValue={repNumber}
                      onValueChange={(itemValue) => setRepNumber(itemValue)}
                    >
                      {[...Array(70)].map((item, index) => {
                        var number = index + 1;
                        return (
                          <Picker.Item
                            label={number.toString()}
                            value={number}
                            key={number}
                          />
                        );
                      })}
                    </Picker>
                  </Column>
                  <RoundButton onPress={onAddPress} />
                </Row>

                <FlatList
                  style={{ height: '70%' }}
                  data={exerciseList}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                />
              </>
            )}
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Button
              title={!isNext ? 'Continuar' : 'Finalizar'}
              loading={buttonLoading}
              onPress={() => (!isNext ? onNext() : onFinishCreating())}
              disabled={!isNext ? false : exerciseList.length <= 0}
            />
          </View>
        </Container>
      )}
    </>
  );
}
