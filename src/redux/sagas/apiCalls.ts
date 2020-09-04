import axios from 'axios';
import { TodoItem } from '../types';
export const TODO_API_URL = 'http://localhost:5000/todos';
axios.defaults.baseURL = TODO_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export async function getTodoListAPI() {
    const response = await axios.get('/');
    return response.data;
}
export async function updateTodoItemAPI(todoItem: TodoItem) {
    const id = todoItem.id;
    const response = await axios.put(`/${id}`, todoItem);
    return response.data;
}
export async function createTodoItemAPI(todoItem: TodoItem) {
    if (todoItem.id) {
        delete todoItem.id;
    }
    const response = await axios.post(`/`, todoItem);
    return response.data;
}
