<script lang="ts">
    import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core'
    import {
        commonmark,
        toggleEmphasisCommand,
        toggleStrongCommand,
        wrapInBlockquoteCommand,
        wrapInBulletListCommand,
        wrapInHeadingCommand,
        wrapInOrderedListCommand
    } from '@milkdown/preset-commonmark'
    import { callCommand } from "@milkdown/utils";
    import { nord } from '@milkdown/theme-nord'
    import { clipboard } from "@milkdown/plugin-clipboard";
    import { cursor } from "@milkdown/plugin-cursor";
    import { history } from "@milkdown/plugin-history";
    import { indent } from "@milkdown/plugin-indent";
    import { listener, listenerCtx } from "@milkdown/plugin-listener";
    import { prism, prismConfig } from "@milkdown/plugin-prism";
    import { trailing } from "@milkdown/plugin-trailing";
    import { upload } from "@milkdown/plugin-upload";

    const markdown = `# Milkdown Svelte Commonmark`

    let _editor;
    let editBarMode = true;

    function call(cmd) {
        _editor.action(callCommand(cmd));
    }

    function editor(dom) {
        Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, dom)
                ctx.set(defaultValueCtx, markdown)
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
            })
    }

    function bold() {
        call(toggleStrongCommand.key)
    }

    function italics() {
        call(toggleEmphasisCommand.key)
    }

    function bulletList() {
        call(wrapInBulletListCommand.key)
    }

    function numList() {
        call(wrapInOrderedListCommand.key)
    }

    function quote() {
        call(wrapInBlockquoteCommand.key)
    }

    function header(level) {
        _editor.action(callCommand(wrapInHeadingCommand.key, level));
    }

    function headerOne() {
        header(1);
    }

    function headerTwo() {
        header(2);
    }

</script>

<style lang="postcss">
    :global(.editor) {
        @apply p-10 mx-auto;
    }
    button {
        @apply bg-blue-300 border-b-blue-950 rounded p-1 pt-2.5 pl-5 pr-5 mt-1 align-bottom;
    }
    .material-symbols-outlined {
        font-variation-settings:
                 'FILL' 0,
                 'wght' 400,
                 'GRAD' 0,
                 'opsz' 24
    }
</style>

<main>
    <div className="relative h-full pt-10">
        <div className="absolute top-0 h-10 w-full border-b border-nord4 dark:divide-gray-600 dark:border-gray-600">
            <div className="prose mx-auto flex">
                <!--{editBarMode ?-->
                <!--  <div>test</div> :-->
                <!--  <div>other</div>-->
                <!--}-->
                <div style="text-align: center; position: fixed; top:0; right: 0; padding-right: 5px">
                    <button on:click={bold}><span class="material-symbols-outlined">format_bold</span></button>
                    <button on:click={italics}><span class="material-symbols-outlined">format_italic</span></button>
                    <button on:click={bulletList}><span class="material-symbols-outlined">format_list_bulleted</span></button>
                    <button on:click={numList}><span class="material-symbols-outlined">format_list_numbered</span></button>
                    <button on:click={quote}><span class="material-symbols-outlined">format_quote</span></button>
                    <button on:click={headerOne}><span class="material-symbols-outlined">format_h1</span></button>
                    <button on:click={headerTwo}><span class="material-symbols-outlined">format_h2</span></button>
                </div>
           </div>
            <div use:editor></div>
        </div>
    </div>
</main>