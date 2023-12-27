<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import blueFace from '$lib/images/blueFace.png';
	import platform from '$lib/images/platform.png';
	export let score;
	export let toggled;
	let canvasElement: HTMLCanvasElement;
	let boardWidth = 600;
	let boardHeight = 750;
	let ctx;
	let gameOver = false;

	// doodler
	let doodlerWidth = 90;
	let doodlerHeight = 90;
	let doodlerX = boardWidth / 2 + doodlerWidth / 2;
	let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;
	let doodlerImg;

	let doodler = {
		img: null,
		x: doodlerX,
		y: doodlerY,
		width: doodlerWidth,
		height: doodlerHeight
	};

	//physics
	let velocityX = 0;
	let velocityY = 0;
	let initialVelocityY = -10;
	let gravity = 0.4;

	//platforms;
	let platformArray = [];
	let platformWidth = 120;
	let platformHeight = 25;
	let platformImg;

	const handleKey = (event) => {
		if (event.key === 'ArrowLeft' && velocityX != -4) {
			velocityX -= 4;
		} else if (event.key === 'ArrowRight' && velocityX != 4) {
			velocityX += 4;
		} else if (event.key === ' ' && gameOver) {
			//reset
			toggled = !toggled;
			score = 0;
		}
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
		if (gameOver) {
			return;
		}
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
		if (doodler.y > boardHeight) {
			gameOver = true;
		}
		ctx.drawImage(doodlerImg, doodler.x, doodler.y, doodler.width, doodler.height);

		for (let i = 0; i < platformArray.length; i++) {
			let platform = platformArray[i];
			if (velocityY < 0 && doodler.y < (boardHeight * 3) / 4) {
				platform.y -= initialVelocityY;
				score += 1;
			}
			if (detectCollision(doodler, platform) && velocityY > 0) {
				velocityY = initialVelocityY;
			}
			ctx.drawImage(platformImg, platform.x, platform.y, platform.width, platform.height);
		}
		while (platformArray.length > 0 && platformArray[0].y >= boardHeight) {
			platformArray.shift();
			newPlatform();
		}
		if (gameOver) {
			ctx.font = '30px serif';
			ctx.fillStyle = 'blue';
			ctx.fillText("Game Over: Press 'Space' to Restart", boardWidth / 8, (boardHeight * 7) / 8);
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
		for (let i = 0; i < 6; i++) {
			let randomX = Math.floor((Math.random() * boardWidth * 3) / 4);
			platform = {
				img: platformImg,
				x: randomX / 2,
				y: boardHeight - 120 * i - 200,
				width: platformWidth,
				height: platformHeight
			};
			platformArray.push(platform);
		}
	};

	const newPlatform = () => {
		let randomX = Math.floor((Math.random() * boardWidth * 3) / 4);
		let platform = {
			img: platformImg,
			x: randomX / 2,
			y: -platformHeight,
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
