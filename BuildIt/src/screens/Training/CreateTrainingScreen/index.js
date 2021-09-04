import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Column,
  Container,
  Header,
  RoundButton,
  Row,
  ExerciseItem,
} from '../../../components';
import Input from '../../../components/Input';
import { Picker } from '@react-native-picker/picker';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { createTrainingRequest } from '../../../store/modules/createTraining/actions';

export function CreateTrainingScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const trainTypeId = route.params.id;
  const trainTypeName = route.params.name;

  const teste = [
    {
      name: 'Treino 1',
    },
    {
      name: 'Treino 2',
    },
    {
      name: 'Treino 3',
    },
  ];

  const [setNumberSets, setSetNumberSets] = useState(1);
  const [trainName, setTrainName] = useState('');
  const [trainNameError, setTrainNameError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(teste[0].name);
  const [repNumber, setRepNumber] = useState(1);
  const [exerciseList, setExerciseList] = useState([]);
  const [isNext, setIsNext] = useState(false);

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
      repetionNumber: repNumber,
      exerciseName: selectedItem,
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
    dispatch(createTrainingRequest(exerciseList, trainName));
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
        exerciseName={item.exerciseName}
        exerciseRep={item.repetionNumber}
        onRemoveItem={() => onRemoveItem(index)}
      />
    );
  }

  return (
    <Container>
      <Header
        title={`Criar novo treino de ${trainTypeName}`}
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
                  selectedValue={selectedItem}
                  onValueChange={(itemValue) => setSelectedItem(itemValue)}
                >
                  {teste.map((item, index) => (
                    <Picker.Item
                      label={item.name}
                      value={item.name}
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
          onPress={() => (!isNext ? onNext() : onFinishCreating())}
          disabled={!isNext ? false : exerciseList.length <= 0}
        />
      </View>
    </Container>
  );
}
