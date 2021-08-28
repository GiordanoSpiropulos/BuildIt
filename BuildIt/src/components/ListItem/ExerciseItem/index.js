import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ItemContainer,
  IconContainer,
  TextContainer,
  RepText,
  ExerciseText,
  RoundButtonContainer,
} from './styles';

export function ExerciseItem({ exerciseName, exerciseRep, onRemoveItem }) {
  return (
    <ItemContainer>
      <IconContainer>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('grey', true)}
        >
          <RoundButtonContainer>
            <Icon name="bars" size={25} />
          </RoundButtonContainer>
        </TouchableNativeFeedback>
      </IconContainer>

      <TextContainer>
        <ExerciseText>{exerciseName.toUpperCase()}</ExerciseText>
        <RepText>x {exerciseRep}</RepText>
      </TextContainer>

      <IconContainer>
        <TouchableNativeFeedback
          onPress={onRemoveItem}
          background={TouchableNativeFeedback.Ripple('grey', true)}
        >
          <RoundButtonContainer>
            <Icon name="minus" size={20} />
          </RoundButtonContainer>
        </TouchableNativeFeedback>
      </IconContainer>
    </ItemContainer>
  );
}
