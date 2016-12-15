import Constants from './constants';

const api = {
	request: (action, method, data, done, err) => {
		let xhr = new XMLHttpRequest();

		xhr.open(method, Constants.hostUrl + action);
		xhr.setRequestHeader(`Content-type`, `application/json`);

		if(method === `POST`){
			xhr.send(data);
		} else {
			xhr.send();
		}

		xhr.addEventListener('load', (data) => {
			console.log(data.target.responseText);
			done(JSON.parse(data.target.responseText));
		});

		// xhr.addEventListener('error', (error) => {
		// 	console.log(error.target.responseText);
		// 	err(error.target.responseText);
		// });
	},
	get: (action, data, done, err) => {
		api.request(action, 'GET', data, done, err);
	},
	post: (action, data, done, err) => {
		api.request(action, 'POST', data, done, err);
	}
};

export default api;