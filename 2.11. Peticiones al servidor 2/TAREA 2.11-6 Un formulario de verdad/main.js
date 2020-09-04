'use strict';

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

//Obtengo el objeto guardado en el LS y lo paso a cadena para pintarlos en el formulario

function getName() {
	const data = JSON.parse(localStorage.getItem('data'));
	inputName.value = data.name;
	inputSurname.value = data.surname;
	text.innerHTML = data.name + ' ' + data.surname;
}

getName();
