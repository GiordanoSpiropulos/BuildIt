import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ConfigItem, Container, Header } from '../../../components';
import AlertModal from '../../../components/Modal/AlertModal';
import { massDeleteTrainingByUserId } from '../../../services/Training/services';
import { ItemContainer, ItemText } from './styles';

export function MyProfileScreen() {
  const navigation = useNavigation();
  const trainRef = useRef();
  const idUser = useSelector((state) => state.auth.id);

  const buttonTrain = [
    {
      title: 'Excluir',
      onPress: () => _massDeleteTrainingByUserId(),
    },
  ];

  function _massDeleteTrainingByUserId() {
    massDeleteTrainingByUserId(idUser)
      .then((res) => {
        trainRef.current.closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <AlertModal
        type={'warning'}
        title={'Excluir treinos'}
        text={'Os treinos serão excluídos permanentemente'}
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
        {/* <ConfigItem
          menuText={'Editar dados cadastrais'}
          iconName={'edit'}
          onPress={() => navigation.navigate('ChangeRegisterScreen')}
        /> */}
      </ItemContainer>
    </Container>
  );
}
