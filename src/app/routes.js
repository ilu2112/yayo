import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomeContainer from '../home/HomeContainer';


export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ HomeContainer } />
  </Route>
);