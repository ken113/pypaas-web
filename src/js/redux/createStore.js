
import { applyMiddleware, createStore as _createStore } from 'redux';
import reducers from './modules';
import * as axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

export default function createStore(data) {

    const client = axios.create({
        baseURL: '/api',
        responseType: 'json'
    });
    const middleware = [thunk, axiosMiddleware(client)];
    const finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const store = finalCreateStore(reducers,  window.__data);

    if (module.hot) {
        module.hot.accept('./modules', () => {
            store.replaceReducer(require('./modules'));
        });
    }

    return store;
};
