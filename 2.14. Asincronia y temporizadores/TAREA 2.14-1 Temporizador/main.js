'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_14_asincronia#ejercicio-1

let counter = 0;

const incrementAndShowCounter = () => {
	counter = counter + 2;
	const time = document.querySelector('.time');
	time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);
