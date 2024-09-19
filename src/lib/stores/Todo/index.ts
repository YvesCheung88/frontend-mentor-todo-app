import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Todo = {
	id: number;
	text: string;
	status: boolean;
};

let currentId = 7;

export const createTodo = (data: Omit<Todo, 'id' | 'status'>): Todo => {
	return {
		...data,
		id: currentId++,
		status: false
	};
};

export const todos = writable<Todo[]>(
	process.env.NODE_ENV === 'development'
		? [
				{ text: 'Complete online Javascript course' },
				{ text: 'Jog around the park 3x' },
				{ text: '10 minutes meditation' },
				{ text: 'Read for 1 hour' },
				{ text: 'Pick up groceries' },
				{ text: 'Complete Todo App on Frontend Mentor' }
			].map(createTodo)
		: []
);

export const addTodo = (data: Omit<Todo, 'id' | 'status'>) => {
	todos.update(($todos) => [...$todos, createTodo(data)]);
};

export const removeTodo = (data: Pick<Todo, 'id'>) => {
	todos.update(($todos) => $todos.filter((todo) => todo.id !== data.id));
};

todos.subscribe(($todos) => {
	if (browser) {
		console.log($todos);
	}
});
