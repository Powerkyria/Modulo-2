'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_5_eventos#ejercicio-2

const button = document.querySelector('.enviar');
const name = document.querySelector('.nombre');

function saludar() {
	console.log(`Hola ${name.value} !`);
}

button.addEventListener('click', saludar);
