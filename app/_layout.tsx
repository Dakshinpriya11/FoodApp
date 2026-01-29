import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import LogoutButton from '../src/components/LogoutButton';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#ff6347' },
          headerTintColor: '#ffffff',
        }}
      >
        {/* LOGIN */}
        <Stack.Screen name="login" options={{ headerShown: false }} />

        {/* STATIC SCREENS */}
        <Stack.Screen name="about" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="order" />

        {/* STAFF DASHBOARD */}
        <Stack.Screen
          name="(staff)"
          options={{
            title: 'Staff Dashboard',
            headerBackVisible: false,
            headerRight: () => <LogoutButton />,
          }}
        />

        {/* OWNER DASHBOARD */}
        <Stack.Screen
          name="(owner)"
          options={{
            title: 'Owner Dashboard',
            headerBackVisible: false,
            headerRight: () => <LogoutButton />,
          }}
        />
      </Stack>
    </Provider>
  );
}
