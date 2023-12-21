<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import { Router, Route } from 'svelte-routing';
  import { routes } from './routes';

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Router>
    {#each routes as { path, component }}
      <Route {path} {component} />
    {/each}
  </Router>
</QueryClientProvider>
