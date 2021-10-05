import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  ExerciseName,
  ImageContainer,
  ItemContainer,
  RepNumber,
  TextContainer,
} from './style';

export function AvaliableExercise({ image, exerciseName, onPress, repNumber }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={onPress ? false : true}>
      <ItemContainer>
        <ImageContainer>
          <Image
            source={{ uri: image }}
            style={{
              width: 75,
              height: 75,
            }}
          />
        </ImageContainer>
        <TextContainer>
          <ExerciseName>{exerciseName}</ExerciseName>
          {repNumber && <RepNumber>{repNumber} repetições</RepNumber>}
        </TextContainer>
      </ItemContainer>
    </TouchableOpacity>
  );
}
