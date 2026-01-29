import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { FontSizes, FontWeights } from '../../theme/typography';

export const textStyles = StyleSheet.create({
  heading: {
    fontSize: FontSizes.heading,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
    textAlign: 'center',
  },

  title: {
    fontSize: 22, // consider adding to FontSizes
    fontWeight: FontWeights.semiBold,
    color: Colors.textPrimary,
  },

  subtitle: {
    fontSize: FontSizes.body,
    color: '#666', // consider adding to Colors
  },

  link: {
    fontSize: FontSizes.body,
    color: Colors.primary,
    fontWeight: FontWeights.semiBold,
  },
});