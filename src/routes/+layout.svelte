<script>
	import '../app.css';
	import ThemeController from '$lib/components/ThemeController.svelte';
	import { fade } from 'svelte/transition';
	import { theme } from '$lib/themeStore';
</script>

<main>
	{#key $theme}
		<img
			transition:fade
			src={$theme === 'dark' ? '/images/bg-desktop-dark.jpg' : '/images/bg-desktop-light.jpg'}
			alt="background"
		/>
	{/key}

	<ThemeController />
	<slot />
</main>

<style>
	main {
		position: relative;
		padding-top: 256px;
		& img {
			position: absolute;
			height: 256px;
			top: 0px;
		}
	}
</style>
