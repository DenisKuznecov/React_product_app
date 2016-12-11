import Constants from './constants';

const api = {
	request: (action, method, data, done) => {
		let xhr = new XMLHttpRequest();

		xhr.open(method, Constants.hostUrl + action);
		xhr.setRequestHeader(`Content-type`, `application/json`);

		if(method === `POST`){
			xhr.send(data);
		} else {
			xhr.send();
		}

		xhr.addEventListener('load', (data) => {
			console.log(JSON.parse(data.target.responseText));
		});

		xhr.addEventListener('error', (error) => {
			console.log(error);
		});
	}
};

export default api;