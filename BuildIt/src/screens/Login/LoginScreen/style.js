import { Animated } from 'react-native';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles';

export const LogoContainer = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const LogoImage = styled.Image`
  width: 140;
  height: 140;
  align-self: center;
  top: 60px;
`;

export const AppName = styled.Text`
  color: ${colors.white};
  align-self: center;
  text-align: center;
  top: 30px;
  font-size: 32px;
  font-family: ${fonts.semibold};
`;

export const InitialText = styled.Text`
  color: ${colors.white};
  text-align: center;
  top: 40px;
`;

export const LoginContainer = styled.View`
  justify-content: center;
  padding-bottom: 20px;
`;

export const NewMemberText = styled.Text`
  text-align: center;
  color: ${colors.white};
`;
