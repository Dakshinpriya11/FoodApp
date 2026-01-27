import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../src/redux/store';
import { loginUser } from '../../src/redux/user/user.actions';

export default function ProfileScreen() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email || '');

  const handleSave = () => {
    if (!/^[A-Za-z\s]+$/.test(name)) {
      Alert.alert('Invalid Name', 'Only letters allowed');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Invalid Phone', 'Phone must be 10 digits');
      return;
    }

    dispatch(
      loginUser({
        name,
        phone,
        email,
      })
    );

    Alert.alert('Success', 'Profile updated');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />

      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
        maxLength={10}
        placeholder="Phone"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ✅ STYLES — this was missing */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#ff6347',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff6347',
    borderRadius: 10,
    padding: 14,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
