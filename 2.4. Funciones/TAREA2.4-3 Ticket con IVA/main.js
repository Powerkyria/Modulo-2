'use strict';

function ticket(price) {
	const iva = 21 * price / 100;
	const total = price + iva;

	const result = `El precio sin IVA: ${price}€, IVA: ${iva}€, total: ${total}€.`;

	return result;
}

console.log(ticket(10));
