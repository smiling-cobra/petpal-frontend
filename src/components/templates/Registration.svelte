<script>
  import { Link } from 'svelte-routing';
  import { navigate } from 'svelte-routing';
  import { post } from '../../services/fetchService';
  import { useSessionStorage } from '../../composables/useSessionStorage';

  let email = '';
  let username = '';
  let password = '';

  const { set } = useSessionStorage();

  const handleRegistration = async () => {
    try {
      const result = await post('register', { email, username, password });
      set('authToken', result.token);
      navigate('/user-profile');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
</script>

<form
  on:submit|preventDefault={handleRegistration}
  class="flex flex-col gap-4 p-4 max-w-sm mx-auto"
>
  <input
    type="username"
    bind:value={username}
    placeholder="Your username"
    class="px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200"
  />
  <input
    type="email"
    bind:value={email}
    placeholder="Your email"
    class="px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200"
  />
  <input
    type="password"
    bind:value={password}
    placeholder="Your password"
    class="px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200"
  />
  <button
    type="submit"
    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
  >
    Sign Up
  </button>

  <!-- Link to Login page -->
  <p class="text-center mt-4">
    Already have an account? <Link to="/login" class="text-blue-500">Login</Link>
  </p>
</form>
