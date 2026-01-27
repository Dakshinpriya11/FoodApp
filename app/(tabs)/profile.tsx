import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo } from 'react';
import { RootState } from '../../src/redux/store';
import { loginUser } from '../../src/redux/user/user.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email || '');
  const [address, setAddress] = useState(user.address || '');

  /* ---------------- VALIDATIONS ---------------- */

  const nameError =
    name && !/^[A-Za-z\s]+$/.test(name)
      ? 'Only letters allowed'
      : '';

  const phoneError =
    phone && !/^\d{10}$/.test(phone)
      ? 'Phone must be 10 digits'
      : '';

  const emailError =
    email && !/^\S+@\S+\.\S+$/.test(email)
      ? 'Enter a valid email'
      : '';

  const addressError =
    address && address.length < 5
      ? 'Address is too short'
      : '';

  const hasChanges = useMemo(() => {
    return (
      name !== user.name ||
      phone !== user.phone ||
      email !== (user.email || '') ||
      address !== (user.address || '')
    );
  }, [name, phone, email, address, user]);

  const isFormValid = useMemo(() => {
    return (
      hasChanges &&
      name &&
      phone &&
      email &&
      address &&
      !nameError &&
      !phoneError &&
      !emailError &&
      !addressError
    );
  }, [
    hasChanges,
    name,
    phone,
    email,
    address,
    nameError,
    phoneError,
    emailError,
    addressError,
  ]);

  /* ---------------- SAVE ---------------- */

  const handleSave = async () => {
    try {
      dispatch(
        loginUser({
          name,
          phone,
          email,
          address,
          isLoggedIn: true,
        })
      );

      const storedUser = await AsyncStorage.getItem('user');
      const userData = storedUser ? JSON.parse(storedUser) : {};
      const updatedUser = { ...userData, name, phone, email, address };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

      Alert.alert('Success 🎉', 'Profile updated successfully');
    } catch {
      Alert.alert('Error', 'Failed to save profile');
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>

      {/* NAME */}
      <Text style={styles.label}>Edit Name</Text>
      <TextInput
        style={[styles.input, nameError && styles.inputError]}
        value={name}
        onChangeText={setName}
      />
      {!!nameError && <Text style={styles.error}>{nameError}</Text>}

      {/* PHONE */}
      <Text style={styles.label}>Edit Phone</Text>
      <TextInput
        style={[styles.input, phoneError && styles.inputError]}
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
        maxLength={10}
      />
      {!!phoneError && <Text style={styles.error}>{phoneError}</Text>}

      {/* EMAIL */}
      <Text style={styles.label}>Edit Email</Text>
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {!!emailError && <Text style={styles.error}>{emailError}</Text>}

      {/* ADDRESS */}
      <Text style={styles.label}>Edit Address</Text>
      <TextInput
        style={[styles.input, addressError && styles.inputError]}
        value={address}
        onChangeText={setAddress}
      />
      {!!addressError && <Text style={styles.error}>{addressError}</Text>}

      {/* SAVE BUTTON */}
      <TouchableOpacity
        style={[
          styles.button,
          !isFormValid && styles.buttonDisabled,
        ]}
        disabled={!isFormValid}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

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
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff4d4f',
  },
  error: {
    fontSize: 12,
    color: '#ff4d4f',
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: '#f4b3a6',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
