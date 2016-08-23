import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux';

import homeReducer from '../home/homeReducer';


const reducers = {
  home: homeReducer,
  routing: routing
};


export default combineReducers(reducers);