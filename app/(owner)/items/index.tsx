import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function ItemOptions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Management</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/owner/items/create')}
      >
        <Text style={styles.text}>Create Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/owner/items/update')}
      >
        <Text style={styles.text}>Update Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/owner/items/delete')}
      >
        <Text style={styles.text}>Delete Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  button: {
    padding: 16,
    backgroundColor: '#444',
    borderRadius: 8,
    marginBottom: 15,
  },
  text: { color: '#fff', textAlign: 'center' },
});
