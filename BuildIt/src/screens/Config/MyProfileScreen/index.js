import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ConfigItem, Container, Header } from '../../../components';
import AlertModal from '../../../components/Modal/AlertModal';
import {
  exportTrainingById,
  importTrainingById,
  massDeleteTrainingByUserId,
} from '../../../services/Training/services';
import { ItemContainer, ItemText } from './styles';

export function MyProfileScreen() {
  const navigation = useNavigation();
  const trainRef = useRef();
  const importExportRef = useRef();
  const errorRef = useRef();
  const idUser = useSelector((state) => state.auth.id);

  const [importExportMessage, setimportExportMessage] = useState('');
  const [modalErrorMessage, setModalErrorMessage] = useState('');

  const buttonTrain = [
    {
      title: 'Excluir',
      onPress: () => _massDeleteTrainingByUserId(),
    },
  ];

  function _massDeleteTrainingByUserId() {
    massDeleteTrainingByUserId(idUser).then((res) => {
      trainRef.current.closeModal();
    });
  }

  function _exportTrainingByUserId() {
    exportTrainingById(idUser)
      .then(() => {
        setimportExportMessage(
          'Arquivos exportados com sucesso em seus Downloads!'
        );
        importExportRef.current.openModal();
      })
      .catch(() => {
        setModalErrorMessage(
          'Ocorreu um erro ao exportar seus arquivos, tente novamente mais tarde.'
        );
        errorRef.current.openModal();
      });
  }

  function _importTrainingByUserId() {
    importTrainingById()
      .then(() => {
        setimportExportMessage(
          'Arquivos importados com sucesso para sua lista de treinos!'
        );
        importExportRef.current.openModal();
      })
      .catch((err) => {
        setModalErrorMessage(
          'Ocorreu um erro ao importar seus arquivos, tente novamente mais tarde.'
        );
        errorRef.current.openModal();
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
      <AlertModal
        type={'success'}
        text={importExportMessage}
        ref={importExportRef}
      />
      <AlertModal type={'error'} text={modalErrorMessage} ref={errorRef} />

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
          menuText="Importar treinos criados"
          iconName="import"
          type="MC"
          onPress={() => _importTrainingByUserId()}
        />
        <ConfigItem
          menuText="Exportar treinos criados"
          iconName="export"
          type="MC"
          onPress={() => _exportTrainingByUserId()}
        />
      </ItemContainer>
    </Container>
  );
}
