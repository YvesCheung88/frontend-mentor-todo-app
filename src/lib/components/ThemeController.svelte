<script lang="ts">
	import { browser } from '$app/environment';
	import Moon from '$lib/images/Moon.svelte';
	import Sun from '$lib/images/Sun.svelte';

	let theme = localStorage.getItem('theme') ?? 'dark';
	$: if (browser && document) {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}

	function toggle() {
		if (theme === 'dark') {
			theme = 'light';
		} else {
			theme = 'dark';
		}
	}
</script>

<button on:click={toggle}>
	{#if theme === 'dark'}
		<Moon />
	{:else}
		<Sun />
	{/if}
</button>
