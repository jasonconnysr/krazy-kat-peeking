import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomLoadable from './ReactLoadable';

// ATTENTION!!
// The webpackChunkName comment is important. webpack uses this to dynamically load page components.
// The value *must* be unique and ideally match the corresponding const/component.
const ExampleView = CustomLoadable({
    loader: () => import(
        '../views/ExampleView'
        /* webpackChunkName: "ExampleView" */
        )
});

const Routes = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path={'/example'}
                component={ExampleView}
            />

            <Redirect path="/" to="/example"/>
        </Switch>
    );
};

export default Routes;
