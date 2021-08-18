import styled from 'styled-components';
import { colors, fonts } from '../../../styles';

export const CardContainer = styled.ImageBackground`
  margin: 10px 0 10px;
  height: 200px;
  elevation: 20px;
  background-color: black;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: ${fonts.bold};
  font-size: 21;
  color: ${colors.white};
`;

export const TitleContainer = styled.View`
  margin-left: 20px;
  flex: 1;
`;
