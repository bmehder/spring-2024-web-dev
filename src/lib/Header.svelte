<script>
	import Logo from '$lib/Logo.svelte'
</script>

<header>
	<div class="container">
		<div class="logo">
			<a href="/">
				<Logo />
			</a>
		</div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/shop">Shop</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		padding-block: 1.5rem;
		background-color: tomato;
		color: white;
		font-size: 1.2rem;
	}
	
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;	
	}

	.logo {
		max-width: 16rem;
		line-height: 0;
	}
	
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		list-style: none;
	}
	
	a {
		color: white;
	}
</style>