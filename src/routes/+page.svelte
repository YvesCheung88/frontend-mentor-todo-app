<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import { todos } from '$lib/stores/Todo';
	import TodoTextInput from '$lib/components/TodoTextInput.svelte';
	import Todo from '$lib/components/Todo.svelte';
	import FooterTodoList from '$lib/components/FooterTodoList.svelte';
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
	{#each $todos as todo (todo)}
		<Todo {todo} />
	{/each}
	<!-- <FooterTodoList bind:todoList filteredToDoList={$todos} /> -->
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
		}
	}
</style>
