
import React, { useCallback, useMemo } from 'react';
import { View, FlatList, Alert, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addItem, removeItem } from '../redux/cart/cart.actions';
import { navigateToOrder } from '../navigation/navigationUtils';
import { getCartTotal } from '../utils/price.utils';
import CartItemRow from '../components/composite/CartItemRow';
import { styles } from '../styles/CartScreen.styles';

export default function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items || {});
  const items = useMemo(() => Object.values(cart), [cart]);

  const total = useMemo(() => getCartTotal(items), [items]);

  const handleCheckout = useCallback(() => {
    if (items.length === 0) {
      Alert.alert('Cart Empty', 'Please add at least one item to checkout.');
      return;
    }
    navigateToOrder();
  }, [items]);

  const handleAdd = useCallback((item: any) => dispatch(addItem(item)), [dispatch]);
  const handleRemove = useCallback((item: any) => dispatch(removeItem(item.id)), [dispatch]);

  const renderItem = useCallback(
    ({ item }: any) => (
      <CartItemRow item={item} onAdd={() => handleAdd(item)} onRemove={() => handleRemove(item)} />
    ),
    [handleAdd, handleRemove]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={[
          styles.listContent,
          items.length === 0 && styles.emptyList,
        ]}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptySubtitle}>Add items from the menu to get started</Text>
          </View>
        }
      />

      {/* Bottom Summary */}
      <View style={styles.bottomCard}>
        <View style={styles.totalRow}>
          <Text style={styles.totalAmount}>Total</Text>
          <Text style={styles.totalAmount}>₹{total}</Text>
        </View>

        <TouchableOpacity
          style={[styles.checkoutButton, items.length === 0 && styles.checkoutDisabled]}
          activeOpacity={0.85}
          onPress={handleCheckout}
          disabled={items.length === 0}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
