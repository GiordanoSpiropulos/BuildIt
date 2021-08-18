import styled from 'styled-components';
import { StatusBar } from 'react-native';

const statusBarMargin = StatusBar.currentHeight + 10 + 'px';

export const Container = styled.View`
  margin: ${statusBarMargin} 30px 0px 30px;
  flex: 1;
`;
