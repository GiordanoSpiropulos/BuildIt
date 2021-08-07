import { Dimensions } from 'react-native';
import { fonts } from './index';

export const { height, width } = Dimensions.get('window');

export const customTextStyle = {
  style: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
};
