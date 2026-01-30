import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { FontSizes, FontWeights } from '../theme/typography';
import { BorderRadius } from '../theme/border';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.large,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 18,
    alignItems: 'center',

    // iOS shadow
    shadowColor: Colors.textPrimary,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // Android shadow
    elevation: 5,
  },

  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: FontSizes.title,
    fontWeight: FontWeights.semiBold,
    color: Colors.textPrimary,
  },

  cardDesc: {
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    color: Colors.textQuaternary,
    marginTop: 4,
    textAlign: 'center',
  },
});
