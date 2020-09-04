import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    ADD_TODO_API,
    UPDATE_TODO_API,
} from './actionTypes';
import { VisibilityFilterState, TodoItem } from './types';

let nextTodoId = 0;

export const getTodoList = () => ({ type: 'GET_TODO_LIST_API' });

export const addTodo = (content: string) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content,
        completed: false,
    },
});

export const addTodoApi = (content: string) => ({
    type: ADD_TODO_API,
    payload: {
        content,
        completed: false,
    },
});

export const updateTodoApi = (todoItem: TodoItem) => ({
    type: UPDATE_TODO_API,
    payload: todoItem,
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const setFilter = (filter: VisibilityFilterState) => ({
    type: SET_FILTER,
    payload: { filter },
});
