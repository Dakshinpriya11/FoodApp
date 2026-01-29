// Validation helper functions
export const validateName = (name: string) => {
  if (!name) return '';
  return /^[A-Za-z0-9\s]+$/.test(name)
    ? ''
    : 'Only letters and numbers allowed';
};

export const validatePhone = (phone: string) => {
  if (!phone) return '';
  return /^\d{10}$/.test(phone) ? '' : 'Phone must be 10 digits';
};

export const validateEmail = (email: string) => {
  if (!email) return '';
  return /^\S+@\S+\.\S+$/.test(email) ? '' : 'Enter a valid email';
};

export const validateAddress = (address: string) => {
  if (!address) return '';
  return address.length >= 5 ? '' : 'Address is too short';
};
