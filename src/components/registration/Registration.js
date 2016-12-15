import React from 'react';
import { Link } from 'react-router';
import api from '../../infrastructure/api';
import ApiUrls from '../../infrastructure/ApiUrls';

class Registration extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: '',
			emptyField: {
				borderColor: '#f92f2f',
				boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 59, 59, 0.6)'
			},
			user: {},
			tooltipClass: '',
			tooltipText: ''
		};
		this.hideTooltip = this.hideTooltip.bind(this);
		this.getUserData = this.getUserData.bind(this);
		this.formValidate = this.formValidate.bind(this);
		this.saveEnterData = this.saveEnterData.bind(this);
	}

	saveEnterData(e) {
		if(e.target.getAttribute('type') === 'text') {
			this.setState({
				username: e.target.value
			});
		} else {
			this.setState({
				password: e.target.value
			});
		}
	}

	formValidate(usernameField, passwordField) {
		if(usernameField.value.length === 0) { //if username is empty
			Object.assign(usernameField.style, this.state.emptyField);

			if(passwordField.value.length === 0) { // if username and password empty
				Object.assign(passwordField.style, this.state.emptyField);
			}
		} else if(passwordField.value.length === 0) { //if password is empty
			Object.assign(passwordField.style, this.state.emptyField);

			if(usernameField.value.length === 0) { //if password and username is empty
				Object.assign(usernameField.style, this.state.emptyField);
			}
		}
	}

	hideTooltip() {
		this.setState({
			tooltipClass: ''
		});
	}

	getUserData() {
		const usernameField = this.refs.username;
		const passwordField = this.refs.password;

		usernameField.style = {};//reset style when click submit
		passwordField.style = {};//reset style when click submit

		if(usernameField.value.length !== 0 && passwordField.value.length !== 0) {
			let registerObj = {
				username: this.state.username,
				password: this.state.password
			};

			api.post(`${ApiUrls.registerUrl}`, JSON.stringify(registerObj), (response) => {
					if(response.success === true) {
						this.setState({
							user: response,
							tooltipClass: ' tooltip-success',
							tooltipText: 'You have successfully registered'
						});

						usernameField.value = '';
						passwordField.value = '';
					} else {
						this.setState({
							tooltipClass: ' tooltip-error',
							tooltipText: 'Sorry, but there was an error. Try again.'
						});
					}
					setTimeout(() => {
						this.hideTooltip();
					}, 2000);
				}
			);
		} else {
			this.formValidate(usernameField, passwordField);//make inputs red if they are empty
		}
	}

	render() {
		return(
			<div className="jumbotron">
				<div className="registr-form-wrap">
					<Link to="/" className="go-back-btn"><i className="glyphicon glyphicon-arrow-left"></i>Back</Link>
					<form>
						<div className="form-group">
							<label for="usr">Name:</label>
							<input type="text" onChange={this.saveEnterData} className="form-control" id="usr" ref="username" placeholder="username"/>
						</div>
						<div className="form-group">
							<label for="pwd">Password:</label>
							<input type="password" onChange={this.saveEnterData} className="form-control" id="pwd" ref="password" placeholder="password"/>
						</div>
						<button type="button" onClick={this.getUserData} className="btn btn-primary">Sign Up</button>
						<div className={`tooltip${this.state.tooltipClass}`}>
							{this.state.tooltipText}
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Registration;