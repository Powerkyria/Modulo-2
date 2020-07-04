'use strict';

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
