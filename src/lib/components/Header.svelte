<script lang="ts">
	import ThemeController from './ThemeController.svelte';
</script>

<div class="todo-container">
	<h1 class="todo-title">TODO</h1>
	<ThemeController />
</div>

<style lang="postcss">
	.todo-container {
		@apply flex justify-between mt-[-170px] dark:text-dark-100;
		& h1 {
			@apply my-5 text-5xl font-bold tracking-[15px];
		}
	}
</style>
