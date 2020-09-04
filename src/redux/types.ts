import {
    TOGGLE_TODO,
    SET_FILTER,
    TODO_LIST_LOADED,
    UPDATE_TODO_API,
    ADD_TODO_API,
} from './actionTypes';

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

export type TodoListLoadedAction = {
    type: typeof TODO_LIST_LOADED;
    payload: TodoItem[];
};

export type UpdateTodoApiAction = {
    type: typeof UPDATE_TODO_API;
    payload: TodoItem;
};

export type CreateTodoApiAction = {
    type: typeof ADD_TODO_API;
    payload: TodoItem;
};

export type AllActionTypes =
    | ToggleTodoAction
    | SetFilterAction
    | TodoListLoadedAction;

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
