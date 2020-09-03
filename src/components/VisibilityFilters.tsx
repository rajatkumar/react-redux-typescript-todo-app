import React from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../constants';
import { useTypedSelector } from '../redux/reducers';

const VisibilityFilters = () => {
    const dispatch = useDispatch();
    const activeFilter = useTypedSelector((state) => state.visibilityFilter);
    return (
        <div className="visibility-filters">
            <span>Filter by: </span>
            {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            'filter',
                            currentFilter === activeFilter && 'filter--active'
                        )}
                        onClick={() => {
                            dispatch(setFilter(currentFilter));
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};

export default VisibilityFilters;
