import { VisibilityFilterState } from './redux/types';

export const VISIBILITY_FILTERS: Record<string, VisibilityFilterState> = {
    ALL: 'all',
    COMPLETED: 'completed',
    INCOMPLETE: 'incomplete',
};
