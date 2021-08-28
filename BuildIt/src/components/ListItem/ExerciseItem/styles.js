import styled from 'styled-components';
import { colors, fonts } from '../../../styles';

export const ItemContainer = styled.View`
  border-bottom-width: 0.5;
  padding-bottom: 20px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const IconContainer = styled.View`
  flex: 0.1;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ExerciseText = styled.Text`
  font-size: 17px;
  font-family: ${fonts.semibold};
`;

export const RepText = styled.Text`
  font-family: ${fonts.semibold};
  color: grey;
`;

export const RoundButtonContainer = styled.View`
  border-radius: 100;
  justify-content: center;
  align-items: center;
`;
