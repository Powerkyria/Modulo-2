'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_11_peticiones_al_servidor_2#ejercicio-10-bonus

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
