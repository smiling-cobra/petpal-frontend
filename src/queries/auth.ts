import { createQuery } from '@tanstack/svelte-query';
import { post } from '../services/fetchService';

export const useUserRegister = (payload: any) => {
    return createQuery({ queryKey: ['userRegister'], queryFn: () => post('/api/register', payload) });
};