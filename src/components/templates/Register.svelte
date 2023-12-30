<script>
  let email = '';
  let password = '';

  const handleLogin = async () => {
    // Implement login logic here
    console.log('Login attempt with', email, password);
    // On successful login, redirect to another route or set user session
  };
</script>

<form on:submit|preventDefault={handleLogin} class="flex flex-col gap-4 p-4 max-w-sm mx-auto">
  <input
    type="email"
    bind:value={email}
    placeholder="Email"
    class="px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200"
  />
  <input
    type="password"
    bind:value={password}
    placeholder="Password"
    class="px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200"
  />
  <button
    type="submit"
    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
  >
    Login
  </button>
</form>
