import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/colors';

type Props = {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
};

function CartItemRow({ item }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>
        {item.quantity} × ₹{item.price} = ₹{item.price * item.quantity}
      </Text>
    </View>
  );
}

export default React.memo(CartItemRow);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.lightBackground,
    borderRadius: 8,
    marginVertical: 5,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    color: Colors.text,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
});
