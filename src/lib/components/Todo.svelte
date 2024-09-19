<script lang="ts">
	import type { Todo } from '$lib/stores/Todo';
	import { fade } from 'svelte/transition';
	export let todo: Todo;
	export let todoList: Todo[];
	function removeFromList() {
		todoList = todoList.filter((item) => item.id !== todo.id);
	}
</script>

<div class="list" transition:fade>
	<input type="checkbox" bind:checked={todo.status} />
	<span class:checked={todo.status}>{todo.text}</span>
	<button on:click={() => removeFromList()}>
		<img src="/images/icon-cross.svg" alt="cross" />
	</button>
</div>

<style>
	.list {
		background-color: grey;
		border: 1px solid red;
		padding: 15px;
		display: flex;
		& input[type='checkbox'] {
			appearance: none;
			border: 1px solid black;
			width: 20px;
			border-radius: 100%;
			margin-right: 15px;
			&:checked {
				background-image: url('/images/icon-check.svg');
				background-repeat: no-repeat;
				background-position: center;
			}
		}
		& span {
			white-space: nowrap;
			&.checked {
				text-decoration: line-through;
			}
		}
		& button {
			margin-left: auto;
		}
	}
</style>
