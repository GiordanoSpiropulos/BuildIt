import React, { useState } from 'react';
import { ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InitialScreenBackGround } from '../../../assets';
import {
  Container,
  Button,
  MainLogo,
  FadeInContainer,
  BackgroundGradient,
} from '../../../components';
import { LoginContainer, NewMemberText } from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isValidEmailInput, isValidPasswordInput } from '../../../helpers';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../../store/modules/auth/actions';
import Input from '../../../components/Input';

export function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function register() {
    setEmail('');
    setPassword('');
    navigation.navigate('RegisterScreen');
  }

  function login() {
    if (emailError === '' && passwordError === '') {
      dispatch(loginRequest(email, password));
    }
  }

  function onChangeEmail(value) {
    setEmailError('');
    setEmail(value);
  }

  function onBlurEmail() {
    setEmailError(isValidEmailInput(email));
  }

  function onBlurPassword() {
    setPasswordError(isValidPasswordInput(password));
  }

  function onChangePassword(value) {
    setPasswordError('');
    setPassword(value);
  }

  return (
    <ImageBackground source={InitialScreenBackGround} style={{ flex: 1 }}>
      <BackgroundGradient>
        <Container>
          <FadeInContainer duration={1000}>
            <MainLogo />
          </FadeInContainer>

          <FadeInContainer duration={2500}>
            <KeyboardAwareScrollView
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={false}
            >
              <LoginContainer>
                <Input
                  label="Email"
                  keyboardType="email-address"
                  autoCorrect={false}
                  onChangeText={(value) => onChangeEmail(value)}
                  onBlur={() => onBlurEmail()}
                  error={emailError}
                />

                <View style={{ height: 10 }} />
                <Input
                  label="Senha"
                  secureTextEntry
                  autoCorrect={false}
                  onChangeText={(value) => onChangePassword(value)}
                  onBlur={() => onBlurPassword()}
                  error={passwordError}
                />
                <View style={{ height: 20 }} />

                <Button title={'Login'} onPress={() => login()} />

                <NewMemberText>
                  Novo Membro?{' '}
                  <TouchableWithoutFeedback onPress={() => register()}>
                    <NewMemberText style={{ textDecorationLine: 'underline' }}>
                      Cadastre-se
                    </NewMemberText>
                  </TouchableWithoutFeedback>
                </NewMemberText>
              </LoginContainer>
            </KeyboardAwareScrollView>
          </FadeInContainer>
        </Container>
      </BackgroundGradient>
    </ImageBackground>
  );
}
