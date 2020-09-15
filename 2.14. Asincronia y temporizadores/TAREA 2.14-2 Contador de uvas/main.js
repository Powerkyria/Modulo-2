'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_14_asincronia#ejercicio-2

const img = document.querySelector('img');

let counter = 0;

const incrementAndShowCounter = () => {
	counter++;
	const time = document.querySelector('.time');

	time.innerHTML = counter;

	img.src = './image/uvas.jpg';

	// ARREGLAR PARA QUE SEA UNA IMAGEN CADA SEGUNDO

	if (counter === 12) {
		img.src = './image/feliz.gif';
		time.remove();
	}
};

setInterval(incrementAndShowCounter, 1000);