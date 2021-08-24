import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { CardContainer } from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../../styles';
export function AddCard({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <CardContainer>
        <Icon name="plus" size={50} color={colors.secondary} />
      </CardContainer>
    </TouchableWithoutFeedback>
  );
}
