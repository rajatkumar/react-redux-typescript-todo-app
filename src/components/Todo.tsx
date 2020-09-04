import React from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';
import { TodoItem } from '../redux/types';

// This is components own props
interface OwnProps {
    todo: TodoItem;
}

// The final list of Props
type Props = OwnProps;

const Todo = ({ todo }: Props) => {
    const dispatch = useDispatch();
    return (
        <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
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
};

export default Todo;
