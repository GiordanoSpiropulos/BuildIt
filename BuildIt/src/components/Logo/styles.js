import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const LogoContainer = styled.View`
  justify-content: space-between;
  flex: 1;
  margin-bottom: 20px;
`;

export const LogoImage = styled.Image`
  width: 140;
  height: 140;
  align-self: center;
  top: 30px;
`;

export const AppName = styled.Text`
  color: ${colors.white};
  align-self: center;
  text-align: center;
  top: 10px;
  font-size: 32px;
  font-family: ${fonts.semibold};
`;

export const InitialText = styled.Text`
  color: ${colors.white};
  text-align: center;
  top: 10px;
`;
