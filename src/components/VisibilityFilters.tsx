import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../constants';
import { RootState, VisibilityFilterState } from '../redux/types';
type Props = {
    setFilter: typeof setFilter;
    activeFilter: VisibilityFilterState;
};
const VisibilityFilters = ({ activeFilter, setFilter }: Props) => {
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
                            setFilter(currentFilter);
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, {
    setFilter,
})(VisibilityFilters);
