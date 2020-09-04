import {
    TOGGLE_TODO,
    SET_FILTER,
    ADD_TODO_API,
    UPDATE_TODO_API,
    TODO_LIST_LOADED,
    GET_TODO_LIST_API,
    API_ERRORED,
} from './actionTypes';
import { VisibilityFilterState, TodoItem } from './types';

export const getTodoList = () => ({ type: GET_TODO_LIST_API });

export const todoListLoaded = (newPayload: TodoItem[]) => ({
    type: TODO_LIST_LOADED,
    payload: newPayload,
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

export const apiError = (payload: any) => ({ type: API_ERRORED, payload });
