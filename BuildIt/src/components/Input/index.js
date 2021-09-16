import React, { forwardRef } from 'react';
import { Container, TextError } from './styles';
import { TextInput } from 'react-native-paper';
import { colors, fonts } from '../../styles';
import { StyleSheet } from 'react-native';

const Input = (props, ref) => {
  let selectionColor = props.selectionColor || colors.tertiary;
  let underlineColor = props.underlineColor || colors.white;

  let theme = {
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

  if (props.customTheme === 'primary') {
    theme.colors.text = colors.primary;
    theme.colors.primary = colors.primary;
    theme.colors.placeholder = colors.primary;
    selectionColor = colors.primary;
    underlineColor = colors.primary;
  }

  return (
    <Container style={props.style || defaultStyle.container}>
      <TextInput
        mode={'flat'}
        theme={theme}
        selectionColor={selectionColor}
        underlineColor={underlineColor}
        style={{ paddingVertical: 0, paddingHorizontal: 0 }}
        ref={ref}
        {...props}
      />
      {props.error !== '' && <TextError>{props.error}</TextError>}
    </Container>
  );
};

const defaultStyle = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
});

export default forwardRef(Input);
