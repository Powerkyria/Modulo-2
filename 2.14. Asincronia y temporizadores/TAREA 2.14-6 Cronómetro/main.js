'use strict';

// Crear un cronómetro que vaya aumentando en segundos y cuando se pulse el botón de parar deje de aumentar. Cuando pulsemos el de continuar, vuelva a empezar de nuevo.

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
