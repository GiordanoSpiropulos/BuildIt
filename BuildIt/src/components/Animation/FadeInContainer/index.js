import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { AnimatedContainer } from './styles';

export function FadeInContainer({ children, duration = 1000 }) {
  const [fadeIn] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: duration,
    }).start();
  }, []);

  return (
    <AnimatedContainer style={{ opacity: fadeIn }} useNativeDriver>
      {children}
    </AnimatedContainer>
  );
}
