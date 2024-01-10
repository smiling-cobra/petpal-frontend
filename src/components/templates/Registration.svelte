<script>
  import { Link } from 'svelte-routing';
  import { post } from '../../services/fetchService';

  let email = '';
  let username = '';
  let password = '';

  /*
  Example response from the server:
    {
    "user": {
        "_id": "659f0f0830d29bc0854a33c3",
        "username": "joe_doe",
        "password": "$2b$10$lICWg3OKLNzHYhcfqz9TOeduaHWu6b6Ou6MY/W5fJaoBGJVkAhBLa",
        "email": "joe.doe@gmail.com",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWYwZjA4MzBkMjliYzA4NTRhMzNjMyIsInVzZXJuYW1lIjoiam9lX2RvZSIsImlhdCI6MTcwNDkyMjg4OSwiZXhwIjoxNzA0OTI2NDg5fQ.pOfdG7m-9Ue80NRJakpYmWCAgLqHwfMWBmd5v_5bxJo"
} 
  */

  const handleRegistration = async () => {
    try {
      const response = await post('register', { email, username, password });

      if (response.ok) {
        console.log('Registration successful');
        // You can redirect to another route or set user session here
      } else {
        console.error('Registration failed:', response.statusText);
        // Handle registration failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle network errors, etc.
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
