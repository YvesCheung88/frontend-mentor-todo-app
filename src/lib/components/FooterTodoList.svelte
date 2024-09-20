<script lang="ts">
	import { clearCompleted, type Todo } from '$lib/stores/Todo';
	let todoList: Todo[] = [];
	let filter = 'all';
	let filteredToDoList: Todo[];

	$: taskLeftCounter = todoList.filter((todo) => !todo.status).length;

	$: filteredToDoList = todoList.filter((todo) => {
		if (filter === 'active') return !todo.status;
		if (filter === 'completed') return todo.status;
		return true;
	});
</script>

<div class="footerTodoList">
	<span>{taskLeftCounter} Item left</span>
	<div class="filters">
		{#each ['all', 'active', 'completed'] as name}
			<button
				class={`filter_${name}`}
				class:active={filter === name}
				on:click={() => (filter = name)}>{name}</button
			>
		{/each}
	</div>
	<button on:click={clearCompleted}>Clear Completed</button>
</div>

<style>
	.footerTodoList {
		border: 1px solid red;
		background-color: grey;
		padding: 15px;
		display: flex;
		justify-content: space-between;
		& .filters button {
			text-transform: capitalize;
			padding: 0 5px;
			&.filter_all.active {
				color: blue;
			}
			&.filter_active.active {
				color: green;
			}
			&.filter_completed.active {
				color: pink;
			}
		}
	}
</style>
