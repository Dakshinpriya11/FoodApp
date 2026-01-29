import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: '#ff6347',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    // Android shadow
    elevation: 3,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  secondary: {
    backgroundColor: '#eee',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },

  textPrimary: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textSecondary: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});
