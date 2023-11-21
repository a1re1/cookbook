<script language="ts">
	import { page } from '$app/stores';
	import RecipeView from '$lib/recipe-view.svelte';
	import Nav from '$lib/nav.svelte';
	import { fetchRecipe } from '$lib/api-client.js';

	$: console.log($page.params.slug);

	let content = '';

	$: fetchRecipe($page.params.slug).then((recipe) => {
		console.log(recipe);
		if (recipe.err) {
			content = "Recipe not found"
		} else {
			content = recipe.name;
		}
	});

	const save = (data) => {
		console.log(data);
	};
</script>

<main>
	<Nav />
	<RecipeView {content} {save} />
</main>

<style lang="postcss">
</style>
