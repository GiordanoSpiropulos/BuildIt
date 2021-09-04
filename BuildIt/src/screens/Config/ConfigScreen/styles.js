import styled from 'styled-components';
import { fonts } from '../../../styles';

export const PerfilImageContainer = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 10px 0px;
`;

export const PerfilImageRounded = styled.View`
  background-color: black;
`;
export const PerfilImage = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  border-width: 6px;
  border-color: white;
`;

export const InnerPerfil = styled.View`
  width: 130px;
  height: 130px;
  border-radius: 100;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: gray;
`;

export const UserNameText = styled.Text`
  font-size: 18;
  font-family: ${fonts.semibold};
  margin-top: 10px;
`;
