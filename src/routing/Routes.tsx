import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomLoadable from './ReactLoadable';

// ATTENTION!!
// The webpackChunkName comment is important. webpack uses this to dynamically load page components.
// The value *must* be unique and ideally match the corresponding const/component.
const ErrorView = CustomLoadable({
    loader: () => import(
        '../views/ErrorView'
        /* webpackChunkName: "ErrorView" */
        )
});

const ExampleView = CustomLoadable({
    loader: () => import(
        '../views/ExampleView'
        /* webpackChunkName: "ExampleView" */
        )
});

const LoadingView = CustomLoadable({
    loader: () => import(
        '../views/LoadingView'
        /* webpackChunkName: "LoadingView" */
        )
});

const OtherExampleView = CustomLoadable({
    loader: () => import(
        '../views/OtherExampleView'
        /* webpackChunkName: "OtherExampleView" */
        )
});

const Routes = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path={'/error'}
                component={ErrorView}
            />

            <Route
                exact={true}
                path={'/example'}
                component={ExampleView}
            />

            <Route
                exact={true}
                path={'/loading'}
                component={LoadingView}
            />

            <Route
                exact={true}
                path={'/other-example'}
                component={OtherExampleView}
            />

            <Redirect path="/" to="/example"/>
        </Switch>
    );
};

export default Routes;
