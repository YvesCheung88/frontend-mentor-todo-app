<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import { flip } from 'svelte/animate';
	let newTodoList = '';
	let filter = 'all';
	let todoList = [
		{ text: 'Complete online Javascript course', status: false },
		{ text: 'Jog around the park 3x', status: false },
		{ text: '10 minutes meditation', status: false },
		{ text: 'Read for 1 hour', status: false },
		{ text: 'Pick up groceries', status: false },
		{ text: 'Complete Todo App on Frontend Mentor', status: false }
	];

	function onSubmitToList() {
		if (newTodoList.trim() !== '') {
			todoList = [...todoList, { text: newTodoList, status: false }];
			newTodoList = '';
		}
	}
	function removeFromList(index: number) {
		todoList.splice(index, 1);
		todoList = todoList;
	}
	$: filteredToDoList = todoList.filter((todo) => {
		if (filter === 'active') return !todo.status;
		if (filter === 'completed') return todo.status;
		return true;
	});
	function clearCompleted() {
		todoList = todoList.filter((todo) => !todo.status);
	}
	$: taskLeftCounter = todoList.filter((todo) => !todo.status).length;
</script>

<figure>
	{#key $theme}
		<img
			in:fade={{ duration: 900 }}
			out:fade={{ duration: 900, delay: 450 }}
			src={$theme === 'dark' ? '/images/bg-desktop-dark.jpg' : '/images/bg-desktop-light.jpg'}
			alt="background"
		/>
	{/key}
</figure>
<div class="px-6 pb-11 max-w-[40rem] mx-auto">
	<Header />
	<form on:submit|preventDefault={onSubmitToList}>
		<input type="text" bind:value={newTodoList} placeholder="Create a new todo..." />
	</form>
	{#each filteredToDoList as todo, index (todo)}
		<div class="list" transition:fade animate:flip>
			<input type="checkbox" bind:checked={todo.status} />
			<span class:checked={todo.status}>{todo.text}</span>
			<button on:click={() => removeFromList(index)}>
				<img src="/images/icon-cross.svg" alt="cross" />
			</button>
		</div>
	{/each}
	<div class="footerToDoList">
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
</div>

<style>
	:root {
		background-color: var(--very-dark-desaturated-blue);
	}
	figure {
		position: relative;
		padding-top: 256px;
		& img {
			position: absolute;
			height: 256px;
			top: 0px;
			object-fit: cover;
		}
	}
	form {
		display: grid;
		background-color: grey;
		padding: 20px;
		& input {
			border-radius: 4px;
			padding: 10px;
		}
	}
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
	.footerToDoList {
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
