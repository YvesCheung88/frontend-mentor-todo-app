<script lang="ts">
	import IconMoon from '$lib/images/IconMoon.svelte';
	import IconSun from '$lib/images/IconSun.svelte';
	import { theme, toggleTheme } from '$lib/stores/themeStore';
</script>

<svelte:head>
	<script>
		const savedTheme = localStorage.getItem('theme');
		document.documentElement.dataset.theme = savedTheme ?? 'dark';
	</script>
</svelte:head>
<button on:click={toggleTheme}>
	{#if $theme === 'dark'}
		<IconMoon />
	{:else}
		<IconSun />
	{/if}
</button>
