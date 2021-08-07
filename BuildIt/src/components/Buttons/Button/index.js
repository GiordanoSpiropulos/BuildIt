import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { ButtonTitle, RButton } from './styles';

export function Button({
  title,
  fontFamily,
  buttonColor,
  textColor,
  onPress,
  icon,
  loading = false,
  disabled = false,
}) {
  return (
    <TouchableNativeFeedback disabled={disabled} onPress={onPress}>
      <RButton buttonColor={buttonColor}>
        <ButtonTitle textColor={textColor} fontFamily={fontFamily}>
          {title}
        </ButtonTitle>
      </RButton>
    </TouchableNativeFeedback>
  );
}
