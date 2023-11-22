<script language="ts">
	import { page } from '$app/stores';
	import RecipeView from '$lib/recipe-view.svelte';
	import Nav from '$lib/nav.svelte';
	import { fetchRecipe } from '$lib/api-client.js';

	let content = '';

	$: fetchRecipe($page.params.slug).then((recipe) => {
		if (recipe.err) {
			content = "Recipe not found"
		} else {
			recipe.content = recipe.content.reduce((acc, curr) => acc + curr, '');
			console.log(recipe.content)
			content = recipe.content;
		}
	});

	const save = (data) => {
	};
</script>

<main>
	<Nav />
	<RecipeView {content} {save} />
</main>

<style lang="postcss">
</style>
