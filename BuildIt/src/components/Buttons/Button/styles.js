import styled from 'styled-components';
import { colors, fonts } from '../../../styles';

export const RButton = styled.View`
  background-color: ${(props) =>
    props.buttonColor ? props.buttonColor : colors.secondary};
  flex-direction: row;
  height: 45px;
  elevation: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  margin: 5px 17px;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  color: ${(props) => (props.textColor ? props.textColor : colors.white)};
  font-size: 15px;
  align-items: center;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : fonts.medium};
`;
