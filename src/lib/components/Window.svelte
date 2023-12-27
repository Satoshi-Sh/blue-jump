<script lang="ts">
	import { onMount } from 'svelte';
	import blueFace from '$lib/images/blueFace.png';
	let canvasElement: HTMLCanvasElement;
	let boardWidth = 700;
	let boardHeight = 900;
	let ctx;

	// doodler
	let doodlerWidth = 90;
	let doodlerHeight = 90;
	let doodlerX = boardWidth / 2 + doodlerWidth / 2;
	let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;
	let doodlerImg;

	//physics
	let velocityX = 0;

	const handleKey = (event) => {
		if (event.key === 'ArrowLeft') {
			velocityX -= 4;
		}
		if (event.key === 'ArrowRight') {
			velocityX += 4;
		}
	};

	let doodler = {
		img: null,
		x: doodlerX,
		y: doodlerY,
		width: doodlerWidth,
		height: doodlerHeight
	};
	onMount(() => {
		ctx = canvasElement.getContext('2d');
		canvasElement.width = boardWidth;
		canvasElement.height = boardHeight;
		// ctx.fillStyle = 'green';
		// ctx.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);

		doodlerImg = new Image();
		doodlerImg.src = blueFace;
		doodlerImg.onload = () => {
			ctx.drawImage(doodlerImg, doodler.x, doodler.y, doodler.width, doodler.height);
		};
		requestAnimationFrame(update);
	});
	const update = () => {
		requestAnimationFrame(update);
		ctx.clearRect(0, 0, boardWidth, boardHeight);
		doodler.x += velocityX;
		if (doodler.x > boardWidth) {
			doodler.x = 0;
		}
		if (doodler.x + doodler.width < 0) {
			doodler.x = boardWidth;
		}
		ctx.drawImage(doodlerImg, doodler.x, doodler.y, doodler.width, doodler.height);
	};
</script>

<svelte:window on:keydown|preventDefault={handleKey} />
<div>
	<canvas bind:this={canvasElement} />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	canvas {
		background-color: lightcyan;
	}
</style>
