import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';
import { VisibilityFilterState } from './types';

let nextTodoId = 0;

export const addTodo = (content: string) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content,
        completed: false,
    },
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const setFilter = (filter: VisibilityFilterState) => ({
    type: SET_FILTER,
    payload: { filter },
});
