import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';
import { TodoItem } from '../redux/types';

// This is what we get from connect
interface DispatchProps {
    toggleTodo: typeof toggleTodo;
}
// This is components own props
interface OwnProps {
    todo: TodoItem;
}

// The final list of Props
type Props = DispatchProps & OwnProps;

const Todo = ({ todo, toggleTodo }: Props) => (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? '👌' : '👋'}{' '}
        <span
            className={cx(
                'todo-item__text',
                todo && todo.completed && 'todo-item__text--completed'
            )}
        >
            {todo.content}
        </span>
    </li>
);

// export default Todo;
export default connect(null, { toggleTodo })(Todo);
