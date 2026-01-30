import React, { memo, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addItem, removeItem } from '../redux/cart/cart.actions';
import { RootState } from '../redux/store';
import { FoodItem } from '../data/items';

// Import the static image
const burgerImage = require('../assets/burger.png');

type Props = {
  item: FoodItem & {
    is_available?: boolean; //  coming from backend
  };
};

function FoodCard({ item }: Props) {
  const dispatch = useDispatch();

  const quantity = useSelector(
    (state: RootState) => state.cart.items[item.id]?.quantity || 0,
    shallowEqual
  );

  const isAvailable = item.is_available !== false;

  const isMinusDisabled = useMemo(
    () => quantity === 0 || !isAvailable,
    [quantity, isAvailable]
  );

  const isPlusDisabled = useMemo(
    () => !isAvailable,
    [isAvailable]
  );

  const handleAdd = useCallback(() => {
    if (!isAvailable) return;
    dispatch(addItem(item));
  }, [dispatch, item, isAvailable]);

  const handleRemove = useCallback(() => {
    dispatch(removeItem(item.id));
  }, [dispatch, item.id]);

  return (
    <View style={[styles.card, !isAvailable && styles.disabledCard]}>
      {/* LEFT */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>

        {!isAvailable && (
          <Text style={styles.unavailable}>Unavailable</Text>
        )}

        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.btn, isMinusDisabled && styles.disabledBtn]}
            disabled={isMinusDisabled}
            onPress={handleRemove}
          >
            <Text style={styles.btnText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>{quantity}</Text>

          <TouchableOpacity
            style={[styles.btn, isPlusDisabled && styles.disabledBtn]}
            disabled={isPlusDisabled}
            onPress={handleAdd}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* RIGHT */}
      <Image source={burgerImage} style={styles.image} />
    </View>
  );
}

export default memo(FoodCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    elevation: 4,
  },
  disabledCard: {
    opacity: 0.5,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
  },
  price: {
    marginTop: 4,
    color: '#666',
    fontSize: 15,
  },
  unavailable: {
    marginTop: 6,
    color: '#d32f2f',
    fontSize: 12,
    fontWeight: '600',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#ff6347',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: '#ccc',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qty: {
    marginHorizontal: 12,
    fontSize: 15,
    fontWeight: '500',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginLeft: 10,
    resizeMode: 'cover',
  },
});
