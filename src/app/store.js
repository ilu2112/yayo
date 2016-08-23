import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers';


function configureStore() {
  const loggerMiddleware = createLogger();
  const routeMiddleware = routerMiddleware(browserHistory);

  const store = createStore(reducers,
    applyMiddleware(
      loggerMiddleware,
      routeMiddleware
    )
  );
  return store;
}

export default configureStore();