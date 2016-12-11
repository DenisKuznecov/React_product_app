import React from 'react';
import { Link } from 'react-router';
import api from '../../infrastructure/api';

class Registration extends React.Component {
	constructor() {
		super();

		this.state = {
			register: {
				username: ``,
				password: ``
			}
		};
		this.getUserData = this.getUserData.bind(this);
	}

	getUserData(e) {
		e.preventDefault();
		this.setState({
			register: {
				username: document.getElementById('username').value,
				password: document.getElementById('password').value
			}
		}, () => {
			api.request(`register/`, `POST`, JSON.stringify(this.state.register));
		});
	}

	render() {
		return(
			<div className="jumbotron">
				<div className="registr-form-wrap">
					<Link to="/" className="go-back-btn"><i className="glyphicon glyphicon-arrow-left"></i>Back</Link>
					<form>
						<div className="form-group">
							<label for="usr">Name:</label>
							<input type="text" className="form-control" id="username" required/>
						</div>
						<div className="form-group">
							<label for="pwd">Password:</label>
							<input type="password" className="form-control" id="password" required/>
						</div>
						<button type="submit" onClick={this.getUserData} className="btn btn-primary">Sign Up</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Registration;