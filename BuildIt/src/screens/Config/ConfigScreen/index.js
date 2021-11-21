import { useNavigation, StackActions } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ConfigItem, Container, Header } from '../../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  InnerImageContainer,
  PerfilImage,
  PerfilImageContainer,
  InnerPerfil,
  UserNameText,
} from './styles';
import AlertModal from '../../../components/Modal/AlertModal';
import { colors } from '../../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../store/modules/auth/actions';

export function ConfigScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const [userImage, setUserImage] = useState('');
  const buttons = [
    {
      title: 'Sair',
      color: colors.error,
      onPress: () => logout(),
    },
  ];
  const modalRef = useRef();

  function openModalLogout() {
    modalRef.current.openModal();
  }

  function logout() {
    navigation.dispatch(StackActions.popToTop());
    dispatch(signOut());
    modalRef.current.closeModal();
  }
  return (
    <Container>
      <AlertModal
        ref={modalRef}
        type={'warning'}
        title={'Deseja Sair?'}
        text={'Você será deslogado do aplicativo'}
        buttons={buttons}
      />
      <Header color={'black'} title={'Opções'} />
      <PerfilImageContainer>
        <InnerPerfil>
          {userImage ? (
            <PerfilImage source={userImage} />
          ) : (
            <Icon name="user" size={70} />
          )}
        </InnerPerfil>
        <UserNameText>{username}</UserNameText>
      </PerfilImageContainer>
      <ConfigItem
        menuText={'Meu perfil'}
        iconName="user"
        onPress={() => navigation.navigate('MyProfileScreen')}
      />
      <ConfigItem
        menuText="Sobre o aplicativo"
        iconName="info"
        onPress={() => navigation.navigate('AboutScreen')}
      />
      <ConfigItem
        menuText={'Logout'}
        iconName="sign-out-alt"
        onPress={openModalLogout}
      />
    </Container>
  );
}
