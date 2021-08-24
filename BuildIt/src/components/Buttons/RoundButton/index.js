import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../../styles';
import { RoundButtonContainer } from './styles';

export function RoundButton({ onPress, icon, backgroundColor, rippleColor }) {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(
        rippleColor ? rippleColor : 'grey',
        true
      )}
    >
      <RoundButtonContainer backgroundColor={backgroundColor}>
        <Icon name={icon ? icon : 'plus'} color={colors.white} size={20} />
      </RoundButtonContainer>
    </TouchableNativeFeedback>
  );
}
