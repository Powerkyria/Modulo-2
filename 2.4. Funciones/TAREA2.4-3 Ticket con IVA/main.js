'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_4_funciones#ejercicio-3

function ticket(price) {
	const iva = 21 * price / 100;
	const total = price + iva;

	const result = `El precio sin IVA: ${price}€, IVA: ${iva}€, total: ${total}€.`;

	return result;
}

console.log(ticket(10));
