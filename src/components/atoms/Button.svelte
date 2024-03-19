<script lang="ts">
  export let text = '';
  export let type = 'button' as 'button' | 'submit' | 'reset';
</script>

<button
  {type}
  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
>
  {text}
</button>
