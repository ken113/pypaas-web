
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { AppContainer, HomeContainer, CatgegiesContainer, DetailContainer } from 'containers';

export default () => {

    return (
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomeContainer}></IndexRoute>
            <Route path="categories(/:type)" component={CatgegiesContainer}></Route>
            <Route path="detail/:id" component={DetailContainer}></Route>
        </Route>
    );
};

