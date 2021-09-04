import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  ItemContainer,
  IconContainer,
  RoundContainer,
  TextContainer,
  MenuText,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../styles';

export function ConfigItem({ iconName, menuText, onPress, type = 'fas' }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemContainer>
        <IconContainer>
          <RoundContainer>
            {type === 'fas' ? (
              <Icon name={iconName} size={25} color={colors.white} />
            ) : (
              <IconMC name={iconName} size={25} color={colors.white} />
            )}
          </RoundContainer>
        </IconContainer>
        <TextContainer>
          <MenuText>{menuText}</MenuText>
        </TextContainer>
        <IconContainer>
          <Icon name="chevron-right" size={20} color={'lightgray'} />
        </IconContainer>
      </ItemContainer>
    </TouchableOpacity>
  );
}
