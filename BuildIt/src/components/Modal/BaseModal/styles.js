import styled from 'styled-components';
import { colors } from '../../../styles';

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.View`
  bottom: 35px;
  max-height: 400px;
  padding-top: 60px;
  height: 100%;
  width: 80%;
  max-width: 400px;
  background-color: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
`;

export const CircleContainer = styled.View`
  align-self: center;
  z-index: 9999;
  width: 70;
  height: 70;
  border-radius: 100px;
  border-width: 3px;
  border-color: ${colors.white};
  background-color: ${(props) => props.backgroundColor};
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
