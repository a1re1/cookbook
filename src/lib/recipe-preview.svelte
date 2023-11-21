<script>
	export let title = 'Recipe Title';
	export let description = 'Recipe Description';
	export let author = 'Recipe Author';
	export let date = 'Recipe Date';
	export let id = 'Recipe ID';
	export let image;

	function chooseVector() {
		const vectors = ['restaurant', 'restaurant_menu', 'lunch_dining', 'cake', 'icecream'];
		const index = Math.floor(Math.random() * vectors.length);
		return vectors[index];
	}
	function chooseColor() {
		const colors = ['#457B9D', '#1D3557', '#2A9D8F', '#E76F51', '#6A040F'];
		const index = Math.floor(Math.random() * colors.length);
		return colors[index];
	}
	const fallbackVector = chooseVector();
	const fallbackColor = chooseColor();
</script>

<div>
	<a href={'/recipe/' + id}>
		{#if image != null && image.length > 0}
			<img src={image} alt="preview" />
		{:else}
			<div class="image" style={'background:' + fallbackColor}>
				<span class="material-symbols-outlined">{fallbackVector}</span>
			</div>
		{/if}
	</a>
	<h3><a href={'/recipe/' + id}>{title}</a></h3>
	<p>{description}</p>
</div>

<style lang="postcss">
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
		font-size: 120px;
		color: white;
	}
	.image {
		@apply text-center;
	}
</style>
