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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../src/redux/user/user.actions';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const trimmedName = name.trim();

    // ✅ Name validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!trimmedName || trimmedName.length < 2 || !nameRegex.test(trimmedName)) {
      Alert.alert(
        'Invalid Name',
        'Name should contain only letters and be at least 2 characters long.'
      );
      return;
    }

    // ✅ Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert(
        'Invalid Phone Number',
        'Phone number must be exactly 10 digits.'
      );
      return;
    }

    // ✅ Save user data (Profile tab can access this)
    dispatch(
      loginUser({
        name: trimmedName,
        phone,
      })
    );

    router.replace('about');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.heading}>Welcome!</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="number-pad"
        maxLength={10}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* ✅ Register hyperlink */}
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.registerText}>
          Don’t have an account? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ff6347',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
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
