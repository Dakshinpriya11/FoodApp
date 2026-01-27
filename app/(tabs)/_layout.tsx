import { Tabs, Redirect } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../src/redux/store';
import { Ionicons } from '@expo/vector-icons';
import { logoutUser } from '../../src/redux/user/user.actions';

export default function TabsLayout() {
  const { isLoggedIn } = useSelector((s: RootState) => s.user);
  const dispatch = useDispatch();

  // 🔐 Auth guard
  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#ff6347' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#ff6347',
        tabBarInactiveTintColor: '#555',
        headerRight: () => (
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#fff"
            style={{ marginRight: 15 }}
            onPress={() => dispatch(logoutUser())}
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
