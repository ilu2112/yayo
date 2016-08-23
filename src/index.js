import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './app/store';
import routes from './app/routes'


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={ routes } history={ history } />
  </Provider>,
  document.getElementById('root')
);