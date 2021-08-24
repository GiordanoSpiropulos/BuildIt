import styled from 'styled-components';
import { colors, fonts } from '../../../styles';

export const CardContainer = styled.ImageBackground`
  margin: 10px 15px 10px 15px;
  height: 200px;
  width: 300;
  elevation: 20px;
  background-color: black;
  border-radius: 10px;
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

export const DurationText = styled.Text`
  font-size: 18;
  color: ${colors.white};
`;
