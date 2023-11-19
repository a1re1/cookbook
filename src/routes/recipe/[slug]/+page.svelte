<script language="ts">
	import { page } from '$app/stores'
	import RecipeView from "../../../lib/recipe-view.svelte";

	$: console.log($page.params.slug);

	let markdown = `
![cranberry-walnut-pie](https://storage.googleapis.com/download/storage/v1/b/whitehurst_cookbook/o/d713cd98-28b0-4684-957b-be8e61af9ded?generation=1669441437567714&amp;alt=media)
# Cranberry Walnut Pie
### Desserts
> Recipe by: Bon Appetite 1996
---
## Ingredients:
- 3/4 cup packed light brown sugar
- 2 large eggs
- 3/4 cup pure maple syrup
- 2 tablespoons unsalted butter, melted
- 1 teaspoon vanilla extract
- 1/4 teaspoon salt
- 2 cups walnuts -- coarsely chopped
- 1 1/2 cups fresh cranberries
- 1 pie crust  
---

## Directions:
- Position rack in bottom 1/3 of oven and preheat to 350. 
- Butter a 9 inch glass pie dish. 
- Place pie dough in dish and crimp edge. 
- Freeze 15 minutes. 
- Beat sugar and eggs in a large bowl to blend. 
- Whisk in maple syrup, butter, vanilla and salt. 
- Stir in cranberries. 
- Heat in large pot on stove on medium heat until cranberries start to burst (about 10-15 minutes). 
- Add walnuts and cook for another 2 minutes. 
- Pour into prepared crust. 
- Bake pie 45 minutes until filling is set. 
- Transfer pie to rack; cool completely. (Can be prepared 8 hours ahead. Let stand at room temperature.)
- Serve with whipped cream.
	`;

const save = (data) => {
	console.log(data);
};

</script>

<main>
	<RecipeView markdown={markdown} save={save}/>
</main>

<style lang="postcss">
</style>
