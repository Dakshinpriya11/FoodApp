import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { buttonStyles } from './common/button.styles';
import { textStyles } from './common/text.styles';
import { Colors } from '../theme/colors';
import { BorderRadius } from '../theme/border';
import { FontSizes } from '../theme/typography';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  overlay: {
    ...layoutStyles.centered,
    padding: 20,
    backgroundColor: 'rgba(255, 99, 71, 0.4)', // no exact match in Colors
  },

  welcome: {
    ...textStyles.heading,
    color: Colors.white,
    marginBottom: 10,
  },

  info: {
    ...textStyles.subtitle,
    color: Colors.white,
    marginBottom: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: BorderRadius.medium,
  },

  buttonText: {
    ...buttonStyles.textPrimary,
    color: Colors.primary,
  },

  logout: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8, // consider adding small/medium/large in BorderRadius if needed
  },

  logoutText: {
    ...buttonStyles.textPrimary,
    fontSize: 14, // consider adding small: 14 to FontSizes
  },
});
