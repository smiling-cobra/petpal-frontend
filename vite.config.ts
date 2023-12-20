import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // This change ensures that when the Vite server runs inside the Docker container,
  // it listens on all network interfaces,
  // allowing you to access it from your host machine at http://localhost:5173
  server: {
    host: '0.0.0.0',
  },
});
