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
