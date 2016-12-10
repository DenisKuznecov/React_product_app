import React from 'react';
import { Link } from 'react-router';

class LogIn extends React.Component {
	render() {
		return(
			<div className="jumbotron">
				<div className="login-form-wrap">
					<Link to="/" className="go-back-btn"><i className="glyphicon glyphicon-arrow-left"></i>Back</Link>
					<div className="form-group">
						<label for="usr">Name:</label>
						<input type="text" className="form-control" id="usr"/>
					</div>
					<div className="form-group">
						<label for="pwd">Password:</label>
						<input type="password" className="form-control" id="pwd"/>
					</div>
					<button className="btn btn-primary">Log In</button>
				</div>
			</div>
		);
	}
}

export default LogIn;