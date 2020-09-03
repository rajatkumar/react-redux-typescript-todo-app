import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';
import { TodoItem } from '../redux/types';
interface DispatchProps {
    toggleTodo: typeof toggleTodo;
    todo: TodoItem;
}

type Props = DispatchProps;

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
