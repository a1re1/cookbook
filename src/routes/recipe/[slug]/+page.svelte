<script language="ts">
	import { page } from '$app/stores';
	import RecipeView from '$lib/recipe-view.svelte';
	import Nav from '$lib/nav.svelte';
	import { saveRecipe } from '$lib/api-client.js';

	export let data;
	const recipe = data.recipeResponse;
	console.log(recipe)
	let content = recipe.content
		? recipe.content.reduce 
			? recipe.content.reduce((acc, curr) => acc + curr, '') 
			: recipe.content
		: "Recipe not found";

	const save = (content) => {
		saveRecipe(fetch, data.id, 
			{
				id: data.id,
				content: content,
			}
		);
	};
</script>

<main>
	<Nav />
	<RecipeView {content} {save} />
</main>

<style lang="postcss">
</style>
