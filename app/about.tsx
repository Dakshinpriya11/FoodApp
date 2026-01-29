import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../src/redux/store';
import { router } from 'expo-router';
import { logoutUser, loginUser } from '../src/redux/user/user.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { styles } from '../src/styles/AboutScreen.styles';

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
    router.replace('/(auth)/login');
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
