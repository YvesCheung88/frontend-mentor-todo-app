<script lang="ts">
	import { filteredTodos, type Todo as TodoType } from '$lib/stores/Todo';
	import { flip } from 'svelte/animate';
	import FooterTodoList from './FooterTodoList.svelte';
	import Todo from './Todo.svelte';
	$: components = [...$filteredTodos, 'footer'];

	const castTodoType = (data: any) => data as TodoType;
</script>

{#each components as component (component)}
	<div animate:flip>
		{#if 'footer' === component}
			<FooterTodoList />
		{:else}
			<Todo todo={castTodoType(component)} />
		{/if}
	</div>
{/each}
