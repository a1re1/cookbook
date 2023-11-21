<script language="ts">
	import { page } from '$app/stores';
	import Masonry from 'svelte-bricks';
	import ReadOnlyMd from '$lib/read-only-md.svelte';
	import Nav from '$lib/nav.svelte';
	import RecipePreview from '$lib/recipe-preview.svelte';
	let markdown = '# ';
	$: markdown += $page.params.slug + "\n***";

	let nItems = 30;
	$: items = [...Array(nItems).keys()];

	let [minColWidth, maxColWidth, gap] = [200, 800, 20];
</script>

<Nav />
<ReadOnlyMd {markdown} />
<br/>
<div class="itemWrapper">
	<Masonry {items} {minColWidth} {maxColWidth} {gap} let:item>
		<RecipePreview title={"Recipe: " + item} id={"" + item}/>
	</Masonry>
</div>

<style lang="postcss">
	.itemWrapper {
		@apply p-10 max-w-screen-md mx-auto;
	}
</style>
