<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import TodoTextInput from '$lib/components/TodoTextInput.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
</script>

<figure>
	{#key $theme}
		<img
			in:fade={{ duration: 900 }}
			out:fade={{ duration: 900, delay: 450 }}
			src={$theme === 'dark' ? '/images/bg-desktop-dark.jpg' : '/images/bg-desktop-light.jpg'}
			alt="background"
		/>
	{/key}
</figure>
<div class="px-6 pb-11 max-w-[40rem] mx-auto">
	<Header />
	<TodoTextInput />
	<TodoList />
</div>

<style>
	:root {
		background-color: var(--very-dark-desaturated-blue);
	}
	figure {
		position: relative;
		padding-top: 256px;
		z-index: -1;
		& img {
			position: absolute;
			height: 256px;
			top: 0px;
			object-fit: cover;
			width: 100%;
		}
	}
</style>
