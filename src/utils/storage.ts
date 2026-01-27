import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'APP_USER';

// Save a new user (during registration)
export const saveUser = async (user: {
  name: string;
  phone: string;
  email?: string;
  address: string;
  password: string;
}) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.error('Error saving user', e);
  }
};

// Get user from storage
export const getUser = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error getting user', e);
    return null;
  }
};

// Update user profile (excluding password)
export const updateUserProfile = async (profile: {
  name: string;
  phone: string;
  email?: string;
  address: string;
}) => {
  try {
    const user = await getUser();
    if (!user) return;

    const updated = { ...user, ...profile };
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error updating profile', e);
  }
};

// Change password
export const changeUserPassword = async (current: string, newPassword: string) => {
  try {
    const user = await getUser();
    if (!user) return false;

    if (user.password !== current) {
      return false; // current password does not match
    }

    const updated = { ...user, password: newPassword };
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(updated));
    return true;
  } catch (e) {
    console.error('Error changing password', e);
    return false;
  }
};
