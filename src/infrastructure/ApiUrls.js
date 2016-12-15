const ApiUrls = {
	loginUrl: 'login/',
	registerUrl: 'register/',
	productsUrl: 'products/',
	reviewsUrl: (productId) => {
		return `reviews/${productId}/`;
	}
}

export default ApiUrls;