import React from 'react';
import { Row } from '../StyledComponent/Row';
import { LogoContainer, AppName, InitialText, LogoImage } from './styles';
import { Logo } from '../../assets/index';
export function MainLogo() {
  return (
    <Row>
      <LogoContainer>
        <LogoImage resizeMode="contain" source={Logo} />
        <AppName>Build It</AppName>
        <InitialText>Construa uma vida saudável!</InitialText>
      </LogoContainer>
    </Row>
  );
}
