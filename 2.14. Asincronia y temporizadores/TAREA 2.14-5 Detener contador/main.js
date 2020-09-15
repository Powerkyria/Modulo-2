'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_14_asincronia#ejercicio-5

let counter = 0;

const incrementAndShowCounter = () => {
	counter++;
	const time = document.querySelector('.time');
	time.innerHTML = counter;

	if (counter === 12) {
		clearInterval(interval);
	}
};

let interval = setInterval(incrementAndShowCounter, 1000);
