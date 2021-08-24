import styled from 'styled-components';
import { colors } from '../../../styles';

export const CardContainer = styled.View`
  margin: 10px 15px 10px 15px;
  height: 200px;
  width: 300;
  elevation: 20px;
  border-color: ${colors.secondary};
  border-width: 1px;
  background-color: ${colors.white};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
