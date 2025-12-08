<script lang="ts">
  import { Link } from 'svelte-routing';
  import { navigate } from 'svelte-routing';
  import { post } from '../../services/fetch';
  import { useSessionStorage } from '../../composables/useSessionStorage';
  import { user } from '../../stores/user';
  import Input from '../atoms/Input.svelte';

  let email = '';
  let password = '';

  const { set } = useSessionStorage();

  const handleLogin = async () => {
    try {
      const result = await post('login', { email, password });
      user.setUser(result.user);
      set('authToken', result.token);
      navigate('/user-profile');
    } catch (e) {
      console.error('Error during login:', e);
    }
  };

  // Handling input changes
  const handleInput = (event: any, variable: string) => {
    let value = event.detail;

    if (variable === 'email') email = value;
    if (variable === 'password') password = value;
  };
</script>

<form on:submit|preventDefault={handleLogin} class="flex flex-col gap-4 p-4 max-w-sm mx-auto">
  <Input
    type="email"
    bind:value={email}
    placeholder="Your email"
    on:input={(event) => handleInput(event, 'email')}
  />
  <Input
    type="password"
    bind:value={password}
    placeholder="Your password"
    on:input={(event) => handleInput(event, 'password')}
  />
  <button
    type="submit"
    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
  >
    Login
  </button>

  <!-- Link to Registration page -->
  <p class="text-center mt-4">
    Don't have an account? <Link to="/registration" class="text-blue-500">Register</Link>
  </p>
</form>
