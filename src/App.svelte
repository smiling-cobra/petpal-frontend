<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import { Router, Route, navigate } from 'svelte-routing';
  import { routes } from './routes';
  import { onMount } from 'svelte';
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
