// import { View, Text, StyleSheet } from 'react-native';
// import React from 'react';
// import { Colors } from '../../theme/colors';
//
// type Props = {
//   item: {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//   };
// };
//
// function CartItemRow({ item }: Props) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.price}>
//         {item.quantity} × ₹{item.price} = ₹{item.price * item.quantity}
//       </Text>
//     </View>
//   );
// }
//
// export default React.memo(CartItemRow);
//
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: Colors.lightBackground,
//     borderRadius: 8,
//     marginVertical: 5,
//     elevation: 0,
//   },
//   name: {
//     fontSize: 16,
//     color: Colors.text,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: Colors.text,
//   },
// });

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/src/theme/colors';

type Props = {
  item: {
    name: string;
    price: number;
    quantity: number;
  };
  onAdd?: () => void;
  onRemove?: () => void;
};

export default function CartItemRow({ item, onAdd, onRemove }: Props) {
  return (
    <View style={styles.card}>
      {/* Left Icon */}
      <View style={styles.iconWrapper}>
        <Ionicons name="fast-food-outline" size={22} color={Colors.primary} />
      </View>

      {/* Item Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>
      </View>

      {/* Quantity Controls */}
      <View style={styles.qtyWrapper}>
        <TouchableOpacity style={styles.qtyBtn} onPress={onRemove}>
          <Ionicons name="remove" size={16} color={Colors.primary} />
        </TouchableOpacity>

        <Text style={styles.qtyText}>{item.quantity}</Text>

        <TouchableOpacity style={styles.qtyBtn} onPress={onAdd}>
          <Ionicons name="add" size={16} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    // Android shadow
    elevation: 4,
  },

  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
  },

  price: {
    fontSize: 13,
    marginTop: 4,
    color: Colors.textSecondary,
  },

  qtyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  qtyText: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
});
