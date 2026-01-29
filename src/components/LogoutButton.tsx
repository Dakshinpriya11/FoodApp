import { TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user/user.actions';
import { router } from 'expo-router';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.removeItem('user');
            dispatch(
              loginUser({
                name: '',
                phone: '',
                email: '',
                address: '',
                isLoggedIn: false,
              })
            );
            router.replace('/login');
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
      <Ionicons name="log-out-outline" size={24} color="#fff" />
    </TouchableOpacity>
  );
}
