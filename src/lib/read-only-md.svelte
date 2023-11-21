<script language="ts">

    export let markdown;

	import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx } from '@milkdown/core';
	import {
		commonmark
	} from '@milkdown/preset-commonmark';
	import { nord } from '@milkdown/theme-nord';
	import { clipboard } from '@milkdown/plugin-clipboard';
	import { cursor } from '@milkdown/plugin-cursor';
	import { history } from '@milkdown/plugin-history';
	import { indent } from '@milkdown/plugin-indent';
	import { listener, listenerCtx } from '@milkdown/plugin-listener';
	import { prism, prismConfig } from '@milkdown/plugin-prism';
	import { trailing } from '@milkdown/plugin-trailing';
	import { upload } from '@milkdown/plugin-upload';

	const editable = () => false;
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
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
	:global(.editor) {
		@apply p-10 max-w-screen-md mx-auto;
	}
</style>
