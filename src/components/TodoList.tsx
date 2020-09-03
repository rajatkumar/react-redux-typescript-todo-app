import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import { RootState, TodoItemList } from '../redux/types';

type Props = TodoItemList;

const TodoList = ({ todos }: Props) => (
    <ul className="todo-list">
        {todos && todos.length
            ? todos.map((todo, index) => {
                  return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
            : 'No todos, yay!'}
    </ul>
);

const mapStateToProps = (state: RootState) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};
// export default TodoList;
type StateProps = ReturnType<typeof mapStateToProps>;
export default connect(mapStateToProps)(TodoList);
