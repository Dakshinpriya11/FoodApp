// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
// } from 'react-native';
// import { useState, useMemo } from 'react';
// import { useDispatch } from 'react-redux';
// import { router } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
//
// import { login as loginApi } from '../api/auth.api';
// import { loginUser } from '../redux/user/user.actions';
// import { styles } from '../styles/LoginScreen.styles';
//
// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//
//   /* ---------------- VALIDATIONS ---------------- */
//   const emailError =
//     email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//       ? 'Enter a valid email'
//       : '';
//
//   const passwordError =
//     password && password.length < 4
//       ? 'Password must be at least 4 characters'
//       : '';
//
//   const isFormValid = useMemo(() => {
//     return email && password && !emailError && !passwordError;
//   }, [email, password, emailError, passwordError]);
//
//   /* ---------------- LOGIN ---------------- */
//   const handleLogin = async () => {
//     try {
//       const data = await loginApi({ email, password });
//
//       // Save JWT
//       await AsyncStorage.setItem('token', data.token);
//
//       // Save user to redux
//       dispatch(
//         loginUser({
//           name: data.name,
//           email,
//           role: data.role,
//           token: data.token,
//           isLoggedIn: true,
//         })
//       );
//
//       // Role-based navigation
//       if (data.role === 'CUSTOMER') router.replace('/about');
//       else if (data.role === 'STAFF') router.replace('/(staff)/dashboard');
//       else if (data.role === 'OWNER') router.replace('/(owner)/dashboard');
//
//       Alert.alert('Welcome', 'Login successful');
//     } catch (err: any) {
//       Alert.alert(
//         'Login Failed',
//         err?.response?.data?.message || 'Invalid email or password'
//       );
//     }
//   };
//
//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <Text style={styles.heading}>Welcome Back!</Text>
//
//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         style={[styles.input, emailError && styles.inputError]}
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       {!!emailError && <Text style={styles.error}>{emailError}</Text>}
//
//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={[styles.input, passwordError && styles.inputError]}
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
//
//       <TouchableOpacity
//         style={[styles.button, !isFormValid && styles.buttonDisabled]}
//         disabled={!isFormValid}
//         onPress={handleLogin}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//
//       <TouchableOpacity
//         onPress={() => router.push('(auth)/register')}
//         style={{ marginTop: 15 }}
//       >
//         <Text style={styles.registerText}>
//           Don't have an account? <Text style={styles.registerLink}>Register</Text>
//         </Text>
//       </TouchableOpacity>
//     </KeyboardAvoidingView>
//   );
// }

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { router } from 'expo-router';

import { loginRequest } from '../redux/auth/auth.actions';
import { styles } from '../styles/LoginScreen.styles';

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

  /* ---------------- LOGIN (SAGA) ---------------- */
  const handleLogin = () => {
    dispatch(
      loginRequest({
        email,
        password,
        onSuccess: (role: string) => {
          if (role === 'CUSTOMER') router.replace('/about');
          else if (role === 'STAFF') router.replace('/(staff)/dashboard');
          else if (role === 'OWNER') router.replace('/(owner)/dashboard');
        },
      })
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.heading}>Welcome Back!</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {!!emailError && <Text style={styles.error}>{emailError}</Text>}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        disabled={!isFormValid}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('(auth)/register')}
        style={{ marginTop: 15 }}
      >
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
