'use strict';

// Crear una página con un botón que transcurridos 10 segundos te pregunte: "¿te has dormido?". Si pulsas en el botón la cuenta volverá a cero y otra vez, si transcurren 10 segundos sin pulsar volverá a preguntar de nuevo "¿te has dormido?"

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
