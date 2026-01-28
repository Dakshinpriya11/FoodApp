import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../src/redux/user/user.actions';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  /* ---------------- VALIDATIONS ---------------- */

  const nameError =
    name && !/^[A-Za-z\s]+$/.test(name)
      ? 'Name should contain only letters'
      : '';

  const phoneError =
    phone && !/^\d{10}$/.test(phone)
      ? 'Phone number must be 10 digits'
      : '';

  const emailError =
    email && !/^\S+@\S+\.\S+$/.test(email)
      ? 'Enter a valid email address'
      : '';

  const addressError =
    address && address.length < 5
      ? 'Address is too short'
      : '';

  const passwordError =
    password && password.length < 4
      ? 'Password must be at least 4 characters'
      : '';

  const confirmPasswordError =
    confirmPassword && password !== confirmPassword
      ? 'Passwords do not match'
      : '';

  const isFormValid = useMemo(() => {
    return (
      name &&
      phone &&
      email &&
      address &&
      password &&
      confirmPassword &&
      !nameError &&
      !phoneError &&
      !emailError &&
      !addressError &&
      !passwordError &&
      !confirmPasswordError
    );
  }, [
    name,
    phone,
    email,
    address,
    password,
    confirmPassword,
    nameError,
    phoneError,
    emailError,
    addressError,
    passwordError,
    confirmPasswordError,
  ]);

  /* ---------------- REGISTER ---------------- */

  const handleRegister = async () => {
    try {
      const userData = { name, phone, email, address, password };

      await AsyncStorage.setItem('user', JSON.stringify(userData));

      dispatch(
        loginUser({
          ...userData,
          isLoggedIn: true,
        })
      );

      Alert.alert(
        'Registration Successful',
        'Your account has been created successfully.',
        [
          {
            text: 'Continue',
            onPress: () => router.replace('/about'),
          },
        ]
      );
    } catch {
      Alert.alert('Error', 'Failed to register. Please try again.');
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.heading}>Create Account</Text>

      {/* NAME */}
      <TextInput
        style={[styles.input, nameError && styles.inputError]}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      {!!nameError && <Text style={styles.error}>{nameError}</Text>}

      {/* PHONE */}
      <TextInput
        style={[styles.input, phoneError && styles.inputError]}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
        maxLength={10}
      />
      {!!phoneError && <Text style={styles.error}>{phoneError}</Text>}

      {/* EMAIL */}
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {!!emailError && <Text style={styles.error}>{emailError}</Text>}

      {/* ADDRESS */}
      <TextInput
        style={[styles.input, addressError && styles.inputError]}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      {!!addressError && <Text style={styles.error}>{addressError}</Text>}

      {/* PASSWORD */}
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}

      {/* CONFIRM PASSWORD */}
      <TextInput
        style={[styles.input, confirmPasswordError && styles.inputError]}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {!!confirmPasswordError && (
        <Text style={styles.error}>{confirmPasswordError}</Text>
      )}

      {/* REGISTER BUTTON */}
      <TouchableOpacity
        style={[
          styles.button,
          !isFormValid && styles.buttonDisabled,
        ]}
        disabled={!isFormValid}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.registerText}>
          Already have an account?{' '}
          <Text style={styles.registerLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginTop: 10,
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
    marginTop: 25,
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
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  registerLink: {
    color: '#ff6347',
    fontWeight: 'bold',
  },
});
