'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_4_funciones#ejercicio-1

function mult(a, b) {
	return a * b;
}

console.log(mult(3, 3));

// METIENDO RESULTADO EN UNA CONSTANTE

function mult(a, b) {
	const result = a * b;

	return result;
}

console.log(mult(4, 3));
