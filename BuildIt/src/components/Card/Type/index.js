import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Column } from '../../StyledComponent/Column';
import { Row } from '../../StyledComponent/Row';
import { CardContainer, Title, TitleContainer, DurationText } from './styles';

export function TypeCard({
  type,
  title,
  minDuration,
  maxDuration,
  onPress,
  source,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <CardContainer source={source}>
        <Row />
        <TitleContainer>
          <Row>
            <Column>
              <Title>{title}</Title>
              {type == 'workout' && (
                <DurationText>{`${minDuration}min - ${maxDuration}min`}</DurationText>
              )}
            </Column>
          </Row>
        </TitleContainer>
      </CardContainer>
    </TouchableWithoutFeedback>
  );
}
