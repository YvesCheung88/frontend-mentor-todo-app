<script lang="ts">
	import { createTodo, type Todo } from '$lib/stores/Todo';
	export let todoList: Todo[];

	let todoTextValue = '';

	function onSubmitToList() {
		if (todoTextValue.trim() !== '') {
			const newTodo = createTodo({
				text: todoTextValue
			});
			todoList = [...todoList, newTodo];
			todoTextValue = '';
		}
	}
</script>

<form on:submit|preventDefault={onSubmitToList}>
	<input type="text" bind:value={todoTextValue} placeholder="Create a new todo..." />
</form>

<style>
	form {
		display: grid;
		background-color: grey;
		padding: 20px;
		& input {
			border-radius: 4px;
			padding: 10px;
		}
	}
</style>
