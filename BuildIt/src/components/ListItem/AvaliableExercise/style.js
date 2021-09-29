import styled from 'styled-components';
import { colors, fonts } from '../../../styles';

export const ItemContainer = styled.View`
  border-bottom-width: 0.5;
  padding-bottom: 20px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.View`
  border-radius: 10;
  overflow: hidden;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ExerciseName = styled.Text`
  font-family: ${fonts.semibold};
`;
