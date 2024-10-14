<script lang="ts">
	import IconMoon from '$lib/icons/IconMoon.svelte';
	import IconSun from '$lib/icons/IconSun.svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<svelte:head>
	<script>
		const savedTheme = localStorage.getItem('theme');
		document.documentElement.dataset.theme = savedTheme ?? 'dark';
	</script>
</svelte:head>
<button on:click={toggleTheme}>
	{#if $theme === 'dark'}
		<IconMoon size={32} />
	{:else}
		<IconSun />
	{/if}
</button>
