import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, BackHandler } from 'react-native';
import { Button, Container, Header } from '../../../../components';
import CountDown from '../../../../components/CountDown';
import Timer from '../../../../components/Timer';
import { ImageContainer, RepText, Title } from './styles';

export function InProgressTrainingScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const trainingId = route.params.trainingId;
  const totalSetsNumber = route.params.setsNumber;
  const trainingName = route.params.trainingName;

  const [exerciseList] = useState(route.params.exerciseList);
  const [exerciseCount, setExerciseCount] = useState(0);
  const [setsCount, setSetsCount] = useState(1);
  const [isInBreak, setIsInBreak] = useState(false);
  const [count, setCount] = useState(0);

  const breakTimeRef = useRef();
  const timerRef = useRef();

  useEffect(() => {
    if (isInBreak) {
      let interval = setInterval(() => {
        setCount((prev) => {
          if (prev === 1) {
            setIsInBreak(false);
            clearInterval(interval);
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        clearInterval(interval);
        setIsInBreak(false);
      };
    }
  }, [isInBreak]);

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  }, []);

  function onPressNext() {
    if (exerciseList[exerciseCount + 1]) {
      setExerciseCount(exerciseCount + 1);
      setCount(15);
      setIsInBreak(true);
    } else {
      if (setsCount < totalSetsNumber) {
        setSetsCount(setsCount + 1);
        setExerciseCount(0);
        setCount(30);
        setIsInBreak(true);
      } else {
        navigation.navigate('FinishExerciseScreen', {
          trainingId,
          trainingName,
          time: timerRef.current.getTime(),
          sets: totalSetsNumber,
          exercises: exerciseList,
        });
        setIsInBreak(true);
      }
    }
  }

  return (
    <Container>
      <CountDown key={'startCd'} time={3}>
        <Header
          title={exerciseList[exerciseCount].nomeExercicio}
          color={'black'}
        />
        <Timer ref={timerRef} paused={isInBreak} />
        {!isInBreak ? (
          <>
            <ImageContainer>
              <Image
                source={{ uri: exerciseList[exerciseCount].image }}
                style={{ width: 200, height: 200 }}
              />
              <RepText>
                {exerciseList[exerciseCount].repeticoes} repetições
              </RepText>
            </ImageContainer>
            <Title>Dica:</Title>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingBottom: 100 }}
              showsVerticalScrollIndicator={false}
            >
              <Text>{exerciseList[exerciseCount].descricao}</Text>
            </ScrollView>
            <View style={{ justifyContent: 'flex-end' }}>
              <Button
                title={
                  exerciseList[exerciseCount + 1]
                    ? 'Próximo'
                    : setsCount < totalSetsNumber
                    ? 'Finalizar Série'
                    : 'Finalizar Treino'
                }
                onPress={() => onPressNext()}
              />
            </View>
          </>
        ) : (
          <>
            <CountDown
              ref={breakTimeRef}
              isTime
              key={'intervalCd'}
              time={count}
            />
            <View style={{ justifyContent: 'flex-end' }}>
              <Button
                title={'Pular Descanso'}
                onPress={() => {
                  setCount(1);
                }}
              />
              <Button
                title={'+5s'}
                onPress={() => {
                  if (count + 5 < 60) {
                    setCount(count + 5);
                    breakTimeRef.current.addTimeUp(5);
                  }
                }}
              />
            </View>
          </>
        )}
      </CountDown>
    </Container>
  );
}
