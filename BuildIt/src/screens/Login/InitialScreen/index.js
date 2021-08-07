import React from 'react';
import { ImageBackground } from 'react-native';
import { InitialScreenBackGround, Logo } from '../../../assets/index';
import { Row, Container, Button } from '../../../components';
import {
  LogoImage,
  LogoContainer,
  AppName,
  InitialText,
  ButtonContainer,
} from './style';

export function InitialScreen() {
  function onPress() {}
  return (
    <ImageBackground source={InitialScreenBackGround} style={{ flex: 1 }}>
      <Container>
        <Row>
          <LogoContainer>
            <LogoImage resizeMode="contain" source={Logo} />
            <AppName>Build It</AppName>
            <InitialText>Construa uma vida saudável!</InitialText>
          </LogoContainer>
        </Row>
        <ButtonContainer>
          <Button title={'ENTRAR'} onPress={() => onPress()} />
        </ButtonContainer>
      </Container>
    </ImageBackground>
  );
}
