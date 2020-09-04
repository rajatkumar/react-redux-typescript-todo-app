import React, { useEffect } from 'react';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import { useTypedSelector } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import { getTodoList } from '../redux/actions';

const TodoList = () => {
    const dispatch = useDispatch();

    const todos = useTypedSelector((state) => {
        const { visibilityFilter } = state;
        return getTodosByVisibilityFilter(state, visibilityFilter);
    });

    useEffect(() => {
        // initialize by getting the data drom the API
        dispatch(getTodoList());
    }, [dispatch]);

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
