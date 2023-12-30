<script>
	import blue from '$lib/images/blue-cropped.png';
	export let isStarted;
	export let isMuted;

	const toggleMute = () => {
		isMuted = !isMuted;
	};
	const startGame = () => {
		isStarted = true;
	};
	const handleKey = (event) => {
		if (event.key === 'Enter') {
			startGame();
		}
	};
</script>

<svelte:window on:keydown|preventDefault={handleKey} />
<div>
	<img src={blue} alt="dog staring" />
	<p>Please bring me for a walk...</p>
	<button on:click={toggleMute}>
		{#if isMuted}
			<i class="fas fa-volume-mute"></i> <!-- Mute icon -->
		{:else}
			<i class="fas fa-volume-up"></i> <!-- Audio icon -->
		{/if}
	</button>
	<button class="start-button" on:click={startGame}>Start the game</button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.start-button {
		margin: 10px;
		width: fit-content;
		background-color: burlywood;
		padding: 5px;
	}
	.start-button:hover {
		background-color: blue;
		color: white;
		cursor: pointer;
		transform: scale(1.1);
	}
	p {
		text-decoration: underline blue 2px;
	}
	img {
		margin-right: auto;
		margin-left: auto;
		width: 300px;
		height: 400px;
		border-radius: 50%;
		transform: rotate(40deg);
		animation: rotateAnimation 6s linear infinite;
	}

	@keyframes rotateAnimation {
		0%,
		100% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(90deg);
		}
	}
</style>
