import { derived, writable } from 'svelte/store';

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
export const todoFilter = writable<'all' | 'active' | 'completed'>('all');

export const filteredTodos = derived([todos, todoFilter], ([$todos, $todoFilter]) => {
	return $todos.filter((todo) => {
		if ($todoFilter === 'active') return !todo.status;
		if ($todoFilter === 'completed') return todo.status;
		return true;
	});
});

export const addTodo = (data: Omit<Todo, 'id' | 'status'>) => {
	todos.update(($todos) => [...$todos, createTodo(data)]);
};

export const removeTodo = (data: Pick<Todo, 'id'>) => {
	todos.update(($todos) => $todos.filter((todo) => todo.id !== data.id));
};

export const toggleTodoStatus = (data: Pick<Todo, 'id'>) => {
	todos.update(($todos) => {
		const targetTodo = $todos.find((todo) => todo.id === data.id)!;
		targetTodo.status = !targetTodo.status;
		return [...$todos];
	});
};

export const clearCompleted = () => {
	todos.update(($todos) => $todos.filter((todo) => !todo.status));
};

export const reorderTodos = (sourceId: number, targetId: number) => {
	todos.update(($todos) => {
		const sourceIndex = $todos.findIndex((todo) => todo.id === sourceId);
		const targetIndex = $todos.findIndex((todo) => todo.id === targetId);

		if (sourceIndex === -1 || targetIndex === -1 || sourceIndex === targetIndex) return $todos;

		const [movedTodo] = $todos.splice(sourceIndex, 1); // Retirer la tâche de sa position actuelle
		$todos.splice(targetIndex, 0, movedTodo); // Ajouter la tâche à la nouvelle position
		return [...$todos]; // Retourner le nouvel état
	});
};
