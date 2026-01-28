import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { RootState } from '../redux/store';
import { navigateToOrder } from '../navigation/navigationUtils';
import { getCartTotal } from '../utils/price.utils';
import CartItemRow from '../components/composite/CartItemRow';
import { styles } from '../styles/CartScreen.styles';

export default function CartScreen() {
  const cart = useSelector((state: RootState) => state.cart.items || {});
  const items = useMemo(() => Object.values(cart), [cart]);

  const total = useMemo(() => getCartTotal(items), [items]);

  const handleCheckout = useCallback(() => {
    navigateToOrder();
  }, []);

  const renderItem = useCallback(
    ({ item }: any) => <CartItemRow item={item} />,
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />

      <Text style={styles.total}>Total: ₹{total}</Text>

      <Text style={styles.checkoutButton} onPress={handleCheckout}>
        Checkout
      </Text>
    </View>
  );
}
