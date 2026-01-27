import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../src/redux/store';
import { router } from 'expo-router';
import { logoutUser, loginUser } from '../src/redux/user/user.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function AboutScreen() {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state: RootState) => state.user);
  const [user, setUser] = useState(reduxUser);

  useEffect(() => {
    const fetchUser = async () => {
      if (!reduxUser.name) {
        const stored = await AsyncStorage.getItem('user');
        if (stored) {
          const parsed = JSON.parse(stored);
          setUser(parsed);

          // Update Redux with stored user
          dispatch(
            loginUser({
              name: parsed.name,
              phone: parsed.phone,
              email: parsed.email,
              address: parsed.address,
              isLoggedIn: true,
            })
          );
        }
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.replace('/login');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1564865871362-82b2a9a23497?fit=crop&w=800&q=80',
      }}
      style={styles.bg}
    >
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.overlay}>
        <Text style={styles.welcome}>Welcome, {user.name}!</Text>
        <Text style={styles.info}>Discover our delicious menu</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>View Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 99, 71, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ff6347',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logout: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#ff6347',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
