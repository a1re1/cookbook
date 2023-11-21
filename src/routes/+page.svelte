<script lang="ts">
	import ReadOnlyMd from "$lib/read-only-md.svelte"
	import Nav from "$lib/nav.svelte"

	const homePage = `
# The Whitehurst Cookbook
---
### [All Recipes](./all-recipes)
---
### Categories
- [Desserts](./category/Desserts)
- [Soups](./category/Soups)
- [Salads](./category/Salads)
- [Vegetables](./category/Vegetables)
- [Mains](./category/Mains)
- [Appetizers](./category/Appetizers)
- [Sauces](./category/Sauces)
- [Breads](./category/Breads)
	`
</script>

<main>
	<Nav/>
	<ReadOnlyMd markdown={homePage} />
</main>