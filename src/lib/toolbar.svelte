<script>
	// @ts-ignore
	export let _editor;
    export let toggleEditMode = (val) => {};
	import { callCommand } from '@milkdown/utils';
	import {
		toggleEmphasisCommand,
		toggleStrongCommand,
		wrapInBlockquoteCommand,
		wrapInBulletListCommand,
		wrapInHeadingCommand,
		wrapInOrderedListCommand
	} from '@milkdown/preset-commonmark';

	// @ts-ignore
	const editable = () => editBarMode;

    let editBarMode = false;
	function toggleEditBar() {
		editBarMode = !editBarMode;
        toggleEditMode(editBarMode);
	}

	// @ts-ignore
	function call(cmd) {
		// @ts-ignore
		_editor.action(callCommand(cmd));
	}

	function bold() {
		call(toggleStrongCommand.key);
	}

	function italics() {
		call(toggleEmphasisCommand.key);
	}

	function bulletList() {
		call(wrapInBulletListCommand.key);
	}

	function numList() {
		call(wrapInOrderedListCommand.key);
	}

	function quote() {
		call(wrapInBlockquoteCommand.key);
	}

	// @ts-ignore
	function header(level) {
		// @ts-ignore
		_editor.action(callCommand(wrapInHeadingCommand.key, level));
	}

	function headerOne() {
		header(1);
	}

	function headerTwo() {
		header(2);
	}
</script>

<div style="text-align: center; position: fixed; bottom:0; right: 0; padding-right: 5px">
	{#if editBarMode}
		<button on:click={bold}><span class="material-symbols-outlined">format_bold</span></button>
		<button on:click={italics}><span class="material-symbols-outlined">format_italic</span></button>
		<button on:click={bulletList}
			><span class="material-symbols-outlined">format_list_bulleted</span></button
		>
		<button on:click={numList}
			><span class="material-symbols-outlined">format_list_numbered</span></button
		>
		<button on:click={quote}><span class="material-symbols-outlined">format_quote</span></button>
		<button on:click={headerOne}><span class="material-symbols-outlined">format_h1</span></button>
		<button on:click={headerTwo}><span class="material-symbols-outlined">format_h2</span></button>
		<button on:click={toggleEditBar}
			><span class="material-symbols-outlined"> check_circle </span></button
		>
	{:else}
		<button on:click={toggleEditBar}
			><span class="material-symbols-outlined"> edit_note </span></button
		>
	{/if}
</div>

<style lang="postcss">
	button {
		@apply bg-blue-300 border-b-blue-950 rounded text-sm p-0 pt-1 pl-1 pr-1 mb-1 align-bottom;
	}
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
	}
</style>
