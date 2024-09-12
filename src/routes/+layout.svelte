<script>
	import '../app.css';
	import ThemeController from '$lib/components/ThemeController.svelte';
	let theme = 'dark';
</script>

<main>
	<img
		src={theme === 'dark' ? '/images/bg-desktop-dark.jpg' : '/images/bg-desktop-light.jpg'}
		alt="background"
	/>
	<ThemeController bind:theme />
	<slot />
</main>
