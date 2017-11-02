import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import game from './game';

const reducers = combineReducers( {
	routerReducer,
	game,
} );

export default reducers;
