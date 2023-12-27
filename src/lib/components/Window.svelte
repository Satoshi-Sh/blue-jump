<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import blueFace from '$lib/images/blueFace.png';
	import platform from '$lib/images/platform.png';
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
	let velocityY = 0;
	let initialVelocityY = -12;
	let gravity = 0.4;
	//platforms;
	let platformArray = [];
	let platformWidth = 120;
	let platformHeight = 25;
	let platformImg;

	const handleKey = (event) => {
		if (event.key === 'ArrowLeft' && velocityX != -4) {
			velocityX -= 4;
		}
		if (event.key === 'ArrowRight' && velocityX != 4) {
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

		doodlerImg = new Image();
		doodlerImg.src = blueFace;
		doodlerImg.onload = () => {
			ctx.drawImage(doodlerImg, doodler.x, doodler.y, doodler.width, doodler.height);
		};

		platformImg = new Image();
		platformImg.src = platform;

		velocityY = initialVelocityY;
		placePlatforms();

		requestAnimationFrame(update);
	});
	const update = () => {
		requestAnimationFrame(update);
		ctx.clearRect(0, 0, boardWidth, boardHeight);
		doodler.x += velocityX;
		if (doodler.x > boardWidth) {
			doodler.x = 0;
		} else if (doodler.x + doodler.width < 0) {
			doodler.x = boardWidth;
		}
		velocityY += gravity;
		doodler.y += velocityY;
		ctx.drawImage(doodlerImg, doodler.x, doodler.y, doodler.width, doodler.height);

		for (let i = 0; i < platformArray.length; i++) {
			let platform = platformArray[i];
			if (detectCollision(doodler, platform)) {
				velocityY = initialVelocityY;
			}
			ctx.drawImage(platformImg, platform.x, platform.y, platform.width, platform.height);
		}
	};

	const placePlatforms = () => {
		platformArray = [];
		let platform = {
			img: platformImg,
			x: boardWidth / 2,
			y: boardHeight - 90,
			width: platformWidth,
			height: platformHeight
		};
		platformArray.push(platform);
		platform = {
			img: platformImg,
			x: boardWidth / 2,
			y: boardHeight - 240,
			width: platformWidth,
			height: platformHeight
		};
		platformArray.push(platform);
	};

	const detectCollision = (a, b) => {
		return (
			a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y
		);
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
