<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let type = 'text';
  export let value = '';
  export let placeholder = '';

  const dispatch = createEventDispatcher();

  // Event forwarding
  export let onInput = (event: any) => {
    // Update the value based on input and dispatch it
    value = (event.target as HTMLInputElement).value;
    dispatch('input', value);
  };
</script>

<input
  {type}
  {value}
  {placeholder}
  on:input={onInput}
  class="px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200"
/>
