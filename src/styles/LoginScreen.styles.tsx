import { StyleSheet, Platform, StatusBar } from 'react-native';
import { layoutStyles } from './common/layout.styles';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.screenContainer,
    flex: 1, // ensure the container takes full screen
    justifyContent: 'center', // vertically center content
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 0, // avoid overlap with status bar
    backgroundColor: '#fff',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff6347',
    textAlign: 'center',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 4,
    marginTop: 12,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },

  inputError: {
    borderColor: '#ff4d4f',
  },

  error: {
    fontSize: 12,
    color: '#ff4d4f',
    marginTop: 4,
    marginLeft: 4,
  },

  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },

  buttonDisabled: {
    backgroundColor: '#f4b3a6',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  registerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },

  registerLink: {
    color: '#ff6347',
    fontWeight: 'bold',
  },
});
