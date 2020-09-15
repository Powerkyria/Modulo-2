'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_11_peticiones_al_servidor_2#ejercicio-7

// NOTA: En localStorage solo podemos guardar datos de tipo primitivo (número, cadena, booleano).

// ¿Qué pasa si queremos guardar un array o un objeto?
// Pues necesitamos convertirlo a una cadena para poder guardarlo.

const inputName = document.querySelector('.name');
const inputSurname = document.querySelector('.surname');
const text = document.querySelector('.text');
const form = document.querySelector('.form');

// Creo objeto, lo paso a cadena y los guardo en el LS

function writeText() {
	const userData = {
		name: inputName.value,
		surname: inputSurname.value
	};

	text.innerHTML = userData.name + ' ' + userData.surname;

	localStorage.setItem('data', JSON.stringify(userData));
}

form.addEventListener('keyup', writeText);

// 1.Obtengo el objeto guardado en el LS y lo paso a cadena para pintarlos en el formulario

// Borraremos el valor del localStorage a través de las DevTools. Con el localStorage limpito, recargaremos la página para simular la primera visita de la usuaria, dónde aun no habría información sobre el nombre guardada (cacheada).
// Si al realizar esta acción nos encontramos algún error tenemos que apañarlo

// 2.Soluciónamos el error:

function getName() {
	if (localStorage.getItem('data') !== null) {
		const data = JSON.parse(localStorage.getItem('data'));
		inputName.value = data.name;
		inputSurname.value = data.surname;
		text.innerHTML = data.name + ' ' + data.surname;
	} else {
		console.log('Los datos aún no han sido introducidos');
	}
}

getName();
