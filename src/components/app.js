import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<Header/>
				</header>
				<div className="container">
					{ this.props.children }
					{/*&& React.cloneElement(this.props.children, {*/}
						{/*vasya: this.vasya)}*/}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;