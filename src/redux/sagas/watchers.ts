import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
    GET_TODO_LIST_API,
    TODO_LIST_LOADED,
    API_ERRORED,
    UPDATE_TODO_API,
    ADD_TODO_API,
    TOGGLE_TODO,
} from '../actionTypes';
import {
    CreateTodoApiAction,
    UpdateTodoApiAction,
    ToggleTodoAction,
    RootState,
} from '../types';
import {
    getTodoListAPI,
    createTodoItemAPI,
    updateTodoItemAPI,
} from './apiCalls';
import { updateTodoApi } from '../actions';

export default function* rootSaga() {
    // yield all([getTodoListSaga(), updateTodoSaga(), addTodoSaga()]);
    yield takeEvery(ADD_TODO_API, createApiSaga);
    yield takeEvery(UPDATE_TODO_API, updateApiSaga);
    yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
    yield takeEvery(GET_TODO_LIST_API, getApiSaga);
}

const getTodoItemById = (state: RootState, id: number) => {
    const todos = state.todos;
    return todos.byIds[id];
};

function* toggleTodoSaga(action: ToggleTodoAction) {
    const { id } = action.payload;
    // change state locally first?
    const todoItem = yield select(getTodoItemById, id);
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
        yield put({ type: TODO_LIST_LOADED, payload: newPayload });
    } catch (e) {
        console.log(e);
        yield put({ type: API_ERRORED, payload: e });
    }
}

function* createApiSaga(action: CreateTodoApiAction) {
    const todoItem = action.payload;
    try {
        yield call(createTodoItemAPI, todoItem);
        yield put({ type: GET_TODO_LIST_API });
    } catch (e) {
        console.log(e);
        yield put({ type: API_ERRORED, payload: e });
    }
}

function* updateApiSaga(action: UpdateTodoApiAction) {
    const todoItem = action.payload;
    try {
        yield call(updateTodoItemAPI, todoItem);
        yield put({ type: GET_TODO_LIST_API });
    } catch (e) {
        console.log(e);
        yield put({ type: API_ERRORED, payload: e });
    }
}
