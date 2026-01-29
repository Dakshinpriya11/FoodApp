import { StyleSheet } from 'react-native';
import { layoutStyles } from './common/layout.styles';

export const styles = StyleSheet.create({
  loaderContainer: {
    ...layoutStyles.centered,
  },
  errorContainer: {
    ...layoutStyles.centered,
  },
  listContent: {
    paddingBottom: 20,
  },
});
