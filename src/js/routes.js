
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { AppContainer, HomeContainer, CatgegiesContainer } from 'containers';
import detail from 'pages/detail';

export default () => {

    return (
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomeContainer}></IndexRoute>
            <Route path="categories(/:type)" component={CatgegiesContainer}></Route>
            <Route path="detail/:id" component={detail}></Route>
        </Route>
    );
};

