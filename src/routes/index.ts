import Home from '../Home.svelte';
import Register from '../components/templates/Register.svelte';

export const routes = [
    { path: '/', component: Register },
    { path: '/home', component: Home },
  ];
