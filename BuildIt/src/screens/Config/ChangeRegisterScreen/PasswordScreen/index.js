import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { isValidPasswordInput } from '../../../../helpers';
import { requestChangePassword } from '../../../../store/modules/auth/actions';
import { Button, Container, Header } from '../../../../components';
import Input from '../../../../components/Input';

import { Form } from './styles';

export function PasswordScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const refConfirmPassword = useRef(null);

  function onChangePassword(value) {
    setPassword(value);
    setPasswordError('');
  }

  function onBlurPassword() {
    setPasswordError(isValidPasswordInput(password));
  }

  function onChangeConfirmPassword(value) {
    setConfirmPassword(value);
    setConfirmPasswordError('');
  }

  function onBlurConfirmPassword() {
    if (password === confirmPassword) {
      setConfirmPasswordError(isValidPasswordInput(confirmPassword));
    } else {
      setConfirmPasswordError('*As senhas precisam ser iguais!');
    }
  }

  function isEveryInputValid() {
    onBlurPassword();
    onBlurConfirmPassword();
  }

  function onPressConfirm() {
    if (
      password !== '' &&
      passwordError === '' &&
      confirmPassword !== '' &&
      confirmPasswordError === ''
    ) {
      dispatch(requestChangePassword(password));
    } else isEveryInputValid();
  }

  return (
    <Container>
      <Header
        color={'black'}
        title={'Alterar Senha'}
        goBack={() => navigation.goBack()}
      />
      <Form>
        <Input
          customTheme={'primary'}
          label="Senha"
          onChangeText={onChangePassword}
          onBlur={onBlurPassword}
          onSubmitEditing={() => refConfirmPassword.current.focus()}
          error={passwordError}
          value={password}
          secureTextEntry
        />
        <Input
          customTheme={'primary'}
          label="Confirmar Senha"
          onChangeText={onChangeConfirmPassword}
          onBlur={onBlurConfirmPassword}
          error={confirmPasswordError}
          value={confirmPassword}
          ref={refConfirmPassword}
          onSubmitEditing={onPressConfirm}
          secureTextEntry
        />
      </Form>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button onPress={onPressConfirm} title={'Confirmar'} />
      </View>
    </Container>
  );
}
