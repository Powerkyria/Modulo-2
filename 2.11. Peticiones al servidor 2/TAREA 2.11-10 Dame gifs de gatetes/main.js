'use strict';

const img = document.querySelector('.picture');

function getCat() {
	fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif', {
		headers: {
			'x-api-key': '75befdf4-72d1-47b7-814f-58e6db172698',
		},
	})
		.then((response) => response.json())
		.then((data) => {

			img.src = data[0].url;
			img.alt = 'Un gato';
		});
}

window.addEventListener('load', getCat);
