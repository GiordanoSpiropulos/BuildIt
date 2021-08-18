import styled from 'styled-components/native';

export const BackButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;

export const TextContainer = styled.View`
  align-self: center;
  top: -30px;
  margin-bottom: 30px;
`;

export const TitleHeader = styled.View`
  bottom: 5px;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  padding: 0 15px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BtnRight = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const TextTitle = styled.Text`
  font-size: 18;
  font-weight: 800;
  text-align: center;
  color: ${(props) => props.color};
`;
