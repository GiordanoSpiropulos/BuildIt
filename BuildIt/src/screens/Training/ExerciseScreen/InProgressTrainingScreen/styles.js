import styled from 'styled-components';
import { fonts } from '../../../../styles';

export const ImageContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10;
`;

export const Title = styled.Text`
  font-family: ${fonts.semibold};
  font-size: 16px;
`;

export const RepText = styled.Text`
  margin-top: 20px;
  font-family: ${fonts.semibold};
  font-size: 16px;
`;
