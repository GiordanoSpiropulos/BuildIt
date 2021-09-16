import { useNavigation, useIsFocused } from '@react-navigation/native';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  BackgroundGradient,
  Container,
  Header,
  Button,
} from '../../../components';
import { InitialScreenBackGround } from '../../../assets/index';
import { colors } from '../../../styles';
import { Form } from './styles';
import {
  isValidEmailInput,
  isValidPasswordInput,
  isValidUsernameInput,
} from '../../../helpers';
import Input from '../../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../../store/modules/auth/actions';
import { setArrayMessage } from '../../../store/modules/validator/actions';

export function RegisterScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const errorMessages = useSelector((state) => state.validator.messageArray);
  const loading = useSelector((state) => state.auth.loading);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [confirmEmailError, setConfirmEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const refEmail = useRef(null);
  const refConfirmEmail = useRef(null);
  const refPassword = useRef(null);
  const refConfirmPassword = useRef(null);

  useEffect(() => {
    errorMessages.forEach((item) => {
      if (item.includes('email')) setEmailError(item);
      else if (item.includes('username')) setUsernameError(item);
    });
  }, [errorMessages]);

  useEffect(() => {
    resetState();
  }, [isFocused]);

  function resetState() {
    setUsername('');
    setEmail('');
    setConfirmEmail('');
    setPassword('');
    setConfirmPassword('');

    setUsernameError(null);
    setEmailError(null);
    setConfirmEmailError(null);
    setPasswordError(null);
    setConfirmPasswordError(null);

    dispatch(setArrayMessage([]));
  }

  function onChangeUsername(username) {
    setUsername(username);
    setUsernameError('');
  }

  function onBlurUsername() {
    setUsernameError(isValidUsernameInput(username));
  }

  function onChangeEmail(email) {
    setEmail(email);
    setEmailError('');
  }

  function onBlurEmail() {
    setEmailError(isValidEmailInput(email));
  }

  function onChangeConfirmEmail(email) {
    setConfirmEmail(email);
    setConfirmEmailError('');
  }

  function onBlurConfirmEmail() {
    if (email === confirmEmail) {
      setConfirmEmailError(isValidEmailInput(confirmEmail));
    } else setConfirmEmailError('*Os emails devem ser iguais!');
  }

  function onChangePassword(password) {
    setPassword(password);
    setPasswordError('');
  }

  function onBlurPassword() {
    setPasswordError(isValidPasswordInput(password));
  }

  function onChangeConfirmPassword(password) {
    setConfirmPassword(password);
    setConfirmPasswordError('');
  }

  function onBlurConfirmPassword() {
    if (password === confirmPassword) {
      setConfirmPasswordError(isValidPasswordInput(confirmPassword));
    } else {
      setConfirmPasswordError('*As senhas devem ser iguais!');
    }
  }

  function isEveryInputValid() {
    onBlurConfirmEmail();
    onBlurEmail();
    onBlurUsername();
    onBlurPassword();
    onBlurConfirmPassword();
  }

  function onSignUp() {
    if (
      usernameError === '' &&
      emailError === '' &&
      confirmEmailError === '' &&
      passwordError === '' &&
      confirmPasswordError === ''
    ) {
      dispatch(setArrayMessage([]));
      dispatch(signUpRequest(email, password, username));
    } else isEveryInputValid();
  }

  return (
    <ImageBackground source={InitialScreenBackGround} style={{ flex: 1 }}>
      <BackgroundGradient endY={0.4}>
        <Container>
          <Header
            title={'Criar Conta'}
            color={colors.white}
            goBack={() => navigation.goBack()}
          />
          <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
            <Form>
              <Input
                label="Nome do Usuário"
                onChangeText={onChangeUsername}
                onBlur={onBlurUsername}
                onSubmitEditing={() => refEmail.current.focus()}
                error={usernameError}
              />
              <Input
                label="Email"
                onChangeText={onChangeEmail}
                onBlur={onBlurEmail}
                onSubmitEditing={() => refConfirmEmail.current.focus()}
                error={emailError}
                ref={refEmail}
              />
              <Input
                label="Confirmar Email"
                onChangeText={onChangeConfirmEmail}
                onBlur={onBlurConfirmEmail}
                onSubmitEditing={() => refPassword.current.focus()}
                error={confirmEmailError}
                ref={refConfirmEmail}
              />
              <Input
                label="Senha"
                onChangeText={onChangePassword}
                onBlur={onBlurPassword}
                onSubmitEditing={() => refConfirmPassword.current.focus()}
                error={passwordError}
                ref={refPassword}
                secureTextEntry
              />
              <Input
                label="Confirmar Senha"
                onChangeText={onChangeConfirmPassword}
                onBlur={onBlurConfirmPassword}
                error={confirmPasswordError}
                ref={refConfirmPassword}
                onSubmitEditing={onSignUp}
                secureTextEntry
              />
            </Form>
            <Button
              title={'Cadastrar-se'}
              loading={loading}
              onPress={onSignUp}
            />
          </KeyboardAwareScrollView>
        </Container>
      </BackgroundGradient>
    </ImageBackground>
  );
}
