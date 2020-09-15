'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_14_asincronia#ejercicio-8

// TAREAS A

// 1.

const funA = () => {
	console.log('hola');
};

// 2.

const funB = () => {
	funA();
};

// 3.

funB();

// RESPUESTA : Se reproducen de abajo hacia arriba, funB llama a funA y esta dice 'hola'.

/*********************************************/

// TAREAS B

// 1. 2 .3.

if ('Hello' === 'hello') {
	console.log('lo son');
} else {
	console.log('no lo son');
}

// RESPUESTA: No lo son.

/***********************************************/

// TAREAS C

// 1.

const button = document.querySelector('button');

function pulsado() {
	const text = 'pulsado';
	console.log(text);
}

// 2.

button.addEventListener('click', pulsado);

// 3.

console.log('empezamos');

// ¿Sabrías explicar por qué se ejecutan en ese orden?
