import React, { useEffect } from 'react';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import { useTypedSelector } from '../redux/reducers';

const TodoList = () => {
    const todos = useTypedSelector((state) => {
        const { visibilityFilter } = state;
        return getTodosByVisibilityFilter(state, visibilityFilter);
    });

    return (
        <ul className="todo-list">
            {todos && todos.length
                ? todos.map((todo, index) => {
                      return <Todo key={`todo-${todo.id}`} todo={todo} />;
                  })
                : 'No todos, yay!'}
        </ul>
    );
};

export default TodoList;
