<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	export let src;
	export let isPause = false;
	export let isLoop = false;
	let audio: HTMLAudioElement;

	onMount(() => {
		audio.play();
	});
	afterUpdate(() => {
		if (isPause && audio) {
			audio.pause();
		}
	});
</script>

<audio {src} preload="auto" loop={isLoop} bind:this={audio} controls>
	<track kind="captions" />
</audio>

<style>
	audio {
		display: none;
	}
</style>
