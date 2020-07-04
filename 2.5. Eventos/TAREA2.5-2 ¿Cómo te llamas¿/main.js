'use strict';

const button = document.querySelector('.enviar');
const name = document.querySelector('.nombre');

function saludar() {
	console.log(`Hola ${name.value} !`);
}

button.addEventListener('click', saludar);
