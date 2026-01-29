import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { layoutStyles } from './common/layout.styles';
import { FontSizes, FontWeights } from '../theme/typography';
import { BorderRadius } from '../theme/border';

export const styles = StyleSheet.create({
  container: {
    ...layoutStyles.screenPadding,
    backgroundColor: Colors.background,
  },

  heading: {
    fontSize: 24,
    fontWeight: FontWeights.bold,
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
    fontWeight: FontWeights.bold,
    marginVertical: 20,
    textAlign: 'center',
    color: Colors.textPrimary,
  },

  checkoutButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: BorderRadius.medium,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 18,
    fontWeight: FontWeights.bold,
    marginHorizontal: 50,
  },
});
