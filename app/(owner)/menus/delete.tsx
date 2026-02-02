import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

import { Colors } from '@/src/theme/colors';
import { styles } from '@/src/styles/MenuForm.styles';
import { RootState } from '@/src/redux/store';
import {
  fetchAllMenusRequest,
  deleteMenuRequest,
  resetDeleteMenuState,
} from '@/src/redux/menu/menu.slice';

export default function DeleteMenu() {
  const dispatch = useDispatch();

  const { allMenus, allMenusLoading, deleteLoading, deleteSuccess, deleteError } = useSelector(
    (state: RootState) => state.menu
  );

  useEffect(() => {
    dispatch(fetchAllMenusRequest());
  }, []);

  useEffect(() => {
    if (deleteSuccess) {
      Alert.alert('Success', 'Menu deleted successfully', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetDeleteMenuState());
            router.back(); // go back automatically
          },
        },
      ]);
    }
  }, [deleteSuccess]);

  const handleDelete = (id: string) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this menu?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => dispatch(deleteMenuRequest(id)) },
    ]);
  };

  if (allMenusLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{'Delete Menu'}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* MENU LIST */}
      <FlatList
        data={allMenus}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Ionicons name="trash-outline" size={22} color={Colors.error} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20, color: Colors.textSecondary }}>
            {'No menus found'}
          </Text>
        }
      />

      {deleteLoading && (
        <ActivityIndicator size="small" color={Colors.primary} style={{ marginTop: 10 }} />
      )}

      {deleteError && <Text style={styles.errorText}>{deleteError}</Text>}
    </View>
  );
}
