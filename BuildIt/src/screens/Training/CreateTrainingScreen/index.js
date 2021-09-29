import React, { useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Container,
  Header,
  AvaliableExercise,
  Loading,
  ExerciseItem,
} from '../../../components';
import Input from '../../../components/Input';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  createTraining,
  getExerciseList,
  getTrainingById,
  updateTrainingById,
} from './services';
import AlertModal from '../../../components/Modal/AlertModal';
export function CreateTrainingScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const idUser = useSelector((state) => state.auth.id);

  const [idTraining] = useState(route.params.id);
  const [trainTypeId] = useState(route.params.trainType);
  const [trainTypeName] = useState(route.params.name);
  const [isEdit] = useState(route.params.isEdit);

  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [avaliabeExercise, setAvaliableExercise] = useState([]);

  const [numberSets, setNumberSets] = useState('10');
  const [numberSetsError, setNumberSetsError] = useState(null);

  const [trainName, setTrainName] = useState('AAA');
  const [trainNameError, setTrainNameError] = useState(null);

  const [exerciseList, setExerciseList] = useState([]);

  const [isNext, setIsNext] = useState(false);
  const [isViewSelected, setIsViewSelected] = useState(false);
  const [modalError, setModalError] = useState('');

  const modalSuccessref = useRef();
  const modalFailRef = useRef();

  useEffect(() => {
    _getExerciseList();
    if (isEdit) _getTrainInfo();
  }, []);
  useEffect(() => {
    if (route.params?.exercise) {
      var _exercise = exerciseList;
      _exercise.push(route.params.exercise);
      setExerciseList(_exercise);
    }
  }, [route.params?.exercise]);

  function _getExerciseList() {
    getExerciseList().then((res) => {
      setAvaliableExercise(res.data);
      setLoading(false);
    });
  }

  function _getTrainInfo() {
    setLoadingEdit(true);
    getTrainingById(idUser, idTraining).then((res) => {
      setTrainName(res.data.nomeTreino);
      setNumberSets(res.data.numeroSeries.toString());
      setTrainNameError('');
      setNumberSetsError('');
      setExerciseList(res.data.exercicioJson.exerciseList);
      setLoadingEdit(false);
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
        else {
          console.log(err.response.data);
          setModalError(
            'Ocorreu um erro ao tentar criar o seu treino, tente novamente mais tarde!'
          );
        }
        modalFailRef.current.openModal();
        setButtonLoading(false);
      });
  }

  function _editTraining(dto) {
    setButtonLoading(true);
    updateTrainingById(dto).then((res) => {
      modalSuccessref.current.openModal();
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

  function onChangeSet(value) {
    setNumberSetsError('');
    setNumberSets(value);
  }

  function onBlurName() {
    if (trainName) {
      setTrainNameError('');
      return;
    }
    setTrainNameError('*O nome do treino não pode estar vazio!');
  }

  function onBlurNumberSets() {
    let varNumber = parseInt(numberSets);
    if (numberSets) {
      if (isNaN(varNumber) || varNumber <= 0) {
        setNumberSetsError('*Número de séries inválido!');
        return;
      } else setNumberSetsError('');
    } else setNumberSetsError('*O número de séries não pode estar vazio!');
  }

  // function onAddPress() {
  //   const exercise = {
  //     numeroRepeticoes: repNumber,
  //     nomeExercicio: selectedItem.nomeExercicio
  //       ? selectedItem.nomeExercicio
  //       : selectedItem,
  //   };

  //   setExerciseList([...exerciseList, exercise]);
  //   setRepNumber(1);
  // }

  function onExercisePress(item) {
    navigation.navigate('SelectExerciseScreen', {
      exercise: item,
      trainTypeId,
      trainTypeName,
      idTraining,
      isEdit,
    });
  }

  function onNext() {
    if (trainNameError === '' && numberSetsError === '') {
      setIsNext(true);
    } else {
      onBlurName();
      onBlurNumberSets();
    }
  }
  function onFinishCreating() {
    if (exerciseList.length > 0) {
      const dto = {
        nomeTreino: trainName,
        numeroSeries: parseInt(numberSets),
        tipoTreino: trainTypeId,
        usuarioId: idUser,
        exercicioJson: exerciseList,
      };

      _createTraining(dto);
    } else {
      setModalError('Selecione ao menos 3 exercicíos da lista.');
      modalFailRef.current.openModal();
    }
  }

  // function onRemoveItem(index) {
  //   var temporaryList = exerciseList;
  //   temporaryList = temporaryList.filter((item, pos) => {
  //     return pos !== index;
  //   });
  //   setExerciseList(temporaryList);
  // }

  function renderItem({ item, index }) {
    return (
      <AvaliableExercise
        onPress={() => onExercisePress(item)}
        exerciseName={item.nomeExercicio}
        image={item.image}
      />
    );
  }

  function renderSelected({ item, index }) {
    return (
      <ExerciseItem
        exerciseName={item.nomeExercicio}
        exerciseRep={item.repeticoes}
        key={`${item.id} - ${index}`}
      />
    );
  }

  return (
    <>
      {loading || loadingEdit ? (
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
              <View>
                <Input
                  customTheme={'primary'}
                  label={'Nome do treino'}
                  onChangeText={(value) => onChangeName(value)}
                  onBlur={() => onBlurName()}
                  error={trainNameError}
                  value={trainName}
                />
                <Input
                  customTheme={'primary'}
                  label={'Número de séries'}
                  keyboardType="numeric"
                  onChangeText={(value) => onChangeSet(value)}
                  onBlur={() => onBlurNumberSets()}
                  value={numberSets}
                  error={numberSetsError}
                  maxLength={1}
                />
              </View>
            ) : (
              <>
                {!isViewSelected ? (
                  <FlatList
                    style={{ height: '70%' }}
                    data={avaliabeExercise}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                  />
                ) : (
                  <FlatList
                    style={{ height: '70%' }}
                    data={exerciseList}
                    renderItem={renderSelected}
                    showsVerticalScrollIndicator={false}
                  />
                )}
              </>
            )}
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            {isNext && (
              <Button
                title={
                  !isViewSelected
                    ? 'Treinos selecionados'
                    : 'Selecionar Treinos'
                }
                onPress={() => setIsViewSelected(!isViewSelected)}
              />
            )}
            <Button
              title={!isNext ? 'Continuar' : 'Finalizar'}
              loading={buttonLoading}
              onPress={() => (!isNext ? onNext() : onFinishCreating())}
            />
          </View>
        </Container>
      )}
    </>
  );
}
