import { Tabs, Redirect, router } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../src/redux/store';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { loginUser } from '../../src/redux/user/user.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabsLayout() {
  const { isLoggedIn } = useSelector((s: RootState) => s.user);
  const dispatch = useDispatch();

  // 🔐 Auth guard
  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
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
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#ff6347' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#ff6347',
        tabBarInactiveTintColor: '#555',
        tabBarShowLabel: true,
        headerRight: () => (
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#fff"
            style={{ marginRight: 15 }}
            onPress={handleLogout}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
