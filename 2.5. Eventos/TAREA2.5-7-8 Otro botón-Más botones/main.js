'use strict;';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_5_eventos#ejercicio-7

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_5_eventos#ejercicio-8

const buttonOk = document.querySelector('.ok');
const buttonSend = document.querySelector('.send');

function btn(event) {
	// Asignamos a una constante el elemento
	// sobre el que pusimos el `listener`
	// para trabajar cómodamente con él

	const selectedButton = event.currentTarget;

	// añadimos o quitamos clase

	selectedButton.classList.toggle('clase');
}

buttonOk.addEventListener('click', btn);
buttonSend.addEventListener('click', btn);
