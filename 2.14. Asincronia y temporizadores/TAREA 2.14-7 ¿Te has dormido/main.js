'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_14_asincronia#ejercicio-7

const question = document.querySelector('.text');
const time = document.querySelector('.time');
const button = document.querySelector('.stop');

let counter = 0;

const counterAndQuestion = () => {
	counter++;

	time.innerHTML = counter;

	if (counter === 10) {
		question.innerHTML = '¿Te has dormido?';
	}
};

const stopButton = () => {
	counter = 0;
	question.innerHTML = '';
	clearInterval(interval);
	interval = setInterval(counterAndQuestion, 1000);
};

button.addEventListener('click', stopButton);

let interval = setInterval(counterAndQuestion, 1000);
