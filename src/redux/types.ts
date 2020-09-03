import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

export type AddTodoAction = {
    type: typeof ADD_TODO;
    payload: TodoItem;
};

export type ToggleTodoAction = {
    type: typeof TOGGLE_TODO;
    payload: {
        id: number;
    };
};

export type SetFilterAction = {
    type: typeof SET_FILTER;
    payload: {
        filter: VisibilityFilterState;
    };
};

export type AllActionTypes = AddTodoAction | ToggleTodoAction | SetFilterAction;

export type TodoItem = {
    id: number;
    completed: boolean;
    content: string;
};

export type TodoItemList = {
    todos: TodoItem[];
};

export type TodosState = {
    allIds: number[];
    byIds: Record<number, TodoItem>;
};

export type VisibilityFilterState = 'all' | 'completed' | 'incomplete';

export type RootState = {
    todos: TodosState;
    visibilityFilter: VisibilityFilterState;
};
