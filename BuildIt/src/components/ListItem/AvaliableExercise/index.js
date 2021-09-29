import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  ExerciseName,
  ImageContainer,
  ItemContainer,
  TextContainer,
} from './style';

export function AvaliableExercise({ image, exerciseName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
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
        </TextContainer>
      </ItemContainer>
    </TouchableOpacity>
  );
}
