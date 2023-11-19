<script lang="ts">
	import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx } from '@milkdown/core';
	import {
		commonmark
	} from '@milkdown/preset-commonmark';
	import { callCommand } from '@milkdown/utils';
	import { nord } from '@milkdown/theme-nord';
	import { clipboard } from '@milkdown/plugin-clipboard';
	import { cursor } from '@milkdown/plugin-cursor';
	import { history } from '@milkdown/plugin-history';
	import { indent } from '@milkdown/plugin-indent';
	import { listener, listenerCtx } from '@milkdown/plugin-listener';
	import { prism, prismConfig } from '@milkdown/plugin-prism';
	import { trailing } from '@milkdown/plugin-trailing';
	import { upload } from '@milkdown/plugin-upload';
	import Toolbar from '../lib/toolbar.svelte';

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

	let editMode = false;
	const toggleEditMode = (val) => { 
		editMode = val;
		if (!val) {
			console.log(markdown)
		}
	};
	const editable = () => editMode;
	let _editor;

	function editor(dom) {
		Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, dom);
				ctx.set(defaultValueCtx, markdown);
				ctx.update(editorViewOptionsCtx, (prev) => ({
					...prev,
					editable
				}));
				ctx.get(listenerCtx).markdownUpdated((ctx, newMarkdown, prevMarkdown) => {
					markdown = newMarkdown;
				});
			})
			.config(nord)
			.use(commonmark)
			.use(listener)
			.use(clipboard)
			.use(history)
			.use(cursor)
			.use(prism)
			.use(indent)
			.use(upload)
			.use(trailing)
			.create()
			.then((editor) => {
				_editor = editor;
			});
	}
</script>

<main>
	<div class="relative h-full w-full pt-10">
		<div class="absolute top-1 h-10 w-full place-content-center">
			<div class="prose mx-auto flex place-content-center">
				<div use:editor />
				<Toolbar _editable={_editor} toggleEditMode={toggleEditMode} />
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
	:global(.editor) {
		@apply p-10 max-w-screen-md mx-auto;
	}
</style>
