import React, { forwardRef } from 'react';
import { Container, TextError } from './styles';
import { TextInput } from 'react-native-paper';
import { colors, fonts } from '../../styles';
import { Text } from 'react-native';

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

export function Input({
  style,
  icon,
  label,
  onSubmitEditing,
  error = '',
  ...rest
}) {
  return (
    <Container style={style}>
      <TextInput
        label={label}
        mode={'flat'}
        theme={theme}
        onSubmitEditing={onSubmitEditing}
        selectionColor={colors.tertiary}
        underlineColor={colors.white}
        style={{ paddingVertical: 0, paddingHorizontal: 0 }}
        error={error}
        {...rest}
      />
      {error !== '' && <TextError>{error}</TextError>}
    </Container>
  );
}
