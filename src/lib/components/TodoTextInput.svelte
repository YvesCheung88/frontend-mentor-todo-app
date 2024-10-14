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
	<input type="checkbox" disabled />
	<input type="text" bind:value={todoTextValue} placeholder="Create a new todo..." />
</form>

<style lang="postcss">
	form {
		@apply flex mb-5 p-4 rounded-md  bg-dark-600;
		& input {
			@apply outline-none size-[26px] bg-dark-600 mr-4;
		}
		& input[type='checkbox'] {
			@apply appearance-none rounded-full border border-dark-500;
		}
	}
</style>
