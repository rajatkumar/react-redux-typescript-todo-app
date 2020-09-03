import { VISIBILITY_FILTERS } from '../constants';
import { RootState, VisibilityFilterState } from './types';

export const getTodosState = (store: RootState) => store.todos;

export const getTodoList = (store: RootState) =>
    getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store: RootState, id: number) => {
    const todoState = getTodosState(store);
    const todoItem = todoState.byIds[id];
    return { ...todoItem, id };
};
/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store: RootState) =>
    getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (
    store: RootState,
    visibilityFilter: VisibilityFilterState
) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter((todo) => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter((todo) => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
