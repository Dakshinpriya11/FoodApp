import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddStaff() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Staff</Text>

      <TextInput placeholder="Staff Name" style={styles.input} />
      <TextInput placeholder="Phone Number" style={styles.input} />
      <TextInput placeholder="Role" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Staff</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', textAlign: 'center' },
});
