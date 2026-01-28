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
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { login as loginApi } from '../src/api/auth.api';
import { loginUser } from '../src/redux/user/user.actions';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  /* ---------------- VALIDATIONS ---------------- */
  const emailError =
    email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? 'Enter a valid email'
      : '';

  const passwordError =
    password && password.length < 4
      ? 'Password must be at least 4 characters'
      : '';

  const isFormValid = useMemo(() => {
    return email && password && !emailError && !passwordError;
  }, [email, password, emailError, passwordError]);

  /* ---------------- LOGIN ---------------- */
  const handleLogin = async () => {
    try {
      const data = await loginApi({ email, password });

      // 🔐 Save JWT
      await AsyncStorage.setItem('token', data.token);

      // 🔁 Save user to redux
      dispatch(
        loginUser({
          name: data.name,
          email,
          role: data.role,
          token: data.token,
          isLoggedIn: true,
        })
      );

      // ✅ Role-based navigation
      if (data.role === 'CUSTOMER') {
        router.replace('/(tabs)');
      } else if (data.role === 'STAFF') {
        router.replace('/staff');
      } else if (data.role === 'OWNER') {
        router.replace('/owner');
      }

      Alert.alert('Welcome', 'Login successful');
    } catch (err: any) {
      Alert.alert(
        'Login Failed',
        err?.response?.data?.message || 'Invalid email or password'
      );
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.heading}>Welcome Back!</Text>

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {!!emailError && <Text style={styles.error}>{emailError}</Text>}

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
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        disabled={!isFormValid}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
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
});
