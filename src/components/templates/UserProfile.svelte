<script>
  import { Link, navigate } from 'svelte-routing';

  let name = '';
  let email = '';
  let profilePicture = '/default-profile.png'; // Path to a default profile picture

  const handleLogout = () => {
    // Remove the token from the session storage
    sessionStorage.removeItem('authToken');
    // Redirect to the login page
    navigate('/login');
  };
</script>

<div class="flex flex-col items-center gap-4 p-4 max-w-sm mx-auto">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img src={profilePicture} class="w-24 h-24 rounded-full border border-gray-300" />
  <div class="text-center">
    <h1 class="text-xl font-semibold">{name}</h1>
    <p class="text-gray-500">{email}</p>
  </div>
  <div class="flex flex-col gap-4 w-full">
    <Link
      to="/edit-profile"
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 text-center"
    >
      Edit Profile
    </Link>
    <Link
      to="/"
      class="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 text-center"
    >
      Home
    </Link>
    <button
      on:click={handleLogout}
      class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 transition duration-200"
    >
      Log Out
    </button>
  </div>
</div>
