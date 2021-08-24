import { Dimensions } from 'react-native';
import { fonts, colors } from './index';

export const { height, width } = Dimensions.get('window');

export const customTextStyle = {
  style: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
};

export const tabBarStyle = {
  height: 50,
  position: 'absolute',
  display: 'flex',
  backgroundColor: colors.primary,
  borderColor: colors.primary,
};
