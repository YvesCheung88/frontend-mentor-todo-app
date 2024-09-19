<script lang="ts">
	import { addTodo } from '$lib/stores/Todo';

	let todoTextValue = '';

	function onSubmitToList() {
		if (todoTextValue.trim() !== '') {
			addTodo({
				text: todoTextValue
			});
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
