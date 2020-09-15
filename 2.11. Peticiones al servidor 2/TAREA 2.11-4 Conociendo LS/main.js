'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_11_peticiones_al_servidor_2#ejercicio-4

const input = document.querySelector('.name');
const text = document.querySelector('.text');

function writeText() {
	text.innerHTML = input.value;
	localStorage.setItem('name', text.innerHTML);
}

input.addEventListener('keyup', writeText);

function getName(){
	const keep = localStorage.getItem('name');
	text.innerHTML = keep;
	input.value = keep;
}

getName();