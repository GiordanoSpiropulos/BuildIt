import styled from 'styled-components';
import { colors, fonts } from '../../../styles';

export const ItemContainer = styled.View`
  border-bottom-width: 0.5;
  padding-bottom: 20px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const IconContainer = styled.View`
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const RoundContainer = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 100;
  background-color: ${colors.secondary};
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  justify-content: center;
  flex: 2;
`;

export const MenuText = styled.Text`
  font-family: ${fonts.semibold};
  margin-left: 10;
`;
