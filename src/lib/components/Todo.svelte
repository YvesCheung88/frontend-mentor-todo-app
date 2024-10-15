<script lang="ts">
	import { removeTodo, type Todo, toggleTodoStatus, reorderTodos } from '$lib/stores/Todo';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';

	export let todo: Todo;

	let status = todo.status;

	$: if (status !== todo.status) {
		toggleTodoStatus(todo);
	}

	function dragStart(event: DragEvent) {
		event.dataTransfer?.setData('text/plain', String(todo.id));
	}

	function dragOver(event: DragEvent) {
		event.preventDefault();
	}

	function drop(event: DragEvent) {
		event.preventDefault();
		const id = event.dataTransfer?.getData('text/plain');
		if (id) {
			reorderTodos(Number(id), todo.id);
		}
	}
</script>

<div
	class="list todo-item"
	transition:fade
	draggable="true"
	on:dragstart={dragStart}
	on:dragover={dragOver}
	on:drop={drop}
	role="listitem"
	aria-grabbed="false"
>
	<input
		type="checkbox"
		bind:checked={status}
		style={`--image: url('${base}/images/icon-check.svg')`}
	/>
	<span class:checked={todo.status}>{todo.text}</span>
	<button on:click={() => removeTodo(todo)}>
		<img src="{base}/images/icon-cross.svg" alt="cross" />
	</button>
</div>

<style lang="postcss">
	.list {
		@apply bg-dark-600 p-4 flex border-b;
		border-color: hsl(237 14% 26%);

		& input[type='checkbox'] {
			@apply appearance-none size-7 rounded-full mr-4 border border-dark-500 relative;
			&:checked {
				background:
					linear-gradient(to top left, hsl(280, 87%, 65%), hsl(192, 100%, 67%)) padding-box,
					linear-gradient(to top left, hsl(280, 87%, 65%), hsl(192, 100%, 67%)) border-box;
				&::after {
					@apply absolute size-3 m-auto inset-0 bg-cover;
					background-image: var(--image);
					content: ' ';
				}
			}
		}
		& span {
			@apply text-[hsl(234,39%,85%)];
			&.checked {
				@apply line-through text-[hsl(235,19%,35%)];
			}
		}
		& button {
			@apply ml-auto;
		}
	}
</style>
