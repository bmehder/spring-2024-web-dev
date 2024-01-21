<script>
	import '$lib/app.css'
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import BackToTop from '$lib/BackToTop.svelte'
</script>

<div class="wrapper">
	<Header />

	<main class="container">
		<slot />
	</main>

	<Footer />
</div>

<BackToTop />

<style>
	.wrapper {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	main {
		width: 100%;
		padding-block: 3rem;
	}
</style>
