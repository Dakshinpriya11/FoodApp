import { useEffect, useState, useCallback } from 'react';
import { fetchCustomerMenu } from '../api/menu.api';

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  is_available: boolean;
};

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMenu = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchCustomerMenu('DINE_IN');
      setMenu(data);
    } catch (err) {
      console.error(err);
      setError('Unable to load menu');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return { menu, loading, error };
};
