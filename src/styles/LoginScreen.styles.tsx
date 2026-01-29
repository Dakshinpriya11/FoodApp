import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
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
  },
  registerLink: {
    color: '#ff6347',
    fontWeight: 'bold',
  },
});
