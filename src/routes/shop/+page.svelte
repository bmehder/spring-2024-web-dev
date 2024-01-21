<script>
	import Card from '$lib/Card.svelte'

	export let data
</script>

<h1>Shop</h1>

<div>
	{#each data.products as product}
		<Card {product} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 3rem;
		padding-block: 3rem;
	}
</style>
