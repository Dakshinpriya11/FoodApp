import { FlatList } from 'react-native';
import FoodCard from '../../src/components/FoodCard';
import { items } from '../../src/data/items';

export default function Home() {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FoodCard item={item} />}
    />
  );
}

