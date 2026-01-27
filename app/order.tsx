import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { clearCart } from '../src/redux/cart/cart.actions';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff6347',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
