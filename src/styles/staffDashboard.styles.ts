import { StyleSheet } from 'react-native';
import { BorderRadius } from '../theme/border';
import { Colors } from '../theme/colors';
import { FontSizes, FontWeights } from '../theme/typography';

export const staffDashboardStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.background,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: BorderRadius.large,
    backgroundColor: Colors.white,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  name: {
    fontSize: FontSizes.body,
    fontWeight: FontWeights.semiBold,
    color: Colors.textPrimary,
  },
  price: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  loading: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: FontSizes.body,
    color: Colors.textPrimary,
  },
});
