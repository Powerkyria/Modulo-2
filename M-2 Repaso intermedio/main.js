'use strict';

const button = document.querySelector('.btn');
const body = document.querySelector('body');
const select = document.querySelector('select');
const face = document.querySelector('.face');

// Función que cambia la cara

function state() {
	face.innerHTML = select.value;
}

// Función para obtener un número aleatorio hasta 100

function number() {
	return Math.floor(Math.random() * 101);
}

// Función de números pares e impares, declarando dentro la
// función anterior, condiciones y cambio de color de fondo

function parImpar() {
	const result = number();

	if (result % 2 === 1) {
		body.classList.add('orange');
	} else if (result % 2 === 0) {
		body.classList.remove('orange');
	}
	console.log(result);
}

function allFunctions() {
	state();
	parImpar();
}

button.addEventListener('click', allFunctions);

