import { createQuery } from '@tanstack/svelte-query';
import { post } from '../services/fetch';
import type { UserLoginPayload, UserRegisterPayload } from './types';

export const useUserRegister = (payload: UserRegisterPayload) => {
  return createQuery({
    queryKey: ['userRegister'],
    queryFn: () => post('/api/register', payload),
  });
};

export const useUserLogin = (payload: UserLoginPayload) => {
  return createQuery({
    queryKey: ['userLogin'],
    queryFn: () => post('/api/login', payload),
  });
};
