<script language="ts">
	import { page } from '$app/stores'
	import ReadOnlyMd from "$lib/read-only-md.svelte"
	import Nav from "$lib/nav.svelte"
	let markdown = `
# All Recipes
---
	`;
</script>

<main>
	<Nav/>
	<ReadOnlyMd markdown={markdown}/>
</main>

<style lang="postcss">
</style>
