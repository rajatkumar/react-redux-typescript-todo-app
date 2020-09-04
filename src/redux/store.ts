import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import getTodoList from './sagas/watchers';

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleWare.run(getTodoList);

export default store;
