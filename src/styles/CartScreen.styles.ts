import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { FontSizes, FontWeights } from '../theme/typography';
import { BorderRadius } from '../theme/border';
import { layoutStyles } from './common/layout.styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  heading: {
    fontSize: FontSizes.headingMedium,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },

  listContent: {
      paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 140, // space for bottom card
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  emptyState: {
    alignItems: 'center',
    padding: 20,
  },

  emptyTitle: {
    fontSize: FontSizes.title,
    fontWeight: FontWeights.semiBold,
    color: Colors.textPrimary,
    marginBottom: 6,
  },

  emptySubtitle: {
    fontSize: FontSizes.body,
    color: Colors.textSecondary,
    textAlign: 'center',
  },

  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    padding: 16,
    borderTopLeftRadius: BorderRadius.large,
    borderTopRightRadius: BorderRadius.large,

    shadowColor: Colors.textPrimary,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  totalLabel: {
    fontSize: FontSizes.body,
    color: Colors.textSecondary,
  },

  totalAmount: {
    fontSize: FontSizes.title,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
  },

  checkoutButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },

  checkoutDisabled: {
    backgroundColor: Colors.disabled,
  },

  checkoutText: {
    fontSize: FontSizes.button,
    fontWeight: FontWeights.semiBold,
    color: Colors.white,
  },
});
