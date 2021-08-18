import React from 'react';
import { LogoContainer, AppName, InitialText, LogoImage } from './styles';
import { Logo } from '../../assets/index';
import { View } from 'react-native';
export function MainLogo() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <LogoContainer>
        <LogoImage resizeMode="contain" source={Logo} />
        <AppName>Build It</AppName>
        <InitialText>Construa uma vida saudável!</InitialText>
      </LogoContainer>
    </View>
  );
}
