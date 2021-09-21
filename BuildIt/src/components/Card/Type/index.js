import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import { Column } from '../../StyledComponent/Column';
import { Row } from '../../StyledComponent/Row';
import { CardContainer, Title, TitleContainer, DurationText } from './styles';

export function TypeCard({
  type,
  title,
  minDuration,
  maxDuration,
  onPress,
  onLongPress,
  source,
}) {
  return (
    <TouchableNativeFeedback onPress={onPress} onLongPress={onLongPress}>
      <CardContainer source={source}>
        <Row />
        <TitleContainer>
          <Row>
            <Column>
              <Title>{title}</Title>
              {type == 'workout' && (
                <>
                  {minDuration && maxDuration && (
                    <DurationText>{`${minDuration}min - ${maxDuration}min`}</DurationText>
                  )}
                </>
              )}
            </Column>
          </Row>
        </TitleContainer>
      </CardContainer>
    </TouchableNativeFeedback>
  );
}
