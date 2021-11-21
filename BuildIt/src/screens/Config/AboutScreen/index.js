import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Container, Header } from '../../../components';
import { AboutText, StudentText } from './styles';

export function AboutScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        color={'black'}
        title={'Sobre o aplicativo'}
        goBack={() => navigation.goBack()}
      />
      <AboutText>
        O aplicativo BuildIt visa oferecer e auxiliar a pratica de atividades
        físicas, seja onde ou quando for. Desenvolvido para o Worktec II de 2021
        e adaptado para P2 de Tópicos especiais em Informática.
      </AboutText>
      <StudentText>Anderson Freitas do Santos: RA 2840481911003</StudentText>
      <StudentText>Giordano C.S Gonçalves: RA 2840481911015</StudentText>
    </Container>
  );
}
