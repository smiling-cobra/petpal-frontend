import Login from '../components/templates/Login.svelte';
import Registration from '../components/templates/Registration.svelte';
import Redirect from '../components/Redirect.svelte';
import UserProfile from '../components/templates/UserProfile.svelte';

export const routes = [
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/user-profile', component: UserProfile },
  { path: '/', component: Redirect, props: { to: '/login' } },
];
