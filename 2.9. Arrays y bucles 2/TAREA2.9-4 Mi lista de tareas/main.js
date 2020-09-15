'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_9_array_y_bucles_2#ejercicio-4

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

document.body.innerHTML = `<h1>Mi lista de tareas</h1><p>Número de tareas: ${tasks.length}</p><p class='message'></p><ul class='list'></ul>`;

// 2. Pintar todas las tareas en pantalla.

const list = document.querySelector('.list');

for (let i = 0; i < tasks.length; i++) {
	list.innerHTML += `<li>${tasks[i].name}</li>`;
}

// 3. Tachar las ya realizadas.
// 4.Permitir marcar una tarea como 'completa' o 'incompleta'.

const listItems = document.querySelectorAll('li');
const checkboxTrue = '<input type="checkbox" checked>';
const checkboxFalse = '<input type="checkbox">';

for (let i = 0; i < tasks.length; i++) {
	if (tasks[i].completed === true) {
		listItems[i].classList.add('completed') || (listItems[i].innerHTML += checkboxTrue);
	} else {
		listItems[i].classList.remove('completed') || (listItems[i].innerHTML += checkboxFalse);
	}
}

//Una vez añadidos los checkbox en el html ya los podemos recuperar del document y meterlo en una variable.

const inputs = document.querySelectorAll('input');

//c) Cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:

// la tarea debe mostrarse como completada (tachada)
// debemos modificar su estado (propiedad completed) en el array tasks.

function updateStatus() {
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked === true) {
			listItems[i].classList.add('completed');
			tasks[i].completed = true;
		} else {
			listItems[i].classList.remove('completed');
			tasks[i].completed = false;
		}
	}

	// d) Tareas totales. Cada vez que una tarea se marque/desmarque deberíamos actualizar esta información.

	let message = document.querySelector('.message');

	let completedTasks = document.querySelectorAll('input:checked').length;

	let incompleteTasks = parseInt(tasks.length) - parseInt(completedTasks);

	// Actualizamos mensaje
	message.innerHTML = `Tienes ${tasks.length} tareas. ${completedTasks} completadas y ${incompleteTasks} por realizar.`;
}

for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('change', updateStatus);
}

// LLamamos a la función para que actualice el mensaje
updateStatus();
