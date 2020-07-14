'use strict';

const tasks = [
	{ name: 'Recoger setas en el campo', completed: true },
	{ name: 'Comprar pilas', completed: true },
	{ name: 'Poner una lavadora de blancos', completed: true },
	{
		name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
		completed: false
	}
];

// 1. Mostrar una frase que indique cuántas tareas hay.

document.body.innerHTML = `<h1>Mi lista de tareas</h1><p>Numero de tareas: ${tasks.length}</p><ul class='list'></ul>`;

// 2. Pintar todas las tareas en pantalla.

let list = document.querySelector('.list');

for (let i = 0; i < tasks.length; i++) {
	list.innerHTML += `<li>${tasks[i].name}</li>`;
}

// 3. Tachar las ya realizadas.
// 4.Permitir marcar una tarea como 'completa' o 'incompleta'.

const listItems = document.querySelectorAll('li');
const checkboxTrue = '<input type="checkbox" checked>'
const checkboxFalse = '<input type="checkbox">'

for (let i = 0; i < tasks.length; i++) {
	if (tasks[i].completed === true) {
		(listItems[i].classList.add('completed')) || (listItems[i].innerHTML += checkboxTrue);

	} else{
		(listItems[i].classList.remove('completed')) || (listItems[i].innerHTML += checkboxFalse);
	}
}

