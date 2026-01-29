import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { buttonStyles } from './common/button.styles';
import { textStyles } from './common/text.styles';
import { Colors } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.screenContainer,
    backgroundColor: Colors.background,
    padding: 20,
  },
  heading: {
    ...textStyles.heading,
    fontSize: 26,
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
    borderWidth: 1, // ✅ add borderWidth
    borderColor: Colors.border, // ✅ add borderColor
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
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
  },
  buttonDisabled: {
    ...buttonStyles.disabled,
    backgroundColor: Colors.disabled,
  },
  buttonText: {
    ...textStyles.buttonText,
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
