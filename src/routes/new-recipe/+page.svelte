<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// redirect to recipe page with random id
		window.location.replace('/recipe/' + Math.random().toString(36).substring(2, 15));
	});
</script>
