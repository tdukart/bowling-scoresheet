import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import Scoreboard from './components/Scoreboard';
import RecordRoll from './components/RecordRoll';

const history = createHistory();
const middleware = routerMiddleware( history );

const store = createStore(
	reducers,
	composeWithDevTools( applyMiddleware( middleware, thunkMiddleware ) )
);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<Scoreboard/>
						<RecordRoll/>
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}
