<script lang="ts">
  import { onMount } from 'svelte';
  import { routes } from './routes';
  import { Router, Route, navigate } from 'svelte-routing';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import { useSessionStorage } from './composables/useSessionStorage';

  const queryClient = new QueryClient();
  const { get } = useSessionStorage();

  onMount(() => {
    const isAuthenticated = get('authToken');

    if (!isAuthenticated) {
      navigate('/login');
    }
  });
</script>

<QueryClientProvider client={queryClient}>
  <Router>
    {#each routes as { path, component, props = { } }}
      <Route {path}>
        <svelte:component this={component} {...props} />
      </Route>
    {/each}
  </Router>
</QueryClientProvider>
