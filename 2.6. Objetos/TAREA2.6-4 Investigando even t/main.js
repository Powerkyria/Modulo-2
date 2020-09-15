'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_6_objetos#ejercicio-4

const button = document.getElementById('boton');

function loguear(event) {
	console.log(event);
	console.log(event.type); // Devuelve click
}

button.addEventListener('click', loguear);
