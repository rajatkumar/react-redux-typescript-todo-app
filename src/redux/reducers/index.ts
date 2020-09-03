import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilters';
import todos from './todos';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../types';

const rootReducer = combineReducers({ todos, visibilityFilter });

export default rootReducer;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
