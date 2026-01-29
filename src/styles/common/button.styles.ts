import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { FontSizes, FontWeights } from '../../theme/typography';
import { BorderRadius } from '../../theme/border';

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',

    // Android shadow
    elevation: 3,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  secondary: {
    backgroundColor: Colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPrimary: {
    color: Colors.white,
    fontSize: FontSizes.body + 2, // 18 equivalent
    fontWeight: FontWeights.bold,
  },

  textSecondary: {
    color: Colors.textPrimary,
    fontSize: FontSizes.body, // 16
    fontWeight: FontWeights.semiBold,
  },
});
