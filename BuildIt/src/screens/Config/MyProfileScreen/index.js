import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { ConfigItem, Container, Header } from '../../../components';
import AlertModal from '../../../components/Modal/AlertModal';
import { ItemContainer, ItemText } from './styles';

export function MyProfileScreen() {
  const navigation = useNavigation();
  const trainRef = useRef();
  const changeDataRef = useRef();

  const buttonTrain = [
    {
      title: 'Excluir',
      onPress: () => console.log('Excluir'),
    },
  ];

  return (
    <Container>
      <AlertModal
        type={'warning'}
        title={'Excluir treinos'}
        text={'Os dados excluídos poderão ser recuperados dentre 30 dias.'}
        ref={trainRef}
        buttons={buttonTrain}
      />

      <Header
        color="black"
        title="Meu Perfil"
        goBack={() => navigation.goBack()}
      />
      <ItemContainer>
        <ItemText>Dados pessoais</ItemText>
        <ConfigItem
          menuText={'Excluir treinos criados'}
          type={'mc'}
          iconName={'arm-flex'}
          onPress={() => trainRef.current.openModal()}
        />
        <ConfigItem
          menuText={'Editar dados cadastrais'}
          iconName={'edit'}
          onPress={() => navigation.navigate('ChangeRegisterScreen')}
        />
      </ItemContainer>
    </Container>
  );
}
