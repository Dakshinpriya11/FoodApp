import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { buttonStyles } from './common/button.styles';
import { textStyles } from './common/text.styles';
import { Colors } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.screenContainer,
     paddingHorizontal: 20,
        paddingTop: 150,
        paddingBottom: 150,
    backgroundColor: Colors.background, // white
  },
  heading: {
    ...textStyles.heading,
    fontSize: 26,
    marginBottom: 25,
    textAlign: 'center',
    color: '#ff6347',
  },
  input: {
    ...textStyles.input,
    borderWidth: 1, // keep thin border
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginTop: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff4d4f',
  },
  error: {
    ...textStyles.error,
    fontSize: 12,
    color: '#ff4d4f',
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    ...buttonStyles.primary,
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },
  buttonDisabled: {
    ...buttonStyles.disabled,
    backgroundColor: '#f4b3a6',
  },
  buttonText: {
    ...textStyles.buttonText,
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    ...textStyles.body,
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  registerLink: {
    ...textStyles.link,
    color: '#ff6347',
    fontWeight: 'bold',
  },
});
