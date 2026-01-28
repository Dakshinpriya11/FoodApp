import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import FoodCard from '../components/FoodCard';
import { useMenu } from '../hooks/useMenu';
import { styles } from '../styles/MenuScreen.styles';
import { Colors } from '../theme/colors';

export default function MenuScreen() {
  const { menu, loading, error } = useMenu();

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
