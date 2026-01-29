import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { clearCart } from '../src/redux/cart/cart.actions';
import { styles } from '../src/styles/OrderPlacedScreen.styles';

export default function OrderPlacedScreen() {
  const dispatch = useDispatch();

  const goToMenu = () => {
    dispatch(clearCart()); // Clear the cart
    router.replace('/(tabs)'); // Navigate back to menu
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎉 Order Placed!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={goToMenu}
      >
        <Text style={styles.buttonText}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
