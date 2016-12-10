import React from 'react';
import { Link } from 'react-router';

class ProductPage extends React.Component {
	render() {
		return(
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, Redux and React Router ine ES6 for ultra-responsive web apps.</p>
				<Link to="/" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default ProductPage;