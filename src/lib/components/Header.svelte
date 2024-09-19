<script lang="ts">
	import ThemeController from './ThemeController.svelte';
</script>

<div>
	<h1>TODO</h1>
	<ThemeController />
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: -100px;
		& h1 {
			margin: 20px 0;
			font-size: 46px;
			font-weight: 700;
		}
	}
</style>
