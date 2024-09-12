<script lang="ts">
	import ThemeController from '$lib/components/ThemeController.svelte';
	let newTodoList = '';
	let todoList = [
		{ text: 'Complete online Javascript course', status: false },
		{ text: 'Jog around the park 3x', status: false },
		{ text: '10 minutes meditation', status: false },
		{ text: 'Read for 1 hour', status: false },
		{ text: 'Pick up groceries', status: false },
		{ text: 'Complete Todo App on Frontend Mentor', status: false }
	];

	function addToList() {
		if (newTodoList.trim() !== '') {
			todoList = [...todoList, { text: newTodoList, status: false }];
			newTodoList = '';
		}
	}
	function removeFromList(index: number) {
		todoList.splice(index, 1);
		todoList = todoList;
	}
</script>

<h1>TO DO</h1>
<form>
	<input type="text" bind:value={newTodoList} placeholder="Create a new todo..." />
	<button on:click={addToList}>Add</button>
	{#each todoList as listItem, index}
		<input bind:value={listItem.status} type="checkbox" />
		<span>{listItem.text}</span>
		<button on:click={() => removeFromList(index)}> X</button>
	{/each}
	<span></span>
</form>

<style>
	:root {
		background-color: var(--very-dark-desaturated-blue);
	}
</style>
