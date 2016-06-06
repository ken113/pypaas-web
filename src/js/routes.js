
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { home, categories, detail } from './pages';
import Layout from 'pages/layout';

export default () => {

    return (
        <Route path="/" component={Layout}>
            <IndexRoute component={home}></IndexRoute>
            <Route path="categories(/:type)" component={categories}></Route>
            <Route path="detail/:id" component={detail}></Route>
        </Route>
    );
};

