import React, { useContext } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import CustomContext from './CustomContext';

export default function TodoApp() {
    const contextText = useContext(CustomContext);
    return (
        <div className="todo-app">
            <h1>Todo List {contextText}</h1>
            <VisibilityFilters />
            <AddTodo />
            <TodoList />
        </div>
    );
}
