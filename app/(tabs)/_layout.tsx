import { Tabs, Redirect } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/redux/store';
import LogoutButton from '../../src/components/LogoutButton';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  const { isLoggedIn } = useSelector((s: RootState) => s.user);

  //  Auth guard
  if (!isLoggedIn) return <Redirect href="(auth)/login" />;

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#ff6347' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#ff6347',
        tabBarInactiveTintColor: '#555',
        tabBarShowLabel: true,
        headerRight: () => <LogoutButton />, // ✅ reusable button
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
