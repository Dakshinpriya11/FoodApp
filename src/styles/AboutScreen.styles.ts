import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { buttonStyles } from './common/button.styles';
import { textStyles } from './common/text.styles';

export const styles = StyleSheet.create({
  // Screen-specific
  bg: {
    flex: 1,
  },

  overlay: {
    ...layoutStyles.centered,
    padding: 20,
    backgroundColor: 'rgba(255, 99, 71, 0.4)',
  },

  // Text (reuse common + override color)
  welcome: {
    ...textStyles.heading,
    color: '#fff',
    marginBottom: 10,
  },

  info: {
    ...textStyles.subtitle,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },

  // Button wrapper (white button)
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },

  buttonText: {
    ...buttonStyles.textPrimary,
    color: '#ff6347',
  },

  // Logout button (screen-specific)
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
    ...buttonStyles.textPrimary,
    fontSize: 14,
  },
});
