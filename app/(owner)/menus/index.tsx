import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { Colors } from '@/src/theme/colors';
import { styles } from '@/src/styles/MenuIndex.styles';

export default function MenuIndex() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menus</Text>
      </View>

      {/* Cards */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => router.push('/(owner)/menus/create')}
      >
        <View style={styles.cardIcon}>
          <Ionicons name="add-circle-outline" size={24} color={Colors.primary} />
        </View>
        <View>
          <Text style={styles.cardTitle}>Create Menu</Text>
          <Text style={styles.cardDesc}>Add a new menu for your restaurant</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => router.push('/(owner)/menus/update')}
      >
        <View style={styles.cardIcon}>
          <Ionicons name="create-outline" size={24} color={Colors.primary} />
        </View>
        <View>
          <Text style={styles.cardTitle}>Update Menu</Text>
          <Text style={styles.cardDesc}>Edit menu details</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.dangerCard]}
        activeOpacity={0.85}
        onPress={() => router.push('/(owner)/menus/delete')}
      >
        <View style={styles.cardIcon}>
          <Ionicons name="trash-outline" size={24} color={Colors.error} />
        </View>
        <View>
          <Text style={styles.cardTitle}>Delete Menu</Text>
          <Text style={styles.cardDesc}>Permanently remove a menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
