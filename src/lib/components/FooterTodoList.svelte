<script lang="ts">
	import { clearCompleted, todoFilter, todos, type Todo } from '$lib/stores/Todo';
	const filters = ['all', 'active', 'completed'] as const;
	$: taskLeftCounter = $todos.filter((todo) => !todo.status).length;
</script>

<div class="footerTodoList">
	<span>{taskLeftCounter} Item left</span>
	<div class="filters">
		{#each filters as name}
			<button
				class={`filter_${name}`}
				class:active={$todoFilter === name}
				on:click={() => ($todoFilter = name)}>{name}</button
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
