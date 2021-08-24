import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles';

export function BackgroundGradient({
  children,
  startX = 0,
  startY = -0.1,
  endX = 0,
  endY = 1,
  rgbaX = 'rgba(52, 53, 101, 0.2)',
  rgbaY = 'rgba(52, 53, 101, 0.8)',
}) {
  return (
    <LinearGradient
      start={{ x: startX, y: startY }}
      end={{ x: endX, y: endY }}
      colors={[rgbaX, rgbaY]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
