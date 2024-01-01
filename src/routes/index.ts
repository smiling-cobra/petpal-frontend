import Home from '../Home.svelte';
import Login from '../components/templates/Login.svelte';
import Registration from '../components/templates/Registration.svelte';

export const routes = [
    { path: '/login', component: Login },
    { path: '/registration', component: Registration },
    { path: '/', component: Home },
  ];
