<script lang="ts">
	import objectImg from '$lib/images/blue-face.png';
	let position = 45;
	let height = 5;
	const moveLeft = () => {
		position -= 1;
	};
	const moveRight = () => {
		position += 1;
	};

	const handleKeydown = (event) => {
		const key = event.key;
		if (key === 'ArrowRight') {
			moveRight();
		}
		if (key === 'ArrowLeft') {
			moveLeft();
		}
	};
	const moveUp = () => {
		height += 0.1;
	};
	const moveDown = () => {
		height -= 0.1;
	};
	const repeat = (fn, times) => {
		for (let i = 0; i < times; i++) {
			setTimeout(() => {
				fn();
			}, 40);
		}
	};

	setInterval(() => {
		repeat(moveUp, 3000);
		repeat(moveDown, 3000);
	}, 1000);
</script>

<svelte:window on:keydown={handleKeydown} />
<img src={objectImg} alt="object" style="{`left:${position}%; bottom:${height}`}px" />
<button on:click={moveLeft}>&lt</button>
<button on:click={moveRight}>&gt</button>

<style>
	img {
		position: absolute;
		width: 90px;
		height: 90px;
	}
</style>
