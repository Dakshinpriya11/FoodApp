import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';
import { buttonStyles } from './common/button.styles';
import { textStyles } from './common/text.styles';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.centered, // vertically & horizontally center
    backgroundColor: '#fff',
    padding: 20, // keep original spacing
  },
  heading: {
    ...textStyles.heading, // keeps fontSize, fontWeight, color, textAlign
    marginBottom: 30, // preserve original spacing
    color: '#ff6347', // override color to match UI
  },
  button: {
    ...buttonStyles.primary, // base button styles
    paddingHorizontal: 40, // preserve original horizontal padding
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    ...textStyles.buttonText,// fontSize, fontWeight, color, textAlign
    color: '#fff',
  },
});
