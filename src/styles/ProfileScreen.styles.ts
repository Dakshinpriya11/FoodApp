import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { buttonStyles } from './common/button.styles';
import { textStyles } from './common/text.styles';
import { Colors } from '../theme/colors';
import { FontSizes, FontWeights } from '../theme/typography';
import { BorderRadius } from '../theme/border';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.screenContainer,
    backgroundColor: Colors.background,
    padding: 20,
  },
  heading: {
    ...textStyles.heading,
    fontSize: FontSizes.headingMedium,
    marginBottom: 25,
    textAlign: 'center',
    color: Colors.primary,
  },
  label: {
    ...textStyles.label,
    color: Colors.textSecondary,
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    ...textStyles.input,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.medium,
    padding: 14,
    fontSize: FontSizes.input,
    color: Colors.textPrimary,
  },
  inputError: {
    borderColor: Colors.error,
  },
  error: {
    ...textStyles.error,
    color: Colors.error,
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    ...buttonStyles.primary,
    padding: 15,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.medium,
  },
  buttonDisabled: {
    ...buttonStyles.disabled,
    backgroundColor: Colors.disabled,
    borderRadius: BorderRadius.medium,
  },
  buttonText: {
    ...textStyles.buttonText,
    color: Colors.white,
    fontSize: FontSizes.button,
    fontWeight: FontWeights.bold,
  },
});
