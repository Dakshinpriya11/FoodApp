
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { Colors } from '@/src/theme/colors';
import { styles } from '@/src/styles/MenuForm.styles';

export default function UpdateMenu() {
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
        <Text style={styles.label}>Menu ID / Name</Text>
        <TextInput
          placeholder="Eg. Breakfast Menu"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
        />

        <Text style={styles.label}>Updated Menu Name</Text>
        <TextInput
          placeholder="Eg. Morning Specials"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
        />

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Update Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
