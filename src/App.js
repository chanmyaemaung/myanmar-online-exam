import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Main from './components/Main';

import './App.css';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	);
};

export default App;
