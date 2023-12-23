<script language="ts">
	import { page } from '$app/stores';
	import RecipeView from '$lib/recipe-view.svelte';
	import Nav from '$lib/nav.svelte';
	import { saveRecipe } from '$lib/api-client.js';
	import { fetchRecipe } from '$lib/api-client.js';
	import { onMount } from 'svelte';

	export let data;

	let content = '';
	let id;

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		id = params.get('id');
	});

	$: id != null ? fetchRecipe(fetch, id).then((recipe) => {
		console.log(recipe);
		if (recipe.err) {
			content = "# Add your recipe here!"
		} else {
			content = recipe.content;
		}
	}) : null;

	let editMode = false;

	const save = (content) => {
		let body = {
			id: id,
			title: null,
			image: null,
			description: null,
			tags: [],
			content: content
		};
		try {
			// split on newline and take first line that starts with # as title
			let title = content
				.split('\n')
				.find((line) => line.startsWith('#'))
				.replace('#', '')
				.trim();
			console.log('Title: ', title);

			// regex match first markdown image in string
			let firstImage = content.match(/!\[.*\]\((.*)\)/);
			// get the first group of the regex match
			firstImage = firstImage ? firstImage[1].replace('\\', '') : null;
			console.log('Image: ', firstImage);

			// extract a short description from the first paragraph
			let description = content
				.split('\n')
				.find(
					(line) =>
						line.trim().length > 0 && !line.trim().startsWith('#') && !line.trim().startsWith('!')
				)
				.substr(0, 50);
			console.log('Desc: ', description);

			body.title = title;
			body.image = firstImage;
			body.description = description;
		} catch (error) {
			console.error('Error parsing JSON: ', content);
			console.error(content, error);
		}
		saveRecipe(fetch, id, body);
	};
</script>

<main>
	<Nav />
	<RecipeView {content} {save} {editMode} />
</main>

<style lang="postcss">
</style>
