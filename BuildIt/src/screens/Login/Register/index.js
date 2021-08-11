import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BackgroundGradient, Container, Header } from '../../../components';
import { InitialScreenBackGround } from '../../../assets/index';
import { colors } from '../../../styles';

export function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={InitialScreenBackGround} style={{ flex: 1 }}>
      <BackgroundGradient endY={0.4}>
        <Container>
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
          >
            <Header
              title={'Criar Conta'}
              color={colors.white}
              goBack={() => navigation.goBack()}
            />
          </KeyboardAwareScrollView>
        </Container>
      </BackgroundGradient>
    </ImageBackground>
  );
}
