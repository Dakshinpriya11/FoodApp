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
    paddingHorizontal: 20,
    paddingTop: 150,
    paddingBottom: 150,
    backgroundColor: Colors.background,
  },
  heading: {
    ...textStyles.heading,
    fontSize: FontSizes.headingMedium,
    marginBottom: 25,
    textAlign: 'center',
    color: Colors.primary,
  },
  input: {
    ...textStyles.input,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: BorderRadius.medium,
    padding: 14,
    marginTop: 10,
    fontSize: FontSizes.input,
    color: Colors.textPrimary,
  },
  inputError: {
    borderColor: Colors.error,
  },
  error: {
    ...textStyles.error,
    fontSize: FontSizes.small,
    color: Colors.error,
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    ...buttonStyles.primary,
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: BorderRadius.medium,
    marginTop: 25,
    alignItems: 'center',
  },
  buttonDisabled: {
    ...buttonStyles.disabled,
    backgroundColor: Colors.disabled,
    borderRadius: BorderRadius.medium,
  },
  buttonText: {
    ...textStyles.buttonText,
    color: Colors.white,
    textAlign: 'center',
    fontSize: FontSizes.button,
    fontWeight: FontWeights.bold,
  },
  registerText: {
    ...textStyles.body,
    marginTop: 20,
    textAlign: 'center',
    color: Colors.textQuaternary,
  },
  registerLink: {
    ...textStyles.link,
    color: Colors.primary,
    fontWeight: FontWeights.bold,
  },
});
