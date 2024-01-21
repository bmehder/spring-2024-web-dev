<script>
	export let product
</script>

<div class="card">
	<a href="/shop/{product.id}"
		><img class="square" src={product.thumbnail} alt="product" /></a
	>
	<div class="info">
		<h2>{product.title}</h2>
		<p>{product.description}</p>
	</div>
	<a class="button" href="/shop/{product.id}"> View Product </a>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		padding-block-end: 1.5rem;
		border: 1px solid;
	}

	.info {
		display: grid;
		gap: 0.5rem;
		padding: 1.5rem;
	}

	.button {
		margin-block-start: auto;
		margin-inline: 1.5rem;
	}
</style>
