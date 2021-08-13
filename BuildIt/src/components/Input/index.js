import React, { forwardRef } from 'react';
import { Container, TextError } from './styles';
import { TextInput } from 'react-native-paper';
import { colors, fonts } from '../../styles';

const theme = {
  colors: {
    text: colors.tertiary,
    placeholder: colors.white,
    error: 'red',
    primary: colors.tertiary,
    background: 'transparent',
  },
  fonts: {
    regular: {
      fontFamily: fonts.regular,
    },
  },
};

const Input = (props, ref) => (
  <Container style={props.style}>
    <TextInput
      mode={'flat'}
      theme={theme}
      selectionColor={colors.tertiary}
      underlineColor={colors.white}
      style={{ paddingVertical: 0, paddingHorizontal: 0 }}
      ref={ref}
      {...props}
    />
    {props.error !== '' && <TextError>{props.error}</TextError>}
  </Container>
);

export default forwardRef(Input);
