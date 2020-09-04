import { TODO_LIST_LOADED } from '../actionTypes';
import { AllActionTypes, RootState, TodoItem } from '../types';

const initialState: RootState['todos'] = {
    allIds: [],
    byIds: {},
};

export default function(state = initialState, action: AllActionTypes) {
    switch (action.type) {
        case TODO_LIST_LOADED: {
            const { payload: listOfTodos } = action;
            const byIds: Record<number, TodoItem> = {};
            const allIds: number[] = [];
            listOfTodos.forEach((todoItem) => {
                allIds.push(todoItem.id);
                byIds[todoItem.id] = todoItem;
            });
            return { ...state, byIds, allIds };
        }
        default:
            return state;
    }
}
