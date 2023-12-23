<script>
	function goBack() {
		window.history.back();
	}

	function goHome() {
		window.location.href = '/cookbook/';
	}
</script>

<div class="nav" style="width:100%; display:flex justify-content:space-between">
	<button on:click={goBack} style="">
		<span class="material-symbols-outlined">undo</span>
	</button>
	<button on:click={goHome} style="position:absolute; right:0">
		<span class="material-symbols-outlined">home</span>
	</button>
</div>

<style lang="postcss">
	button {
		@apply text-lg p-0 pt-1 pl-1 pr-1 mb-1 align-bottom;
	}
	.material-symbols-outlined {
		font-size: 32px;
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
	}
</style>
