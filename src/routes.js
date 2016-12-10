import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomPage from './components/home/HomePage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomPage}></IndexRoute>
	</Route>
);
