import { StyleSheet } from 'react-native';
import { Colors } from '@/src/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 12,
    color: Colors.textPrimary,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: 18,
    borderRadius: 18,
    marginBottom: 18,

    borderWidth: 1,
    borderColor: Colors.border,
  },


  dangerCard: {
    borderWidth: 1,
    borderColor: Colors.error + '30',
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: Colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },

  cardDesc: {
    marginTop: 4,
    fontSize: 13,
    color: Colors.textSecondary,
  },
});
