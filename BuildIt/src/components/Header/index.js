import React from 'react';
import {
  BackButtonContainer,
  TitleHeader,
  HeaderContainer,
  BtnRight,
  TextTitle,
} from './styles';
import { BackButton } from '../index';
import { colors } from '../../styles';

export function Header({ goBack, color = colors.tertiary, title }) {
  return (
    <HeaderContainer>
      <BackButtonContainer onPress={goBack}>
        {goBack && <BackButton onPress={goBack} color={color} />}
      </BackButtonContainer>

      <TitleHeader>
        <TextTitle color={color}>{title}</TextTitle>
      </TitleHeader>

      <BtnRight></BtnRight>
    </HeaderContainer>
  );
}
