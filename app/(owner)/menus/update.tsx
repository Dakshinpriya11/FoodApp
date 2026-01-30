import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

import { Colors } from '@/src/theme/colors';
import { styles } from '@/src/styles/MenuForm.styles';
import { RootState } from '@/src/redux/store';
import { fetchMenuRequest, updateMenuRequest, resetUpdateMenuState } from '@/src/redux/menu/menu.slice';

export default function UpdateMenu() {
  const dispatch = useDispatch();
  const { data: menus, updateLoading, updateError, updateSuccess } = useSelector((state: RootState) => state.menu);

  const [menuId, setMenuId] = useState('');
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Fetch all menus once on mount
  useEffect(() => {
    dispatch(fetchMenuRequest());
  }, []);

  // Prefill form when menuId is entered
  useEffect(() => {
    if (menuId) {
      const menu = menus.find(m => m.id === menuId);
      if (menu) {
        setName(menu.name || '');
        setStartTime(menu.start_time || '');
        setEndTime(menu.end_time || '');
      }
    }
  }, [menuId]);

  // Handle update success
  useEffect(() => {
    if (updateSuccess) {
      Alert.alert('Success', 'Menu updated successfully', [
        { text: 'OK', onPress: () => router.back() },
      ]);
      dispatch(resetUpdateMenuState());
    }
  }, [updateSuccess]);

  const handleUpdate = () => {
    if (!menuId || !name || !startTime || !endTime) {
      Alert.alert('Error', 'Please enter Menu ID and fill all fields');
      return;
    }
    dispatch(updateMenuRequest({ id: menuId, name, start_time: startTime, end_time: endTime }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Update Menu</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Menu ID</Text>
        <TextInput
          placeholder="Enter Menu ID"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          value={menuId}
          onChangeText={setMenuId}
        />

        <Text style={styles.label}>Menu Name</Text>
        <TextInput
          placeholder="Menu Name"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Start Time</Text>
        <TextInput
          placeholder="HH:mm"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          value={startTime}
          onChangeText={setStartTime}
        />

        <Text style={styles.label}>End Time</Text>
        <TextInput
          placeholder="HH:mm"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          value={endTime}
          onChangeText={setEndTime}
        />

        {updateError ? <Text style={styles.errorText}>{updateError}</Text> : null}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleUpdate}
          disabled={updateLoading}
        >
          {updateLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.primaryButtonText}>Update Menu</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
