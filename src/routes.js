import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProductPage from './components/productPage/ProductPage';
import Authentication from './components/common/Authentication';
import LogIn from './components/logIn/Login';
import Registration from './components/registration/Registration';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Authentication}></IndexRoute>
		<Route path="/login" component={LogIn}></Route>
		<Route path="/registration" component={Registration}></Route>
		<Route path="/product_list" component={ProductPage}></Route>
	</Route>

);
