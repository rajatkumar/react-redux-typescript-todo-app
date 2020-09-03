import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTERS } from '../../constants';
import { SetFilterAction } from '../types';

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action: SetFilterAction) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
