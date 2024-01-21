<script>
	import { fade } from 'svelte/transition'

	export let threshold = 1000

  let scrollY
  
  const chevronUp = '&#8963;' // HTML Entity

	function scrollToTop() {
    window.scrollTo(0, 0)
  }
</script>

<svelte:window bind:scrollY />

{#if scrollY > threshold}
	<button transition:fade on:click={scrollToTop}>
    {@html chevronUp}
	</button>
{/if}

<style>
	button {
    all: unset;
		position: fixed;
		right: 2rem;
		bottom: 2rem;
    font-size: 2rem;
		transition: scale 150ms;
	}

	button:hover {
		scale: 0.9;
	}
</style>
