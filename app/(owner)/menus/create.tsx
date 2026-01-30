import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

import { Colors } from '@/src/theme/colors';
import { styles } from '@/src/styles/MenuForm.styles';
import { RootState } from '@/src/redux/store';
import { createMenuRequest, resetCreateMenuState } from '@/src/redux/menu/menu.slice';

export default function CreateMenu() {
  const dispatch = useDispatch();

  // Form state
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Redux state
  const { createLoading, createError, createSuccess } = useSelector(
    (state: RootState) => state.menu
  );

  // Handle success
  useEffect(() => {
    if (createSuccess) {
      Alert.alert('Success', 'Menu created successfully', [
        { text: 'OK', onPress: () => router.back() },
      ]);
  console.log('Creating menu with payload:', { name, start_time: startTime, end_time: endTime });

      dispatch(resetCreateMenuState());
      setName('');
      setStartTime('');
      setEndTime('');
    }
  }, [createSuccess]);

  // Handle submit
  const handleCreateMenu = () => {
    if (!name || !startTime || !endTime) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    dispatch(
      createMenuRequest({
        name,
        start_time: startTime,
        end_time: endTime,
      })
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Menu</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Menu Name</Text>
        <TextInput
          placeholder="Eg. Breakfast Menu"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Start Time</Text>
        <TextInput
          placeholder="HH:mm (Eg. 08:00)"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          value={startTime}
          onChangeText={setStartTime}
        />

        <Text style={styles.label}>End Time</Text>
        <TextInput
          placeholder="HH:mm (Eg. 10:00)"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          value={endTime}
          onChangeText={setEndTime}
        />

        {createError ? <Text style={styles.errorText}>{createError}</Text> : null}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleCreateMenu}
          disabled={createLoading}
        >
          {createLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.primaryButtonText}>Create Menu</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
