import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 99, 71, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ff6347',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logout: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#ff6347',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
