<script lang="ts">
	import { clearCompleted, todoFilter, todos, type Todo } from '$lib/stores/Todo';
	const filters = ['all', 'active', 'completed'] as const;
	$: taskLeftCounter = $todos.filter((todo) => !todo.status).length;
</script>

<div class="TodoFooter">
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

<style lang="postcss">
	.TodoFooter {
		@apply bg-dark-600 p-4 flex justify-between rounded-b-md text-[hsl(235,19%,35%)];
		& .filters button {
			@apply capitalize px-2;
			&.active {
				@apply text-[hsl(220,98%,61%)];
			}
		}
	}
</style>
