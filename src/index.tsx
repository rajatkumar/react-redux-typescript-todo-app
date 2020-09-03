import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import TodoApp from './App';
import CustomContext from './CustomContext';
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    rootElement
);
