import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { buttonStyles } from './common/button.styles';
import { textStyles } from './common/text.styles';
import { Colors } from '../theme/colors';
import { FontSizes, FontWeights } from '../theme/typography';
import { BorderRadius } from '../theme/border';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.centered,
    backgroundColor: Colors.background,
    padding: 20,
  },
  heading: {
    ...textStyles.heading,
    marginBottom: 30,
    color: Colors.primary,
  },
  button: {
    ...buttonStyles.primary,
    paddingHorizontal: 40,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: BorderRadius.medium,
  },
  buttonText: {
    ...textStyles.buttonText,
    color: Colors.white,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.bold,
  },
});
