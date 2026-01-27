import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { loginUser } from '../redux/user/user.actions';

export const confirmLogout = (dispatch: any) => {
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
