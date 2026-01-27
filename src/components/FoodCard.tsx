import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cart/cart.actions';
import { RootState } from '../redux/store';
import { FoodItem } from '../data/items';

type Props = {
  item: FoodItem;
};

export default function FoodCard({ item }: Props) {
  const dispatch = useDispatch();

  // ✅ FIX: access cart items safely
  const quantity =
    useSelector(
      (state: RootState) => state.cart.items[item.id]?.quantity || 0
    );

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.btn, quantity === 0 && styles.disabled]}
          disabled={quantity === 0}
          onPress={() => dispatch(removeItem(item.id))}
        >
          <Text style={styles.btnText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.qty}>{quantity}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(addItem(item))}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ✅ styles stay EXACTLY the same */
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { marginVertical: 5, color: '#555' },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#ff6347',
    width: 35,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  btnText: { color: '#fff', fontSize: 20 },
  qty: { marginHorizontal: 15, fontSize: 16 },
});
