<script language="ts">
	import { insert } from '@milkdown/utils';
	import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx } from '@milkdown/core';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { nord } from '@milkdown/theme-nord';
	import { clipboard } from '@milkdown/plugin-clipboard';
	import { cursor } from '@milkdown/plugin-cursor';
	import { history } from '@milkdown/plugin-history';
	import { indent } from '@milkdown/plugin-indent';
	import { listener, listenerCtx } from '@milkdown/plugin-listener';
	import { prism } from '@milkdown/plugin-prism';
	import { trailing } from '@milkdown/plugin-trailing';
	import { emoji } from '@milkdown/plugin-emoji';
	import { upload } from '@milkdown/plugin-upload';
	import Toolbar from './toolbar.svelte';

	export let content;
	export let save;
	export let editMode = false;

	$: if (_editor) s(_editor.action(insert(content)));

	const s = (echo) => {
		window.scrollTo(0, 0);
		return echo;
	}

	let markdown = content;

	const toggleEditMode = (val) => {
		editMode = val;
		if (!val) {
			save(markdown);
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
			.use(emoji)
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
				<Toolbar {_editor} editBarMode={editMode} {toggleEditMode} />
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
	:global(.editor) {
		@apply p-10 max-w-screen-md mx-auto;
	}
</style>
