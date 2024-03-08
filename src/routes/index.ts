import Login from '../components/templates/Login.svelte';
import Registration from '../components/templates/Registration.svelte';
import Redirect from '../components/Redirect.svelte';

export const routes = [
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/', component: Redirect, props: { to: '/login' } },
];
