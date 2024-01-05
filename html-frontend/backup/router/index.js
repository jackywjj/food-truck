import React from 'react';
import Layout from '../layout';
import { Route, Switch } from 'react-router-dom';

const Router = () => {
  return (

    <Switch>
      <Route
        path='/'
        component={Layout}
      />
    </Switch>

  );
};

export default Router;
