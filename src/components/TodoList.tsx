import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import { RootState } from '../redux/types';

// used by Connect
const mapStateToProps = (state: RootState) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};
// the type coming from connect's state props ;
type StateProps = ReturnType<typeof mapStateToProps>;

// props expected by this components
interface OwnProps {}
type Props = OwnProps & StateProps;

const TodoList = ({ todos }: Props) => (
    <ul className="todo-list">
        {todos && todos.length
            ? todos.map((todo, index) => {
                  return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
            : 'No todos, yay!'}
    </ul>
);

export default connect(mapStateToProps)(TodoList);
