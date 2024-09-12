<script lang="ts">
	import { browser } from '$app/environment';
	import IconMoon from '$lib/images/IconMoon.svelte';
	import IconSun from '$lib/images/IconSun.svelte';
	import { onMount } from 'svelte';

	export let theme = 'dark';
	$: if (browser && document) {
		document.documentElement.dataset.theme = theme;
	}
	onMount(() => {
		theme = localStorage.getItem('theme') ?? 'dark';
	});

	function toggle() {
		if (theme === 'dark') {
			theme = 'light';
		} else {
			theme = 'dark';
		}
		localStorage.setItem('theme', theme);
	}
</script>

<button on:click={toggle}>
	{#if theme === 'dark'}
		<IconMoon />
	{:else}
		<IconSun />
	{/if}
</button>
