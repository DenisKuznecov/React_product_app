import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<IndexLink to="/" activeClassName="nav-links-active" className="nav-links">Authentication</IndexLink>
				<Link to="/product_list" activeClassName="nav-links-active" className="nav-links">Products</Link>
			</div>
		</nav>
	);
};

export default Header;