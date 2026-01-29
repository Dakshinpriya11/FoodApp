import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#ff6347',
  },
  input: {
    borderWidth: 1,
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
    fontSize: 12,
    color: '#ff4d4f',
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
  },
  buttonDisabled: {
    backgroundColor: '#f4b3a6',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  registerLink: {
    color: '#ff6347',
    fontWeight: 'bold',
  },
});
