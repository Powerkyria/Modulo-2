'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_3_condicionales#ejercicio-3

const number = 23;

if (number === 0) {
	console.log('El número es 0');
} else if (number === -number) {
	console.log('El número es negativo');
} else if (number + 2 > 13 && number <= 20) {
	console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (number > 20 && number < 50) {
	console.log('El número es mayor que 20 pero menor que 50');
} else {
	console.log('el número no es 123123125');
}
