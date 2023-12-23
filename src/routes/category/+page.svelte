<script language="ts">
	import { page } from '$app/stores';
	import Masonry from 'svelte-bricks';
	import Nav from '$lib/nav.svelte';
	import RecipePreview from '$lib/recipe-preview.svelte';
	import MiniSearch from 'minisearch';
	import { onMount } from 'svelte';

	export let data;

	let category = '';
	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		category = params.get('category');
	});

	const search = (cat) => {
		console.log('searching for: ', cat)
		if (cat == null) {
			return;
		}
		items = []
		if (cat == 'All') {
			searchIdx.forEach((item) => items.push(item));
		} else {
			let miniSearch = new MiniSearch({
				fields: ['title', 'content', 'tags'], // fields to index for full-text search
				storeFields: ['title', 'image', 'description', 'tags'] // fields to return with search results
			});
			miniSearch.addAll(searchIdx);
			let results = miniSearch.search(cat, {
				prefix: true,
				boost: { title: 2 }
			});
			results.forEach((item) => {
				items.push(item);
			});
		}
	};

	$: if (category) search(category);

	let markdown = '***';

	let items = [];
	let searchIdx = [];
	data.idx.forEach((element) => {
		if (element == null || element.length == 0) return;
		try {
			let recipeJson = JSON.parse(element);
			if (!recipeJson.content) {
				return;
			}
			searchIdx.push(recipeJson);
		} catch (error) {
			console.log('Error parsing JSON: ', element);
			console.log(element, error);
		}
	});

	let [minColWidth, maxColWidth, gap] = [200, 800, 20];
</script>

<Nav />
<!-- centered title div -->
<div class="flex justify-center">
	<h1 class="text-4xlc">{category}</h1>
</div>
<br />
<div class="itemWrapper">
	<Masonry {items} {minColWidth} {maxColWidth} {gap} let:item>
		<RecipePreview
			title={item.title}
			id={item.id}
			image={item.image}
			description={item.description}
		/>
	</Masonry>
</div>

<style lang="postcss">
	.itemWrapper {
		@apply p-10 max-w-screen-md mx-auto;
	}
</style>
