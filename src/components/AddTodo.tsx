import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoApi } from '../redux/actions';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const updateInput = (input: string) => {
        setInput(input);
    };

    const handleAddTodo = () => {
        dispatch(addTodoApi(input));
        setInput('');
    };

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            handleAddTodo();
        }
    };

    return (
        <div className="add-todo-container">
            <input
                onChange={(e) => updateInput(e.target.value)}
                onKeyDown={keyPress}
                value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
