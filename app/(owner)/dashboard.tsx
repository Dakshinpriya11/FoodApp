import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '@/src/theme/colors';
import { styles } from '@/src/styles/OwnerDashboard.styles';

export default function OwnerDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>

        {/* Menu */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => router.push('/(owner)/menus')}
        >
          <View style={styles.iconWrapper}>
            <Ionicons
              name="restaurant-outline"
              size={26}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.cardTitle}>Menu</Text>
          <Text style={styles.cardDesc}>Create • Edit • Delete</Text>
        </TouchableOpacity>


        {/* Items */}
        <TouchableOpacity style={styles.card} activeOpacity={0.85}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name="fast-food-outline"
              size={26}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.cardTitle}>Items</Text>
          <Text style={styles.cardDesc}>Add • Edit • Manage</Text>
        </TouchableOpacity>

        {/* Staff */}
        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => router.push('/(owner)/staff/add')}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name="people-outline"
              size={26}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.cardTitle}>Staff</Text>
          <Text style={styles.cardDesc}>Add & Manage Staff</Text>
        </TouchableOpacity>

        {/* Orders */}
        <TouchableOpacity style={styles.card} activeOpacity={0.85}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name="receipt-outline"
              size={26}
              color={Colors.primary}
            />
          </View>
          <Text style={styles.cardTitle}>Orders</Text>
          <Text style={styles.cardDesc}>View & Track Orders</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
