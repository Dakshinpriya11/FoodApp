import { Stack } from 'expo-router';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from '../src/redux/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
      screenOptions={{
                headerStyle: { backgroundColor: '#ff6347' },
                headerTintColor: '#ffffff',
              }}
      >
        {/* Show login first */}
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
        />
        {/* After login */}
        <Stack.Screen
          name="about"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="order" />
      </Stack>
    </Provider>
  );
}
