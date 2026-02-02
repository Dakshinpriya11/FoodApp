import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

import { Colors } from '@/src/theme/colors';
import { styles } from '@/src/styles/AddStaff.styles';
import { RootState } from '@/src/redux/store';
import { addStaffRequest, resetAddStaffState } from '@/src/redux/staff/staff.slice';

export default function AddStaff() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state: RootState) => state.staff);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (success) {
      Alert.alert('Success', 'Staff added successfully', [{ text: 'OK', onPress: () => router.back() }]);
      dispatch(resetAddStaffState());
    }
  }, [success]);

  const handleAddStaff = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    dispatch(addStaffRequest({ name, email, password }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Staff</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Staff Name" placeholderTextColor={Colors.textSecondary} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor={Colors.textSecondary} keyboardType="email-address" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor={Colors.textSecondary} secureTextEntry />

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity style={styles.primaryButton} onPress={handleAddStaff} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Add Staff</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}
