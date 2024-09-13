import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let initialTheme = 'dark';

if (browser && document.documentElement.dataset.theme) {
	initialTheme = document.documentElement.dataset.theme;
}

export const theme = writable(initialTheme);
if (browser) {
	theme.subscribe((newTheme) => {
		localStorage.setItem('theme', newTheme);
		document.documentElement.dataset.theme = newTheme;
	});
}

export const toggleTheme = () => {
	theme.update((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
};
