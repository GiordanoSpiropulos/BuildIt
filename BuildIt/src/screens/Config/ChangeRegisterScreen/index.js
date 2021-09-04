import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ConfigItem, Container, Header } from '../../../components';
import { isValidPasswordInput } from '../../../helpers';
import { colors } from '../../../styles';

import { ItemContainer } from './styles';

export function ChangeRegisterScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        color={'black'}
        title={'Editar dados cadastrais'}
        goBack={() => navigation.goBack()}
      />
      <ItemContainer>
        <ConfigItem
          menuText={'Trocar senha'}
          iconName={'key'}
          onPress={() => navigation.navigate('PasswordScreen')}
        />
      </ItemContainer>
    </Container>
  );
}
