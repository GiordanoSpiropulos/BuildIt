import React, { forwardRef } from 'react';
import { Container, TextError } from './styles';
import { TextInput } from 'react-native-paper';
import { colors, fonts } from '../../styles';

const Input = (props, ref) => {
  const theme = {
    colors: {
      text: props.textColor ? props.textColor : colors.tertiary,
      placeholder: props.placeholderColor
        ? props.placeholderColor
        : colors.white,
      error: 'red',
      primary: props.primaryColor ? props.primaryColor : colors.tertiary,
      background: 'transparent',
    },
    fonts: {
      regular: {
        fontFamily: fonts.regular,
      },
    },
  };

  return (
    <Container style={props.style}>
      <TextInput
        mode={'flat'}
        theme={theme}
        selectionColor={
          props.selectionColor ? props.selectionColor : colors.tertiary
        }
        underlineColor={
          props.underlineColor ? props.underlineColor : colors.white
        }
        style={{ paddingVertical: 0, paddingHorizontal: 0 }}
        ref={ref}
        {...props}
      />
      {props.error !== '' && <TextError>{props.error}</TextError>}
    </Container>
  );
};

export default forwardRef(Input);
