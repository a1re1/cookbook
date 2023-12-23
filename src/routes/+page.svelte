<script lang="ts">
	import ReadOnlyMd from '$lib/read-only-md.svelte';
	import Nav from '$lib/nav.svelte';

	const homePage = `
# The Whitehurst Cookbook
---
### [All Recipes](./category?category=All)
---
### [Search 🔍](./search)
---
### Categories
#### [Desserts](./category?category=Desserts)
#### [Soups](./category?category=Soups)
#### [Salads](./category?category=Salads)
#### [Vegetables](./category?category=Vegetables)
#### [Mains](./category?category=Mains)
#### [Appetizers](./category?category=Appetizers)
#### [Sauces](./category?category=Sauces)
#### [Breads](./category?category=Breads)
---
### [+ New recipe](./new-recipe)
	`;
</script>

<main>
	<Nav />
	<ReadOnlyMd markdown={homePage} />
</main>
