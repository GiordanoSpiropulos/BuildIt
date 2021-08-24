import styled from 'styled-components';
import { colors } from '../../../styles';

export const RoundButtonContainer = styled.View`
  border-radius: 100;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.secondary};
  width: 45;
  height: 45;
  justify-content: center;
  align-items: center;
`;
