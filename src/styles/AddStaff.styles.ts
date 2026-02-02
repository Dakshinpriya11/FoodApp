import { StyleSheet } from 'react-native';
import { Colors } from '@/src/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: Colors.textPrimary,
  },
  card: {
    padding: 16,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
    color: Colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
    color: Colors.textPrimary,
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: Colors.error,
    marginTop: 8,
  },
});
