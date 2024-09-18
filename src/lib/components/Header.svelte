<script lang="ts">
	import ThemeController from './ThemeController.svelte';
</script>

<div>
	<h1>TODO</h1>
	<ThemeController />
</div>

<style>
	div {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
