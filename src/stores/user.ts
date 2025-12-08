import { writable } from 'svelte/store';
import type { User } from './types';

const createUserStore = () => {
  const { subscribe, set, update } = writable<User | null>(null);

  return {
    subscribe,
    setUser: (userData: User) => set(userData),
    clearUser: () => set(null),
  };
};

export const user = createUserStore();
