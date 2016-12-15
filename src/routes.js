import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProductPage from './components/productPage/ProductPage';
import Authentication from './components/common/Authentication';
import LogIn from './components/logIn/Login';
import Registration from './components/registration/Registration';
import Sitemap from './infrastructure/Sitemap';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Authentication}></IndexRoute>
		<Route path={Sitemap.loginPage} component={LogIn}></Route>
		<Route path={Sitemap.registerPage} component={Registration}></Route>
		<Route path={Sitemap.productPage} component={ProductPage}></Route>
	</Route>

);
