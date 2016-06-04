
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from 'redux/createStore';
import getRoutes from 'routes';
import './assets/fonts/icomoon/style.css';
import './sass/global.scss';

const store = createStore();

render(

    <Provider store={store}>
        <Router history={browserHistory}>
            {getRoutes()}
        </Router>
    </Provider>,

    document.getElementById('root')
);
