import { StyleSheet, Platform, StatusBar } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { Colors } from '../theme/colors';
import { FontSizes, FontWeights } from '../theme/typography';
import { BorderRadius } from '../theme/border';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.screenContainer,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 0,
    backgroundColor: Colors.background,
  },

  heading: {
    fontSize: FontSizes.heading,
    fontWeight: FontWeights.bold,
    marginBottom: 30,
    color: Colors.primary,
    textAlign: 'center',
  },

  label: {
    fontSize: FontSizes.small,
    fontWeight: FontWeights.semiBold,
    color: Colors.textSecondary,
    marginBottom: 4,
    marginTop: 12,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.medium,
    padding: 15,
    fontSize: FontSizes.body,
  },

  inputError: {
    borderColor: Colors.error,
  },

  error: {
    fontSize: FontSizes.small,
    color: Colors.error,
    marginTop: 4,
    marginLeft: 4,
  },

  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: BorderRadius.medium,
    marginTop: 30,
  },

  buttonDisabled: {
    backgroundColor: Colors.disabled,
  },

  buttonText: {
    color: Colors.white,
    fontWeight: FontWeights.bold,
    fontSize: FontSizes.button,
    textAlign: 'center',
  },

  registerText: {
    fontSize: FontSizes.small,
    color: Colors.textQuaternary,
    textAlign: 'center',
    marginTop: 20,
  },

  registerLink: {
    color: Colors.primary,
    fontWeight: FontWeights.bold,
  },
});
