import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../../styles';
import Icon from 'react-native-vector-icons/Feather';

export function BackButton({ onPress, color = colors.tertiary }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon type="Icon" name="chevron-left" size={32} color={color} />
    </TouchableWithoutFeedback>
  );
}
