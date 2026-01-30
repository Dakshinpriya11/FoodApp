import { View, Text, FlatList, Switch, ActivityIndicator } from 'react-native';
import { useEffect, useState, useCallback, memo } from 'react';

import { fetchCustomerMenu } from '@/src/api/menu.api';
import { changeAvailability } from '@/src/api/changeAvailability.api';
import { staffDashboardStyles as styles } from '@/src/styles/staffDashboard.styles';

type MenuItem = {
  id: number;
  name: string;
  price: number;
  is_available: boolean;
};

// Memoized item component with per-item loading
const MenuCard = memo(
  ({
    item,
    onToggle,
    loading,
  }: {
    item: MenuItem;
    onToggle: (id: number, value: boolean) => void;
    loading: boolean;
  }) => {
    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Switch
            value={item.is_available}
            onValueChange={(value) => onToggle(item.id, value)}
          />
        )}
      </View>
    );
  },
  (prevProps, nextProps) =>
    prevProps.item.is_available === nextProps.item.is_available &&
    prevProps.loading === nextProps.loading
);

export default function StaffDashboard() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingItems, setLoadingItems] = useState<{ [key: number]: boolean }>({});

  const loadMenu = async () => {
    try {
      const data = await fetchCustomerMenu('DINE_IN');
      setItems(data);
    } catch (err) {
      console.error('Failed to load items', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMenu();
  }, []);

  // Optimistic toggle with per-item loading
  const toggleAvailability = useCallback(async (itemId: number, value: boolean) => {
    // Optimistically update UI
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, is_available: value } : item
      )
    );

    // Set per-item loading
    setLoadingItems(prev => ({ ...prev, [itemId]: true }));

    try {
      await changeAvailability(itemId, value);
    } catch (err) {
      console.error('Failed to update availability', err);
      // Revert UI on failure
      setItems(prev =>
        prev.map(item =>
          item.id === itemId ? { ...item, is_available: !value } : item
        )
      );
    } finally {
      setLoadingItems(prev => ({ ...prev, [itemId]: false }));
    }
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Loading menu...</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MenuCard
          item={item}
          onToggle={toggleAvailability}
          loading={!!loadingItems[item.id]}
        />
      )}
      contentContainerStyle={styles.container}
      extraData={loadingItems} // ensures only changed items re-render
    />
  );
}
