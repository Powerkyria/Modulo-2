'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_4_funciones#ejercicio-6

function getEl(x) {
	const selector = document.querySelector(x);

	if (selector === null) {
		console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
	} else {
		return console.log(selector.innerHTML);
	}
}
getEl('.titulo');
