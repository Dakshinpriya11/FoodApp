import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo, useCallback } from 'react';
import { RootState } from '../redux/store';
import { loginUser } from '../redux/user/user.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/ProfileScreen.styles';
import {
  validateName,
  validatePhone,
  validateEmail,
  validateAddress,
} from '../utils/validation.utils';

export default function ProfileScreen() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email || '');
  const [address, setAddress] = useState(user.address || '');

  // VALIDATION
  const nameError = validateName(name);
  const phoneError = validatePhone(phone);
  const emailError = validateEmail(email);
  const addressError = validateAddress(address);

  const hasChanges = useMemo(
    () =>
      name !== user.name ||
      phone !== user.phone ||
      email !== (user.email || '') ||
      address !== (user.address || ''),
    [name, phone, email, address, user]
  );

  const isFormValid = useMemo(
    () =>
      hasChanges &&
      name &&
      phone &&
      email &&
      address &&
      !nameError &&
      !phoneError &&
      !emailError &&
      !addressError,
    [hasChanges, name, phone, email, address, nameError, phoneError, emailError, addressError]
  );

  // SAVE HANDLER
  const handleSave = useCallback(async () => {
    try {
      dispatch(loginUser({ name, phone, email, address, isLoggedIn: true }));

      const storedUser = await AsyncStorage.getItem('user');
      const userData = storedUser ? JSON.parse(storedUser) : {};
      const updatedUser = { ...userData, name, phone, email, address };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

      Alert.alert('Success', 'Profile updated successfully');
    } catch {
      Alert.alert('Error', 'Failed to save profile');
    }
  }, [dispatch, name, phone, email, address]);

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
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        disabled={!isFormValid}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
