import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import FoodCard from '../../src/components/FoodCard';
import { fetchCustomerMenu } from '../../src/api/menu.api';

type MenuItem = {
  id: number;
  name: string;
  price: number;
  is_available: boolean;
};

export default function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setLoading(true);

      // ✅ USE API LAYER
      const data = await fetchCustomerMenu('DINE_IN');
      setMenu(data);

    } catch (err) {
      console.error(err);
      setError('Unable to load menu');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#ff6347" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FoodCard item={item} />}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}
