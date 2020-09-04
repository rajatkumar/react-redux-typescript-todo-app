import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
    GET_TODO_LIST_API,
    UPDATE_TODO_API,
    ADD_TODO_API,
    TOGGLE_TODO,
} from '../actionTypes';
import {
    CreateTodoApiAction,
    UpdateTodoApiAction,
    ToggleTodoAction,
} from '../types';
import {
    getTodoListAPI,
    createTodoItemAPI,
    updateTodoItemAPI,
} from './apiCalls';
import {
    updateTodoApi,
    todoListLoaded,
    getTodoList,
    apiError,
} from '../actions';
import { getTodoById } from '../selectors';

export default function* rootSaga() {
    // yield all([getTodoListSaga(), updateTodoSaga(), addTodoSaga()]);
    yield takeEvery(ADD_TODO_API, createApiSaga);
    yield takeEvery(UPDATE_TODO_API, updateApiSaga);
    yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
    yield takeEvery(GET_TODO_LIST_API, getApiSaga);
}

function* toggleTodoSaga(action: ToggleTodoAction) {
    const { id } = action.payload;
    // change state locally first?
    const todoItem = yield select(getTodoById, id);
    if (todoItem) {
        const { content, completed } = todoItem;
        yield put(updateTodoApi({ id, content, completed: !completed }));
    } else {
        console.log('No update, invalid id');
    }
}

function* getApiSaga() {
    try {
        const newPayload = yield call(getTodoListAPI);
        yield put(todoListLoaded(newPayload));
    } catch (e) {
        console.log(e);
        yield put(apiError(e));
    }
}

function* createApiSaga(action: CreateTodoApiAction) {
    const todoItem = action.payload;
    try {
        yield call(createTodoItemAPI, todoItem);
        yield put(getTodoList());
    } catch (e) {
        console.log(e);
        yield put(apiError(e));
    }
}

function* updateApiSaga(action: UpdateTodoApiAction) {
    const todoItem = action.payload;
    try {
        yield call(updateTodoItemAPI, todoItem);
        yield put(getTodoList());
    } catch (e) {
        console.log(e);
        yield put(apiError(e));
    }
}
