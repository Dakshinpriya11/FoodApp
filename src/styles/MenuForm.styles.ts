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
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 12,
    color: Colors.textPrimary,
  },

  card: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 20,

  borderWidth: 1,
  borderColor: Colors.border,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 14,
    fontSize: 15,
    color: Colors.textPrimary,
    backgroundColor: Colors.background,
    marginBottom: 18,
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  primaryButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 16,
    marginTop: 8,
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  dangerButton: {
    backgroundColor: Colors.error,
    padding: 16,
    borderRadius: 16,
    marginTop: 10,
  },

  dangerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  warning: {
    color: Colors.error,
    fontSize: 13,
    marginBottom: 14,
  },
});
