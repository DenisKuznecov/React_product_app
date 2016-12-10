import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/reset.css/reset.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);