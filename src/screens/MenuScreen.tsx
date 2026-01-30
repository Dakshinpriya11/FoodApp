import { useEffect } from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FoodCard from '../components/FoodCard';
import { fetchMenuRequest } from '../redux/menu/menu.slice';
import { RootState } from '../redux/store';
import { styles } from '../styles/MenuScreen.styles';
import { Colors } from '../theme/colors';

export default function MenuScreen() {
  const dispatch = useDispatch();

  // Get menu state from Redux
  const { data: menu, loading, error } = useSelector(
    (state: RootState) => state.menu
  );

  // Fetch menu on mount (example: DELIVERY order type)
  useEffect(() => {
    dispatch(fetchMenuRequest('DINE_IN'));
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FoodCard item={item} />}
      contentContainerStyle={styles.listContent}
    />
  );
}
