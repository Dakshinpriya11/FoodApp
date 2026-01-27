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
import { getUser } from '../src/utils/storage';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  /* ---------------- VALIDATIONS ---------------- */

  const phoneError =
    phone && !/^\d{10}$/.test(phone)
      ? 'Phone number must be 10 digits'
      : '';

  const passwordError =
    password && password.length < 4
      ? 'Password must be at least 4 characters'
      : '';

  const isFormValid = useMemo(() => {
    return phone && password && !phoneError && !passwordError;
  }, [phone, password, phoneError, passwordError]);

  /* ---------------- LOGIN ---------------- */

  const handleLogin = async () => {
    const storedUser = await getUser();

    if (!storedUser) {
      Alert.alert('No Account Found', 'Please register first.');
      return;
    }

    if (storedUser.phone !== phone || storedUser.password !== password) {
      Alert.alert('Login Failed', 'Phone or password is incorrect.');
      return;
    }

    dispatch(
      loginUser({
        name: storedUser.name,
        phone: storedUser.phone,
        email: storedUser.email,
        address: storedUser.address,
        isLoggedIn: true,
      })
    );

    Alert.alert('Welcome 🎉', 'Login successful', [
      {
        text: 'Continue',
        onPress: () => router.replace('/about'),
      },
    ]);
  };

  /* ---------------- UI ---------------- */

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.heading}>Welcome Back!</Text>

      {/* PHONE */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={[styles.input, phoneError && styles.inputError]}
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
        maxLength={10}
      />
      {!!phoneError && <Text style={styles.error}>{phoneError}</Text>}

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}

      {/* LOGIN BUTTON */}
      <TouchableOpacity
        style={[
          styles.button,
          !isFormValid && styles.buttonDisabled,
        ]}
        disabled={!isFormValid}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.registerText}>
          Don’t have an account?{' '}
          <Text style={styles.registerLink}>Register</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff6347',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
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
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: '#f4b3a6',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
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
