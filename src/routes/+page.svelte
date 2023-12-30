<script>
	import Opening from '$lib/components/Opening.svelte';
	import Window from '$lib/components/Window.svelte';
	let score = 0;
	let toggled = false;
	let isStarted = false;
	let isMuted = false;
</script>

<svelte:head>
	<title>Blue Jump</title>
</svelte:head>
<h1>Blue Jump</h1>
{#if !isStarted}
	<Opening bind:isMuted bind:isStarted />
{:else}
	<p>Score: {score}</p>
	{#key toggled}
		<Window bind:score bind:toggled {isMuted} />
	{/key}
{/if}

<style>
	h1 {
		text-align: center;
		font-size: 3rem;
		font-family: fantasy;
	}
	p {
		background-color: rgb(18, 167, 18);
		padding: 5px;
		font-size: large;
		color: white;
		width: 150px;

		text-align: center;
	}
</style>
