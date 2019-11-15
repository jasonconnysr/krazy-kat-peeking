import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomLoadable from './ReactLoadable';

// ATTENTION!!
// The webpackChunkName comment is important. webpack uses this to dynamically load page components.
// The value *must* be unique and ideally match the corresponding const/component.
const HomeView = CustomLoadable({
    loader: () => import(
        '../views/HomeView'
        /* webpackChunkName: "HomeView" */
        )
});

const Routes = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path={'/home'}
                component={HomeView}
            />

            <Redirect path="/" to="/home"/>
        </Switch>
    );
};

export default Routes;
