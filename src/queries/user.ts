import { createQuery } from '@tanstack/svelte-query';
import { get } from '../services/fetch';

export const useUserProfile = (token: string) => {
  return createQuery({
    queryKey: ['userProfile'],
    queryFn: () => get(`users/me`, { authorization: `Bearer ${token}` }),
    enabled: !!token,
    staleTime: Infinity,
    retry: 1,
  });
};
