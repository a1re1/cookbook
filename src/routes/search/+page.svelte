<script language="ts">
	import { page } from '$app/stores';
	import Masonry from 'svelte-bricks';
	import Nav from '$lib/nav.svelte';
	import RecipePreview from '$lib/recipe-preview.svelte';
	import MiniSearch from 'minisearch';

	export let data;

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

	let miniSearch = new MiniSearch({
		fields: ['title', 'content', 'tags'], // fields to index for full-text search
		storeFields: ['title', 'image', 'description', 'tags'] // fields to return with search results
	});
	miniSearch.addAll(searchIdx);

	let searchTerm = '';
	const runSearch = (term) => {
		if (term == '') {
			return;
		}
		items = [];
		let results = miniSearch.search(term, {
			prefix: true,
			boost: { title: 2 }
		}).slice(0, 20);
		for (let i = 0; i < results.length; i++) {
			items.push(results[i]);
		}
	};
	$: runSearch(searchTerm);

	let [minColWidth, maxColWidth, gap] = [200, 800, 20];
</script>

<Nav />
<!-- search box -->
<div class="flex justify-center">
	<input
		type="text"
		placeholder="Search"
		class="border-3 rounded-md p-2 w-1/2"
		bind:value={searchTerm}
	/>
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
