import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../styles';
import { LoadingContainer } from './styles';

export function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator color={colors.primary} size={60} />
    </LoadingContainer>
  );
}
