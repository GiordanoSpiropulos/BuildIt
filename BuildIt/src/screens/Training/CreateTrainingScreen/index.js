import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Column,
  Container,
  Header,
  RoundButton,
  Row,
} from '../../../components';
import { colors } from '../../../styles';
import Input from '../../../components/Input';
import { Picker } from '@react-native-picker/picker';
import {
  FlatList,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

export function CreateTrainingScreen() {
  const route = useRoute();
  const navigation = useNavigation();
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

  const [trainName, setTrainName] = useState('');
  const [selectedItem, setSelectedItem] = useState(teste[0].name);
  const [repNumber, setRepNumber] = useState(1);
  const [exerciseList, setExerciseList] = useState([]);
  const [isNext, setIsNext] = useState(false);

  function onAddPress() {
    const exercise = {
      repetionNumber: repNumber,
      exerciseName: selectedItem,
    };
    setExerciseList([...exerciseList, exercise]);
    setRepNumber(1);
  }

  function renderItem({ item }) {
    return (
      <View>
        <Text>{`${item.exerciseName}  ${item.repetionNumber}x`}</Text>
      </View>
    );
  }

  const TrainingInput = ({
    title,
    onChangeText,
    error,
    onBlur,
    onSubmitEditing,
  }) => {
    return (
      <Input
        label={title}
        onChangeText={onChangeText}
        error={error}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        selectionColor={colors.primary}
        textColor={colors.primary}
        underlineColor={colors.primary}
        placeholderColor={colors.primary}
        primary={colors.primary}
      />
    );
  };

  return (
    <Container>
      <Header
        title={`Criar novo treino de ${trainTypeName}`}
        goBack={() => (!isNext ? navigation.goBack() : setIsNext(false))}
        color={'black'}
      />
      <View style={{ marginTop: 40 }}>
        {!isNext ? (
          <TrainingInput title={'Nome do treino'} />
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
            />
          </>
        )}
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button
          title={!isNext ? 'Continuar' : 'Finalizar'}
          onPress={() => setIsNext(true)}
        />
      </View>
    </Container>
  );
}
