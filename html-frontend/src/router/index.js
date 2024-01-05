import React from 'react';
import Layout from '../layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          component={Layout}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
