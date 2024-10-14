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
<section>
	<Header />
	<TodoTextInput />
	<TodoList />
</section>
<div class="message">
	<p>Drag and drop to reorder list</p>
</div>

<style lang="postcss">
	:root {
		@apply bg-dark-700 text-dark-200;
	}
	figure {
		@apply relative pt-64 -z-10;
		& img {
			@apply absolute h-64 top-0 object-cover w-full;
		}
	}
	section {
		@apply px-6 pb-11 max-w-[40rem] mx-auto;
	}
	p {
		@apply text-center text-dark-400;
	}
</style>
