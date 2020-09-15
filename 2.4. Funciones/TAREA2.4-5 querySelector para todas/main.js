'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_4_funciones#ejercicio-5

function getEl(x) {
	const selector = document.querySelector(x);
	return selector;
}
const btnEl = getEl('.btn');

console.log(btnEl.innerHTML);
