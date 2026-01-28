import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background, // white or theme color
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: Colors.primary, // tomato / #ff6347
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary, // dark grey
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border, // light grey
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  inputError: {
    borderColor: Colors.error, // red
  },
  error: {
    fontSize: 12,
    color: Colors.error,
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    backgroundColor: Colors.primary, // red / tomato
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center', // ensure the text is centered
  },
  buttonDisabled: {
    backgroundColor: Colors.disabled, // light red / grey
  },
  buttonText: {
    color: Colors.white, // white text
    fontSize: 18,
    fontWeight: 'bold',
  },
});
