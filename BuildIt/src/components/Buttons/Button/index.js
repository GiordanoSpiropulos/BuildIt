import React from 'react';
import { ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import { colors } from '../../../styles';
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
        {!loading ? (
          <ButtonTitle textColor={textColor} fontFamily={fontFamily}>
            {title}
          </ButtonTitle>
        ) : (
          <ActivityIndicator size={'small'} color={colors.white} />
        )}
      </RButton>
    </TouchableNativeFeedback>
  );
}
