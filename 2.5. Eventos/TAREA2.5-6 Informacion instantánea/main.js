'use strict;';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_5_eventos#ejercicio-6

const input = document.querySelector('.input');
const text = document.querySelector('.text');

function element(event) {
	text.innerHTML = event.currentTarget.value;
}
input.addEventListener('keyup', element);
