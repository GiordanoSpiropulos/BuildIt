import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Row } from '../../index';
import { CardContainer, Title, TitleContainer } from './styles';

export function CategoryCard({ source, onPress, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <CardContainer source={source}>
        <Row />
        <TitleContainer>
          <Row>
            <Title>{title}</Title>
          </Row>
        </TitleContainer>
      </CardContainer>
    </TouchableWithoutFeedback>
  );
}
