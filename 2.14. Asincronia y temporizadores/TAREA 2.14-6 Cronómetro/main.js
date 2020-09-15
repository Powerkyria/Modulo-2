'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_14_asincronia#ejercicio-6

const stOp = document.querySelector('.stop');
const start = document.querySelector('.start');
const timer = document.querySelector('.time');

let seconds = 0;
let interval;

const incrementAndShowCounter = () => {
	seconds++;
	timer.innerHTML = seconds;

	let min = Math.trunc(seconds / 60);

	if (min < 10) {
		if (seconds < 10) {
			timer.innerHTML = `0${min}:0${seconds - 60 * min}`;
		} else {
			timer.innerHTML = `0${min}:${seconds - 60 * min}`;
		}
	} else {
		if (seconds < 10) {
			timer.innerHTML = `${min}:0${seconds - 60 * min}`;
		} else {
			timer.innerHTML = `${min}:${seconds - 60 * min}`;
		}
	}
};

function startTimer() {
	interval = setInterval(incrementAndShowCounter, 1000);
}

function stopTimer() {
	clearInterval(interval);
	seconds = 0;
}

stOp.addEventListener('click', stopTimer);
start.addEventListener('click', startTimer);
