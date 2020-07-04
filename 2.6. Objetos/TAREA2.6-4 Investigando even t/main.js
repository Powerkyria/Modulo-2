'use strict';

const button = document.getElementById('boton');

function loguear(event) {
	console.log(event);
	console.log(event.type);//Devuelve click
}

button.addEventListener('click', loguear);
