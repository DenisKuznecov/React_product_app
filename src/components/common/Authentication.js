import React from 'react';
import { Link } from 'react-router';

const Authentication = () => {
	return (
		<div className="jumbotron auth">
			<h2>Do you already have an account?</h2>
			<div className="yes-or-no">
				<Link to="/login" className="btn btn-default">Yes</Link>
				<span className="auth-choice">or</span>
				<Link to="/registration" className="btn btn-default">No</Link>
			</div>
		</div>
	);
}

export default Authentication;