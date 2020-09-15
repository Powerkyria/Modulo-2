'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_11_peticiones_al_servidor_2#ejercicio-5

const inputLight = document.getElementById('light');
const inputDark = document.getElementById('dark');

function select() {
	if (inputLight.checked) {
		document.body.classList.add('light');
		document.body.classList.remove('dark');
		localStorage.setItem('value', inputLight.value);
	}
	if (inputDark.checked) {
		document.body.classList.add('dark');
		document.body.classList.remove('light');
		localStorage.setItem('value', inputDark.value);
	}
}

inputLight.addEventListener('change', select);
inputDark.addEventListener('change', select);

function getValue() {
	const value = localStorage.getItem('value');
	document.body.classList.add(value);
}

getValue();
