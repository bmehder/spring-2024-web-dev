<script>
	export let data

	function goBack() {
		history.go(-1)
	}
</script>

<div class="back-to-shop">
	<a href="/shop/" on:click|preventDefault={goBack}>&laquo; Back to Shop</a>
</div>
<div class="product">
	<img src={data.product.images[0]} alt={data.product.title} />
	<div class="flow">
		<h1>{data.product.title}</h1>
		<div class="h2">${data.product.price}</div>
		<p>{data.product.description}</p>
		<div><a href="https://example.com/" class="button" target="_blank">Buy Now</a></div>
	</div>
</div>

<style>
	.back-to-shop {
		margin-block-end: 3rem;
		line-height: 3;
	}

	.product {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 3rem;
	}
</style>
