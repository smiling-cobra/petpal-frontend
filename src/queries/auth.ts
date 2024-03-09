import { createQuery } from '@tanstack/svelte-query';
import { post } from '../services/fetchService';

interface UserRegisterPayload {
  username: string;
  email: string;
  password: string;
}

interface UserLoginPayload {
  email: string;
  password: string;
}

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
