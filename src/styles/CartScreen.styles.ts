import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { layoutStyles } from './common/layout.styles';
import { textStyles } from './common/text.styles';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.screenPadding,
    backgroundColor: Colors.background,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 15,
    color: Colors.textPrimary,
  },

  listContent: {
      paddingTop: 10,
      paddingBottom: 20,
  },

  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: Colors.textPrimary,
  },

  checkoutButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 50,
  },
});
